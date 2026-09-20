# Technical Architecture — Astro 7.3.3 + Netlify

## 1. Prinsip

Website ini content-first dan public-facing. Default arsitektur adalah **static-first**.

Tidak perlu database untuk MVP.

---

## 2. Stack

```text
Astro             7.3.3
TypeScript        strict
Hosting           Netlify
Content           Astro Content Collections
Content format    Markdown / MDX
Styling           CSS variables + utility approach seperlunya
Images            Astro image pipeline
Forms             Netlify Forms atau external form resmi bila dibutuhkan
Analytics         opsional, privacy-conscious
Search            opsional; Pagefind bila konten telah cukup banyak
```

Jangan menambah React/Vue/Svelte hanya untuk komponen statis.

---

## 3. Recommended Repository Structure

```text
/
├── public/
│   ├── favicon/
│   ├── images/
│   └── fonts/              # hanya jika self-host font yang legal
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── global/
│   │   ├── navigation/
│   │   ├── content/
│   │   └── sections/
│   ├── content/
│   │   ├── activities/
│   │   ├── articles/
│   │   ├── announcements/
│   │   ├── faq/
│   │   └── programs/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── utilities.css
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── school.ts
│   └── utils/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── netlify.toml
├── README.md
└── AGENTS.md
```

---

## 4. Content Collections

### Program
```ts
{
  title: string,
  slug: string,
  type: 'kuttab' | 'tpq' | 'tqa',
  summary: string,
  order: number,
  published: boolean,
  registrationOpen?: boolean
}
```

### Activity
```ts
{
  title: string,
  date: Date,
  program: 'kuttab' | 'tpq' | 'tqa' | 'all',
  excerpt: string,
  cover?: ImageMetadata,
  gallery?: ImageMetadata[],
  published: boolean
}
```

### Article
```ts
{
  title: string,
  description: string,
  publishedAt: Date,
  updatedAt?: Date,
  category: string,
  cover?: ImageMetadata,
  draft: boolean
}
```

### FAQ
```ts
{
  question: string,
  answer: string,
  category: string,
  order: number,
  published: boolean
}
```

---

## 5. Site Config

Semua informasi yang sering berubah harus tersentralisasi.

```ts
export const site = {
  name: 'Kuttab Tarbiyah Sunnah',
  domain: 'https://kuttabts.sch.id',
  organization: 'Yayasan Tarbiyah Sunnah',
  address: {
    street: 'Jl. Selacau, RT. 001/RW.005',
    village: 'Selacau',
    district: 'Batujajar',
    regency: 'Kabupaten Bandung Barat',
    province: 'Jawa Barat',
  },
  whatsapp: '',
  instagram: '',
  mapsUrl: '',
};
```

Jangan hard-code WhatsApp, tahun ajaran, atau link SPMB di banyak komponen.

---

## 6. Styling Architecture

Wajib gunakan tokens dari `02-DESIGN-SYSTEM.md`.

`tokens.css` minimal:
- brand colors;
- neutral colors;
- typography;
- spacing;
- radius;
- container width;
- transition.

Hindari magic color hex berulang di komponen.

---

## 7. Astro Rules

- Static rendering sebagai default.
- Jangan `client:load` untuk komponen yang dapat statis.
- Gunakan JS hanya untuk menu, accordion, atau interaksi yang membutuhkan state.
- Hindari SPA navigation dependency kecuali ada alasan kuat.
- Optimalkan gambar via Astro.
- Gunakan native HTML (`details`, `dialog`, dsb.) bila cukup dan aksesibel.

---

## 8. Netlify

MVP:
- Git-based deploy;
- preview deploy untuk pull request;
- production branch `main`;
- redirects bila diperlukan;
- security headers;
- caching assets;
- form hanya bila dibutuhkan.

Jangan menambah serverless function tanpa kebutuhan nyata.

---

## 9. SEO

Implementasi:
- sitemap.xml;
- robots.txt;
- canonical;
- Open Graph;
- JSON-LD `EducationalOrganization`/`School` bila datanya valid;
- `Article` untuk artikel;
- breadcrumb markup;
- proper heading hierarchy.

Jangan memasukkan schema data yang belum diverifikasi.

---

## 10. Accessibility

- skip link;
- focus visible;
- keyboard navigation;
- contrast AA;
- landmark semantic;
- alt text;
- form label nyata;
- error message accessible;
- minimum target sentuh ±44px;
- reduced motion support.

---

## 11. Performance Budget

Target awal:
- minimal JS shipped;
- hero image optimized;
- font weight terbatas;
- third-party script seminimal mungkin;
- tidak ada autoplay video di homepage;
- lazy load untuk image di bawah fold;
- Lighthouse target >95 jika aset produksi memungkinkan.

---

## 12. Anti-Slop Integration

Gunakan repository:
https://github.com/miqdadbadjuber/anti-slop/releases

Sebelum coding agent mulai:
1. install/aktifkan Anti-Slop sesuai agent yang digunakan;
2. baca rule yang berlaku;
3. jadikan `DESIGN-SYSTEM.md`, `PRD.md`, dan `CONTENT-IA.md` sebagai project context;
4. lakukan delivery gate pada setiap halaman sebelum merge.

Anti-Slop tidak menggantikan design direction; ia mencegah output generik dan pola AI yang tidak relevan.
