/**
 * Navigation.
 *
 * Every entry must resolve to something that exists in the build. SPMB is the
 * one remaining homepage anchor: the school has not supplied requirements,
 * stages, dates, quota or fees, so a dedicated /spmb page would only repeat the
 * homepage block. Point it at /spmb once that content arrives.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const primaryNav: readonly NavItem[] = [
  { label: 'Tentang', href: '/tentang' },
  { label: 'Program', href: '/program' },
  { label: 'Pendidikan', href: '/pendidikan' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'SPMB', href: '/#spmb' },
  { label: 'Kontak', href: '/kontak' },
];

export const primaryCta: NavItem = {
  label: 'Informasi SPMB',
  href: '/#spmb',
};

/**
 * Footer links, grouped by what a reader is actually looking for rather than
 * the Product / Company / Resources / Legal template.
 */
export interface FooterGroup {
  readonly heading: string;
  readonly items: readonly NavItem[];
}

export const footerGroups: readonly FooterGroup[] = [
  {
    heading: 'Program',
    items: [
      { label: 'Kuttab Tarbiyah Sunnah', href: '/program/kuttab' },
      { label: 'TPQ Madrasah Tarbiyah Sunnah', href: '/program/tpq' },
      { label: 'TQA Madrasah Tarbiyah Sunnah', href: '/program/tqa' },
    ],
  },
  {
    heading: 'Sekolah',
    items: [
      { label: 'Tentang sekolah', href: '/tentang' },
      { label: 'Visi dan misi', href: '/tentang/visi-misi' },
      { label: 'Pendidikan di Kuttab', href: '/pendidikan' },
      { label: 'Kegiatan sekolah', href: '/kegiatan' },
      { label: 'Kontak dan lokasi', href: '/kontak' },
    ],
  },
];
