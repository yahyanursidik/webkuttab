/**
 * Verified school facts.
 *
 * Every Kuttab entry below traces to "Kurikulum Operasional Satuan Pendidikan
 * Kuttab Tarbiyah Sunnah Tahun Ajaran 2026/2027". The BAB and section that
 * supports each block is named in a comment above it. Nothing here may be
 * added without a line in that document to point at.
 *
 * TPQ and TQA are not covered by that document at all. Their entries hold only
 * the unit name, and nothing about them may be inferred from the Kuttab data.
 */

export const ACADEMIC_YEAR = '2026/2027';

export type ProgramType = 'kuttab' | 'tpq' | 'tqa';

/* ------------------------------------------------------------------ *
 * BAB II: Visi dan Misi. Quoted as published.
 * ------------------------------------------------------------------ */

export const visi =
  'Menjadi sekolah Islam unggulan dalam ikhtiar mencetak generasi qur’ani yang memiliki aqidah shahihah, berakhlakul karimah, cerdas, mandiri dan berwawasan Islam.';

export const misi: readonly string[] = [
  'Menyelenggarakan pembelajaran Al-Qur’an secara intensif.',
  'Menanamkan pondasi ilmu-ilmu Islam yang bersumber dari Al-Qur’an dan As-Sunnah sesuai pemahaman As-Salaf Ash-Shalih.',
  'Membentuk karakter berakhlakul karimah dan beradab mulia.',
  'Menerapkan sistem pembelajaran yang inovatif, kritis dan berbasis IPTEK.',
  'Melatih kemandirian, tanggung jawab, dan keterampilan hidup (life skills).',
  'Membangun wawasan Islam yang luas.',
  'Mengembangkan tata kelola sekolah yang profesional, unggul, dan akuntabel.',
];

/* ------------------------------------------------------------------ *
 * BAB III A: Muatan Pelajaran, tahun ajaran 2026/2027.
 *
 * The published table has one column per class group (1A, 1B, 2A, 2B, 3, 4,
 * 5&6). Two figures from it are unambiguous and are the only ones shown
 * publicly:
 *
 *   - Tahfizh Al-Qur'an is 14 JP in all seven columns.
 *   - The per-class totals are 30 JP for kelas 1 and 38 JP for kelas 2 to 6.
 *
 * The table's "Total JP/MAPEL" column sums a subject across all seven class
 * groups, so Aqidah's 15 is not 15 JP for one child in one week. Publishing
 * those totals would invite exactly that misreading, so they are left out.
 * Per-class figures for subjects that do not run in every class group are also
 * left out, because the column alignment cannot be recovered reliably from the
 * source table.
 *
 * Bahasa Inggris appears in the table with 0 JP allocated, so it is not listed
 * among the subjects the school teaches.
 * ------------------------------------------------------------------ */

export interface SubjectGroup {
  readonly label: string;
  readonly subjects: readonly string[];
}

export const kuttabSubjectGroups: readonly SubjectGroup[] = [
  {
    label: 'Al-Qur’an',
    subjects: ['Tahfizh Al-Qur’an'],
  },
  {
    label: 'Ilmu diniyah',
    subjects: ['Aqidah', 'Fiqh', 'Adab', 'Hadits', 'Sirah'],
  },
  {
    label: 'Bahasa',
    subjects: ['Bahasa Arab', 'Bahasa Indonesia'],
  },
  {
    label: 'Pengetahuan umum',
    subjects: ['Matematika', 'IPAS'],
  },
  {
    label: 'Jasmani dan karya',
    subjects: ['PJOK', 'Prakarya'],
  },
];

export const tahfizhAllocation = {
  jp: 14,
  unit: 'JP',
  scope: 'setiap kelompok kelas yang tercantum dalam struktur kurikulum',
  academicYear: ACADEMIC_YEAR,
} as const;

/** Weekly totals, read off the "Total JP/Kelas" row. */
export const weeklyLoad: readonly { readonly classes: string; readonly jp: number }[] = [
  { classes: 'Kelas 1', jp: 30 },
  { classes: 'Kelas 2 sampai 6', jp: 38 },
];

/**
 * BAB III: the curriculum combines Kurikulum 2013 and Kurikulum Merdeka, with
 * Merdeka implemented in kelas 1 and kelas 4, and Kurikulum 2013 in the rest.
 */
export const curriculumBasis = {
  frameworks: ['Kurikulum 2013', 'Kurikulum Merdeka'],
  merdekaClasses: 'kelas 1 dan kelas 4',
  academicYear: ACADEMIC_YEAR,
} as const;

/* ------------------------------------------------------------------ *
 * BAB III B: Waktu/Jam Pembelajaran, tahun ajaran 2026/2027.
 * Reproduced row for row, including both breaks, rather than merged into
 * tidier blocks.
 * ------------------------------------------------------------------ */

export interface ScheduleRow {
  readonly jam: string | null;
  readonly time: string;
  readonly activity: string;
}

