import { defineCollection } from 'astro:content';
// astro:content re-exports z but marks it deprecated for removal in Astro 8.
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const programEnum = z.enum(['kuttab', 'tpq', 'tqa', 'all']);

const activities = defineCollection({
  loader: glob({ base: './src/content/activities', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      program: programEnum,
      excerpt: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(image()).optional(),
      published: z.boolean().default(false),
    }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      category: z.enum([
        'Kegiatan Kuttab',
        'Kegiatan TPQ',
        'Kegiatan TQA',
        'Pengumuman',
        'Pendidikan',
      ]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(true),
    }),
});

const announcements = defineCollection({
  loader: glob({ base: './src/content/announcements', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    expiresAt: z.coerce.date().optional(),
    program: programEnum,
    published: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ base: './src/content/faq', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    question: z.string(),
    category: z.enum([
      'Program',
      'Kurikulum',
      'Al-Qur’an',
      'Jadwal',
      'SPMB',
      'Biaya',
      'Lokasi',
    ]),
    order: z.number().int().default(0),
    published: z.boolean().default(false),
  }),
});

export const collections = { activities, articles, announcements, faq };
