# PRD — kuttabts.sch.id

## 1. Ringkasan Produk

**Nama:** Website Kuttab Tarbiyah Sunnah & TPQ–TQA Madrasah Tarbiyah Sunnah  
**Domain:** `kuttabts.sch.id`  
**Lokasi:** Selacau, Batujajar, Kabupaten Bandung Barat, Jawa Barat  
**Jenis:** Website publik sekolah  
**Stack:** Astro 7.3.3 + Netlify

Website harus membantu orang tua memahami sekolah dengan cepat, tenang, dan jelas. Fokus utama bukan efek visual, melainkan identitas pendidikan, informasi program, kurikulum, kegiatan, dan pendaftaran.

---

## 2. Product Vision

> Menjadi website resmi sekolah yang membantu orang tua mengenal pendidikan Kuttab Tarbiyah Sunnah dan TPQ–TQA Madrasah Tarbiyah Sunnah melalui informasi yang jelas, dapat dipercaya, mudah diakses, dan sesuai nilai lembaga.

Website harus terasa seperti **kunjungan awal ke sekolah**, bukan landing page startup atau situs korporat.

---

## 3. Scope

### In scope
- profil sekolah;
- visi dan misi;
- program Kuttab;
- program TPQ;
- program TQA;
- nilai dan pendekatan pendidikan;
- kurikulum Kuttab;
- pembelajaran Al-Qur'an;
- diniyah;
- pembelajaran umum;
- kegiatan sekolah;
- galeri;
- artikel/pengumuman;
- FAQ;
- SPMB/pendaftaran;
- kontak, WhatsApp, dan lokasi.

### Out of scope
- CRM;
- pengelolaan jamaah/donatur;
- SIA;
- LMS;
- akun orang tua;
- database murid;
- pembayaran online;
- dashboard admin kompleks;
- sistem absensi;
- rapor;
- komunikasi internal sekolah.

---

## 4. Audience

### A. Calon orang tua Kuttab
Mencari sekolah Islam yang menekankan Al-Qur'an, aqidah, adab, ilmu, dan kemandirian tanpa meninggalkan pengetahuan umum.

### B. Calon orang tua TPQ–TQA
Mencari pembelajaran Al-Qur'an dan diniyah yang terstruktur di Selacau/Batujajar.

### C. Orang tua murid/santri aktif
Mencari pengumuman, kegiatan, agenda, dan informasi resmi sekolah.

### D. Masyarakat umum
Ingin mengetahui profil dan aktivitas pendidikan lembaga.

---

## 5. Nilai Pendidikan yang Harus Terasa di Website

Berdasarkan dokumen kurikulum Kuttab:
- pendidikan berlandaskan Al-Qur'an dan As-Sunnah;
- penguatan aqidah;
- pembentukan adab dan akhlak;
- pembelajaran Al-Qur'an secara intensif;
- ilmu diniyah dan ilmu umum;
- kemandirian dan life skills;
- perkembangan sosial, emosional, intelektual, dan fisik dengan spiritual sebagai payung;
- pembelajaran yang kreatif, kontekstual, inkuiri, reflektif, dan berpusat pada siswa;
- semangat `Teach With Heart` sebagai kultur guru.

### Pesan inti publik
Gunakan bahasa yang sederhana:

> **Al-Qur'an, Adab, Ilmu, dan Kemandirian dalam keseharian belajar anak.**

Ini adalah arah pesan, bukan klaim marketing yang berlebihan.

---

## 6. Informasi Kurikulum Kuttab yang Bisa Ditampilkan

Mata pelajaran yang tercantum pada kurikulum 2026/2027:
- Aqidah;
- Fiqh;
- Adab;
- Hadits;
- Sirah;
- Bahasa Indonesia;
- Matematika;
- IPAS;
- PJOK;
- Prakarya;
- Bahasa Arab;
- Tahfizh Al-Qur'an.

Tahfizh Al-Qur'an mendapatkan alokasi **14 JP pada setiap kelompok kelas yang tercantum dalam dokumen**. Ini dapat ditampilkan sebagai fakta program, dengan konteks tahun ajaran yang jelas.

Jangan menjadikan tabel administratif kurikulum sebagai homepage. Ubah menjadi narasi yang mudah dipahami orang tua.

---

## 7. Sitemap Utama

```text
/
├── /tentang
│   ├── /visi-misi
│   └── /nilai-pendidikan
├── /program
│   ├── /kuttab
│   ├── /tpq
│   └── /tqa
├── /pendidikan
│   ├── /kurikulum
│   ├── /al-quran
│   ├── /diniyah
│   └── /pembelajaran-umum
├── /kegiatan
├── /galeri
├── /artikel
├── /pengumuman
├── /spmb
├── /faq
└── /kontak
```

Navigasi desktop dapat disederhanakan menjadi:

`Tentang | Program | Pendidikan | Kegiatan | SPMB | Kontak`

CTA utama: **Informasi SPMB**  
CTA sekunder: **Tanya Admin**

---

## 8. Homepage

Urutan yang direkomendasikan:

### 8.1 Header
- logo;
- navigasi ringkas;
- CTA SPMB;
- mobile menu sederhana.

### 8.2 Hero
Contoh arah copy:

**Kuttab Tarbiyah Sunnah**  
**Pendidikan yang menumbuhkan Al-Qur'an, adab, ilmu, dan kemandirian.**

Subcopy maksimal 2–3 baris yang menjelaskan lokasi dan lingkup program.

CTA:
- `Kenali Program`
- `Informasi SPMB`

Hindari badge dekoratif di atas H1.

### 8.3 Pilih Program
Tiga pilihan yang benar-benar dibutuhkan:
- Kuttab Tarbiyah Sunnah
- TPQ
- TQA

### 8.4 Nilai Pendidikan
Tampilkan secara editorial, bukan semua dalam card:
- Al-Qur'an
- Aqidah & Diniyah
- Adab
- Ilmu Umum
- Kemandirian

### 8.5 Al-Qur'an dalam Keseharian
Jelaskan porsi pembelajaran Al-Qur'an dengan data nyata dari kurikulum Kuttab.

### 8.6 Pengalaman Belajar
Narasi singkat tentang pembelajaran aktif, kontekstual, inkuiri, refleksi, dan Teach With Heart.

### 8.7 Kehidupan Sekolah
Foto asli + kegiatan terbaru.

### 8.8 SPMB
Satu blok CTA jelas, tidak berulang-ulang di setiap section.

### 8.9 Lokasi & Kontak
Alamat, peta/link Maps, WhatsApp, jam layanan bila tersedia.

### 8.10 Footer
- nama sekolah;
- menu ringkas;
- kontak;
- lokasi;
- copyright.

---

## 9. Halaman Program

### Kuttab
Wajib menjawab:
- apa itu Kuttab Tarbiyah Sunnah;
- nilai utama;
- kelas/jenjang yang tersedia;
- struktur pendidikan;
- Al-Qur'an;
- diniyah;
- pembelajaran umum;
- adab dan kemandirian;
- jadwal umum;
- SPMB.

### TPQ
Hanya tampilkan data resmi:
- sasaran usia;
- level;
- jadwal;
- metode;
- target belajar;
- pendaftaran.

### TQA
Hanya tampilkan data resmi:
- prerequisite;
- sasaran usia;
- level;
- target belajar;
- jadwal;
- pendaftaran.

**Dilarang mengarang data TPQ/TQA yang belum diberikan unit.**

---

## 10. Kegiatan, Galeri, Artikel

Konten dibuat ringan dan mudah dikelola.

### Kegiatan
- judul;
- tanggal;
- program;
- ringkasan;
- foto;
- isi.

### Galeri
- album berdasarkan kegiatan;
- hindari layout masonry berat bila tidak perlu;
- gambar harus dioptimasi.

### Artikel
Fokus pada:
- informasi pendidikan;
- aktivitas sekolah;
- pengumuman;
- dokumentasi program.

Tidak perlu menjadikan website sebagai portal berita besar.

---

## 11. SPMB

Halaman SPMB harus singkat dan actionable:

1. Tahun ajaran
2. Program yang dibuka
3. Kuota/kelas bila tersedia
4. Persyaratan
5. Tahapan pendaftaran
6. Jadwal penting
7. Biaya bila dipublikasikan
8. FAQ SPMB
9. CTA daftar / WhatsApp

Jangan mengarang jadwal, biaya, kuota, atau link pendaftaran.

---

## 12. Non-Functional Requirements

- mobile-first;
- performa tinggi;
- aksesibilitas WCAG AA;
- semantic HTML;
- SEO teknis lengkap;
- gambar responsif dan terkompresi;
- minimal JavaScript;
- tidak ada third-party script yang tidak penting;
- halaman konten dapat di-maintain melalui Markdown/MDX;
- support reduced motion;
- focus state keyboard jelas;
- target Lighthouse > 95 untuk Performance/Accessibility/Best Practices/SEO bila konten produksi memungkinkan.

---

## 13. Anti-Slop Requirement

Anti-Slop adalah **requirement**, bukan style tambahan.

Referensi:
https://github.com/miqdadbadjuber/anti-slop/releases

Prinsip:
- jangan meniru pola landing page AI generik;
- jangan menambah decorative badge, pill, glow, blob, fake metrics, atau icon tanpa fungsi;
- hindari copy generik seperti “Empowering Future Leaders”;
- gunakan informasi nyata sekolah;
- whitespace adalah bagian desain, bukan ruang yang harus selalu diisi;
- gunakan foto asli sekolah bila tersedia;
- layout harus terasa editorial dan natural;
- card hanya ketika informasi memang merupakan kumpulan item sejajar;
- CTA tidak diulang berlebihan.

---

## 14. Acceptance Criteria

Website MVP selesai ketika:
- Kuttab, TPQ, dan TQA dapat dibedakan dengan jelas;
- orang tua dapat memahami nilai pendidikan dari homepage;
- semua halaman utama responsive;
- SPMB mudah ditemukan;
- WhatsApp/kontak mudah diakses;
- alamat/lokasi jelas;
- kurikulum Kuttab disajikan tanpa klaim di luar sumber;
- tidak ada data TPQ/TQA hasil asumsi;
- semua konten utama dapat diubah melalui data/content files;
- sitemap, canonical, Open Graph, robots.txt, dan metadata dasar tersedia;
- tidak ada broken link;
- Anti-Slop Delivery Gate dilakukan sebelum release.
