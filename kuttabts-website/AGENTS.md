# AGENTS.md

Routing for anyone, human or agent, working on this repository.

## Read before UI work

1. `DESIGN.md` for direction (identity, palette, dials, typography, motif).
2. `antislop.md` as the filter on top of it, plus its Delivery Gate.
3. The brief in `../kuttabts-website-brief/docs/` for scope and content rules:
   `01-PRD.md`, `02-DESIGN-SYSTEM.md`, `03-CONTENT-IA.md`, `04-TECHNICAL.md`,
   `05-VIBE-CODING.md`.
4. `CONTENT-NEEDED.md` before adding any school fact.

`DESIGN.md` gives direction, antislop removes slop. They are separate jobs and
neither substitutes for the other.

## Hard rules for this project

- **Never invent a school fact.** Kuttab facts come from "Kurikulum Operasional
  Satuan Pendidikan Kuttab Tarbiyah Sunnah Tahun Ajaran 2026/2027". Every block
  in `src/data/school.ts` names the BAB it came from; keep that up. TPQ and TQA have no verified operational data: leave the
  field absent rather than writing something plausible. No `TBD` on a page.
- Anything that changes without a code change lives in `src/data/site.ts`,
  `src/data/school.ts` or `src/data/navigation.ts`. Never hard-code a WhatsApp
  number, an academic year or an address in a component.
- Unknown contact details are `null`, never an empty string. Components must
  skip a `null` field entirely.
- Never add a nav item before its destination exists.
- Never introduce a colour hex in a component. Use the tokens in
  `src/styles/tokens.css`.
- Check contrast before using a brand colour on text. Orange `#F48120` is
  2.53:1 on the page background and can never be text.
- No client framework. Static-first. JavaScript only for genuine state.

## Commands

```
npm run dev      # dev server on 4321
npm run build    # production build into dist/
npm run check    # astro check, TypeScript strict
```

## Current state

Phases A, B and C are done. Routes that exist:

`/`, `/tentang`, `/program`, `/program/kuttab`, `/program/tpq`,
`/program/tqa`, `/pendidikan`, `/kegiatan`, `/kontak`, `/tentang/visi-misi`,
`/404`.

Deliberately **not** built, because the content to fill them does not exist:
`/spmb`, `/faq`, `/galeri`, `/artikel`, `/pengumuman`. Reasons and
unblocking conditions are in `CONTENT-NEEDED.md`.

The brief's four `/pendidikan/*` sub-routes are sections with stable anchors on
`/pendidikan` (`#kurikulum`, `#al-quran`, `#diniyah`,
`#pembelajaran-umum`) rather than four separate pages. Everything verified
about the last three is a subject list each, so separate routes would have been
padding. Promote them when there is enough to fill a page.

SPMB is still a homepage anchor (`/#spmb`) for the same reason.
