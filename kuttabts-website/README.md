# kuttabts.sch.id

Public website for **Kuttab Tarbiyah Sunnah** and **TPQ and TQA Madrasah
Tarbiyah Sunnah**, Selacau, Batujajar, Kabupaten Bandung Barat.

Astro 7.3.3, TypeScript strict, static output, deployed to Netlify.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run check` | `astro check`, TypeScript strict |

## Project layout

```
src/
├── assets/          logo and (eventually) school photography
├── components/
│   ├── content/     page-level building blocks
│   ├── global/      head, footer
│   ├── navigation/  header and nav
│   └── sections/    homepage sections
├── content/         Markdown collections (activities, articles, faq, …)
├── data/            site.ts, school.ts, navigation.ts
├── layouts/         BaseLayout.astro
├── pages/           routes
└── styles/          tokens.css, global.css
```

## Routes

`/` · `/tentang` · `/tentang/visi-misi` · `/program` · `/program/kuttab` ·
`/program/tpq` · `/program/tqa` · `/pendidikan` · `/kegiatan` · `/kontak` ·
`/404`

Several routes in the brief's sitemap are intentionally absent until the content
exists. See `CONTENT-NEEDED.md` section 6.

## Where content lives

- **Contact details, address, academic year**: `src/data/site.ts` and
  `src/data/school.ts`. Nothing is hard-coded in components.
- **Activities, articles, announcements, FAQ**: Markdown in `src/content/`,
  schemas in `src/content.config.ts`.
- **What is still missing**: `CONTENT-NEEDED.md`.

## Design and quality

- `DESIGN.md` holds the visual direction.
- `AGENTS.md` holds the working rules.
- Anti-Slop is a requirement on this project, not a style preference. Run its
  Delivery Gate before any page is called done.

## Deploying

Netlify builds from `netlify.toml` **at the repository root**, one level above
this folder. That file sets `base = "kuttabts-website"`, which is what makes
Netlify find this project's `package.json`, install from the lock file, run
`npm run build`, and publish `kuttabts-website/dist`.

Do not move that file into this folder. Netlify only looks for build
configuration at the repository root, and without it there it skips the build
and publishes the bare repo root, which has no `index.html`, so every URL
returns Netlify's own "Page not found".

Set the production branch to `main` and enable deploy previews for pull
requests. Security headers and asset caching are in the same file.
