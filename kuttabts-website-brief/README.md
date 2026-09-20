# kuttabts.sch.id — Website Brief

Dokumentasi perencanaan website resmi **Kuttab Tarbiyah Sunnah** dan **TPQ–TQA Madrasah Tarbiyah Sunnah**, Selacau, Batujajar, Kabupaten Bandung Barat.

## Tujuan
Website publik sekolah yang berfungsi untuk:
- memperkenalkan sekolah dan madrasah;
- menjelaskan nilai, program, kurikulum, dan pengalaman belajar;
- menampilkan kegiatan dan dokumentasi;
- menyediakan informasi penerimaan murid/santri;
- memudahkan orang tua menghubungi sekolah.

Website ini **bukan** CRM, SIA, LMS, portal jamaah, sistem donatur, atau sistem internal yayasan.

## Stack
- Astro **7.3.3**
- TypeScript strict
- Netlify
- Astro Content Collections
- Markdown/MDX untuk konten
- Minimal JavaScript; gunakan Astro Islands hanya bila interaksi benar-benar diperlukan
- Anti-Slop sebagai guardrail desain/copy: https://github.com/miqdadbadjuber/anti-slop/releases

## Dokumen
1. `docs/01-PRD.md` — Product Requirements Document
2. `docs/02-DESIGN-SYSTEM.md` — warna, tipografi, layout, komponen, visual direction
3. `docs/03-CONTENT-IA.md` — sitemap, struktur konten, copy direction
4. `docs/04-TECHNICAL.md` — arsitektur Astro/Netlify dan struktur repository
5. `docs/05-VIBE-CODING.md` — instruksi eksekusi untuk coding agent / vibe coding

## Source of truth konten
Untuk Kuttab, gunakan **Kurikulum Operasional Satuan Pendidikan Kuttab Tarbiyah Sunnah Tahun Ajaran 2026/2027** sebagai sumber utama.

Untuk TPQ–TQA, jangan mengarang data yang belum tersedia. Jadwal, usia, level, biaya, metode, target hafalan, dan alur pendaftaran harus diisi dari data resmi unit.
