# Design System — kuttabts.sch.id

## 1. Arah Visual

Karakter desain:

> **Warm · Grounded · Educational · Calm · Trustworthy**

Website harus terasa sebagai sekolah Islam yang nyata dan dekat dengan keluarga, bukan:
- startup SaaS;
- website “Islamic luxury”;
- template sekolah generik;
- hasil AI dengan dekorasi berlebihan.

Gunakan fotografi nyata sekolah sebagai aset utama ketika tersedia.

---

## 2. Palet Warna dari Logo Madrasah Tarbiyah Sunnah

Warna diambil dari logo yang diberikan. Nilai berikut adalah representasi digital yang paling dekat dari warna dominan logo dan dapat disesuaikan kecil bila file brand master memiliki kode resmi.

### Brand Green — utama
`#446832`

RGB: `68, 104, 50`

Penggunaan:
- heading penting;
- link aktif;
- tombol utama;
- footer accent;
- garis/elemen identitas.

Makna visual: grounded, pendidikan, ketenangan, pertumbuhan.

### Brand Orange — utama
`#F48120`

RGB: `244, 129, 32`

Penggunaan:
- CTA sekunder;
- highlight penting;
- active state;
- aksen section;
- elemen kecil yang perlu perhatian.

### Burnt Orange — pendamping
`#CA6323`

RGB: `202, 99, 35`

Penggunaan:
- hover orange;
- ilustrasi/data accent;
- dark accent pada area hangat.

### Warm Yellow — aksen terbatas
`#E8C339`

RGB: `232, 195, 57`

Penggunaan:
- highlight kecil;
- label informasi penting bila benar-benar dibutuhkan;
- dekorasi fungsional minimal.

Jangan memakai warna kuning sebagai background teks panjang karena kontras dan fatigue.

---

## 3. Warna Netral

Brand color tidak boleh memenuhi seluruh halaman. Gunakan neutral yang hangat.

```css
--color-bg:          #FCFBF7;
--color-surface:     #FFFFFF;
--color-surface-alt: #F4F1E9;
--color-text:        #20251D;
--color-text-muted:  #646B5F;
--color-border:      #DDDCCE;
```

### Rasio penggunaan
- ±70% neutral/warm white
- ±20% green
- ±8% orange
- ±2% yellow/burnt orange

Ini panduan, bukan aturan matematis kaku.

---

## 4. Semantic Color Tokens

```css
:root {
  --brand-green-700: #355326;
  --brand-green-600: #446832;
  --brand-green-100: #EAF0E5;

  --brand-orange-700: #CA6323;
  --brand-orange-500: #F48120;
  --brand-orange-100: #FFF0E2;

  --brand-yellow-500: #E8C339;
  --brand-yellow-100: #FBF4D7;

  --bg-page: #FCFBF7;
  --bg-surface: #FFFFFF;
  --bg-muted: #F4F1E9;

  --text-primary: #20251D;
  --text-secondary: #646B5F;
  --border-subtle: #DDDCCE;

  --action-primary: #446832;
  --action-primary-hover: #355326;
  --action-secondary: #F48120;
  --action-secondary-hover: #CA6323;
}
```

---

## 5. Penggunaan Warna

### Tombol utama
- background: green;
- text: white;
- hover: darker green.

### Tombol sekunder
Gunakan outline green atau orange, tergantung konteks. Jangan membuat semua CTA orange.

### Link
Green sebagai default. Underline atau perubahan weight/decoration saat hover; jangan bergantung pada warna saja.

### Section background
Rotasi natural antara:
- warm white;
- white;
- subtle green tint;
- subtle warm neutral.

Hindari satu section hijau, satu section orange, satu section kuning secara bergantian seperti poster anak.

---

## 6. Tipografi

Prioritas: keterbacaan bahasa Indonesia, nuansa ramah, tidak terlalu playful.

Gunakan maksimal **2 font family**.

Rekomendasi implementasi:
- Sans utama: `Inter`, `Plus Jakarta Sans`, atau font lokal/brand yang sudah ditetapkan lembaga.
- Serif opsional hanya untuk editorial quote/statement, bukan kewajiban.

Bila tidak ada kebutuhan kuat, gunakan **satu sans family saja** untuk performa dan konsistensi.

### Skala yang disarankan
```text
Body small     14–15px
Body           16–18px
Lead           18–20px
H3             22–26px
H2             30–40px
H1 desktop     48–64px
H1 mobile      36–44px
```

Gunakan `clamp()` untuk responsive typography.

### Reading measure
Paragraf panjang: `max-width: 65ch`.

---

## 7. Grid & Spacing

- max content width: 1180–1240px;
- article width: 720–780px;
- gutter mobile: 20–24px;
- gutter desktop: 32–40px;
- section spacing desktop: 88–128px;
- section spacing mobile: 56–80px.

Gunakan whitespace secara sengaja. Jangan mengisi semua area kosong dengan ornament.

---

## 8. Radius & Shadow

Radius tidak menjadi ciri utama.

```text
Small control: 8px
Card/media:    12–16px
Pill:          hanya untuk chip/filter yang memang memerlukan bentuk pill
```

Shadow:
- sangat tipis;
- gunakan border lebih dulu;
- jangan menggunakan floating-card shadow di seluruh website.

---

## 9. Photography

Prioritas:
1. foto lingkungan sekolah;
2. ruang kelas;
3. aktivitas belajar;
4. alat/material belajar;
5. aktivitas outdoor;
6. karya atau proses kegiatan.

Jika kebijakan publikasi anak membatasi wajah/identitas:
- gunakan wide shot;
- crop tangan/aktivitas;
- sudut belakang;
- foto fasilitas;
- detail proses belajar.

Jangan menggunakan stock photo “Muslim family/school” bila foto asli tersedia.

---

## 10. Icons

Icon hanya untuk fungsi atau scanning cepat.

Boleh:
- lokasi;
- telepon/WhatsApp;
- kalender;
- external link;
- menu/navigation.

Hindari icon dekoratif untuk setiap kata seperti:
- Aqidah = shield;
- Adab = heart;
- Ilmu = bulb;
- Mandiri = rocket.

Teks dan layout harus dapat berdiri tanpa icon.

---

## 11. Components

Komponen inti:
- Header
- Navigation
- Hero
- ProgramLinks / ProgramCards (maksimal 3 pada homepage)
- EditorialSection
- ImageTextSection
- CurriculumList
- ScheduleTimeline
- ActivityTeaser
- ArticleCard
- GalleryGrid
- Accordion FAQ
- SPMB CTA
- ContactBlock
- Footer

Jangan membuat generic `Card` untuk semua konten.

---

## 12. Motion

Default: sangat minimal.

Boleh:
- transition hover 150–250ms;
- accordion;
- mobile nav;
- subtle reveal jika tidak mengganggu;
- respect `prefers-reduced-motion`.

Hindari:
- parallax;
- scroll-jacking;
- text-by-text animation;
- cursor effect;
- autoplay carousel;
- floating decorative animation.

---

## 13. Anti-Slop Visual Checklist

Sebelum komponen diterima, periksa:
- Apakah elemen ini punya fungsi?
- Apakah ada badge/pill yang sebenarnya tidak perlu?
- Apakah section dibuat card hanya karena template?
- Apakah ada copy hiasan yang bisa dihapus?
- Apakah warna logo dipakai sebagai identitas, bukan sebagai dekorasi berlebihan?
- Apakah foto sekolah nyata dapat menggantikan ilustrasi generik?
- Apakah halaman masih terasa baik jika semua animasi dimatikan?
- Apakah desain terlihat seperti sekolah ini, bukan sekolah mana pun?