export const dailySchedule: readonly ScheduleRow[] = [
  { jam: '1', time: '07.00–07.10', activity: 'Pertemuan wali kelas' },
  { jam: '2', time: '07.10–07.45', activity: 'Tahfizh Al-Qur’an' },
  { jam: '3', time: '07.55–08.20', activity: 'Tahfizh Al-Qur’an' },
  { jam: '4', time: '08.20–08.55', activity: 'Kegiatan belajar mengajar' },
  { jam: '5', time: '08.55–09.30', activity: 'Kegiatan belajar mengajar' },
  { jam: null, time: '09.30–10.00', activity: 'Istirahat' },
  { jam: '6', time: '10.00–10.35', activity: 'Kegiatan belajar mengajar' },
  { jam: '7', time: '10.35–11.10', activity: 'Kegiatan belajar mengajar' },
  { jam: '8', time: '11.10–11.45', activity: 'Kegiatan belajar mengajar' },
  { jam: null, time: '11.45–12.25', activity: 'Shalat Dzuhur' },
  { jam: '9', time: '12.25–13.00', activity: 'Tahfizh Al-Qur’an' },
];

/* ------------------------------------------------------------------ *
 * BAB III E: Implementasi Kurikulum di Kelas. The five published points.
 * ------------------------------------------------------------------ */

export const teachingPrinciples: readonly string[] = [
  'Berpusat pada siswa',
  'Pembelajaran kreatif',
  'Kontekstual',
  'Inkuiri',
  'Refleksi',
];

/* ------------------------------------------------------------------ *
 * BAB III F: Penilaian Berimbang.
 * ------------------------------------------------------------------ */

export const assessment = {
  principle:
    'Penilaian tidak ditujukan sekadar untuk mendapatkan nilai akhir, melainkan untuk mengetahui sejauh mana pencapaian seorang siswa agar potensinya dapat dikembangkan lebih lanjut.',
  formative: ['Lembar kerja atau tugas', 'Kuis', 'Jurnal'],
  summative: ['Unjuk kinerja atau proyek', 'Jurnal'],
} as const;

/* ------------------------------------------------------------------ *
 * BAB I B and BAB I D. Each value restates one published point and adds no
 * detail the document does not carry.
 * ------------------------------------------------------------------ */

export const educationValues = [
  {
    id: 'quran',
    title: 'Al-Qur’an',
    body:
      'Misi pertama sekolah adalah menyelenggarakan pembelajaran Al-Qur’an secara intensif. Tahfizh mengisi jam pertama dan jam terakhir pada setiap hari belajar.',
  },
  {
    id: 'aqidah',
    title: 'Aqidah dan ilmu diniyah',
    body:
      'Sekolah menanamkan pondasi ilmu-ilmu Islam yang bersumber dari Al-Qur’an dan As-Sunnah sesuai pemahaman As-Salaf Ash-Shalih, mengikuti manhaj Ahlus Sunnah wal Jama’ah.',
  },
  {
    id: 'adab',
    title: 'Adab dan akhlak',
    body:
      'Sekolah membentuk karakter berakhlakul karimah dan beradab mulia. Setiap awal tahun ajaran diadakan masa matrikulasi satu sampai dua pekan untuk penguatan adab, secara teori dan praktik.',
  },
  {
    id: 'ilmu-umum',
    title: 'Ilmu umum',
    body:
      'Kurikulum menekankan pendidikan agama Islam, namun tetap memperhatikan pengetahuan dasar dari ilmu umum.',
  },
  {
    id: 'kemandirian',
    title: 'Kemandirian',
    body:
      'Sekolah melatih kemandirian, tanggung jawab, dan keterampilan hidup, serta membangun wawasan Islam yang luas.',
  },
] as const;

/**
 * BAB I D. The four developmental areas, with the spiritual area as the
 * overarching one.
 */
export const developmentAreas = {
  areas: ['sosial', 'emosional', 'intelektual', 'fisik'],
  umbrella: 'spiritual',
} as const;

/* ------------------------------------------------------------------ *
 * Programmes.
 * ------------------------------------------------------------------ */

export interface ProgramSummary {
  readonly type: ProgramType;
  readonly title: string;
  readonly href: string;
  readonly summary: string;
  readonly dataComplete: boolean;
}

export const programs: readonly ProgramSummary[] = [
  {
    type: 'kuttab',
    title: 'Kuttab Tarbiyah Sunnah',
    href: '/program/kuttab',
    summary:
      'Sekolah Islam dengan izin berbentuk PKBM, menerapkan kurikulum mandiri yang menekankan pendidikan agama Islam tanpa meninggalkan pengetahuan dasar ilmu umum.',
    dataComplete: true,
  },
  {
    type: 'tpq',
    title: 'TPQ Madrasah Tarbiyah Sunnah',
    href: '/program/tpq',
    summary:
      'Unit pembelajaran Al-Qur’an dan ilmu diniyah di bawah Madrasah Tarbiyah Sunnah.',
    dataComplete: false,
  },
  {
    type: 'tqa',
    title: 'TQA Madrasah Tarbiyah Sunnah',
    href: '/program/tqa',
    summary:
      'Unit pembelajaran Al-Qur’an dan ilmu diniyah di bawah Madrasah Tarbiyah Sunnah.',
    dataComplete: false,
  },
];

/**
 * BAB I D, stated plainly because a parent needs it before applying: the
 * school does not currently admit pupils with special needs, as it has neither
 * teachers with that competence nor the facilities.
 */
export const admissionNote =
  'Sekolah belum menerima siswa berkebutuhan khusus, karena belum memiliki guru dengan kompetensi tersebut dan belum tersedia fasilitas pendukungnya.';
