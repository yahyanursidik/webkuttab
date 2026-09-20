/**
 * Single source of truth for information that changes without a code change.
 *
 * Fields typed `| null` are genuinely not known yet. They are null, not an
 * empty string and not a plausible-looking guess: components must skip a null
 * field entirely rather than render an empty label. See CONTENT-NEEDED.md.
 */

export interface PostalAddress {
  readonly street: string;
  readonly village: string;
  readonly district: string;
  readonly regency: string;
  readonly province: string;
}

export const site = {
  name: 'Kuttab Tarbiyah Sunnah',
  shortName: 'Kuttab TS',
  madrasahName: 'TPQ dan TQA Madrasah Tarbiyah Sunnah',
  organization: 'Yayasan Tarbiyah Sunnah',
  domain: 'https://kuttabts.sch.id',
  locale: 'id-ID',
  lang: 'id',

  address: {
    street: 'Jl. Selacau, RT. 001/RW. 005',
    village: 'Selacau',
    district: 'Batujajar',
    regency: 'Kabupaten Bandung Barat',
    province: 'Jawa Barat',
  } satisfies PostalAddress,

  /** Not yet provided by the school. */
  whatsapp: null as string | null,
  /** Not yet provided by the school. */
  email: null as string | null,
  /** Not yet provided by the school. */
  instagram: null as string | null,
  /** Not yet provided by the school. */
  mapsUrl: null as string | null,
  /** Not yet provided by the school. */
  serviceHours: null as string | null,
} as const;

/** Address as one line, for footers and metadata. */
export function addressLine(address: PostalAddress = site.address): string {
  return [
    address.street,
    address.village,
    address.district,
    address.regency,
    address.province,
  ].join(', ');
}

/**
 * Builds a wa.me link, or returns null when the school has not supplied a
 * number. Callers must handle null by not rendering the control at all.
 */
export function whatsappUrl(message?: string): string | null {
  if (site.whatsapp === null) return null;
  const digits = site.whatsapp.replace(/\D/g, '');
  if (digits.length === 0) return null;
  const base = `https://wa.me/${digits}`;
  return message === undefined ? base : `${base}?text=${encodeURIComponent(message)}`;
}
