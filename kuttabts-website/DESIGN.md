# DESIGN.md

Design direction for `kuttabts.sch.id`. Derived from `docs/02-DESIGN-SYSTEM.md`
in the website brief. This file is the **direction**; `antislop.md` is the
**filter** applied on top of it.

## Identity

Kuttab Tarbiyah Sunnah and TPQ and TQA Madrasah Tarbiyah Sunnah, a school in
Selacau, Batujajar, Kabupaten Bandung Barat. The audience is parents deciding
where to send a child.

## Character

> Warm, grounded, educational, calm, trustworthy.

It should read like a first visit to the school. Not a SaaS landing page, not an
"Islamic luxury" template, not a corporate site, not a children's entertainment
site.

## Dials

`Dial: ENERGY 1 / RHYTHM 2 / MOTION 1`

- **ENERGY 1.** Parents are making a serious decision. The page speaks plainly.
- **RHYTHM 2.** Section composition changes deliberately (full-width editorial
  rows, an unequal two-column data section, a quiet single-column passage, a
  solid-fill closing block) while the underlying grid stays consistent.
- **MOTION 1.** Hover and focus transitions only. No scroll reveal, no parallax,
  no carousel, no decorative animation.

## Palette

Sampled directly from the supplied logo; these are exact pixel values, not
approximations.

| Role | Hex | Notes |
| --- | --- | --- |
| Core, action | Green `#446832` | Buttons, identity, links (via `#355326`) |
| Accent | Orange `#F48120` | Section rule motif, one filled control |
| Accent hover | Burnt orange `#CA6323` | Large text and rules only |
| Limited | Warm yellow `#E8C339` | Reserved, currently unused |

Two core colours plus one accent. Neutrals (`#FCFBF7`, `#FFFFFF`, `#F4F1E9`,
`#20251D`, `#646B5F`, `#DDDCCE`) carry roughly 70% of every page.

### Measured contrast constraints

These are not preferences, they are measured limits:

- Orange `#F48120` on the page cream is **2.53:1**. It can never be text and
  cannot be a lone UI boundary. It is only ever a fill under near-black text
  (5.96:1) or a decorative rule.
- Burnt orange `#CA6323` on cream is **3.81:1**: large text (18px+) and UI rules
  only, never body copy.
- Focus ring is `#20251D` (15.09:1 on cream). Green and burnt orange fills
  override it to `#FCFBF7` (6.20:1 and 3.81:1), because the dark ring reaches
  only 2.43:1 on green.

## Typography

One family: **Plus Jakarta Sans Variable**, self-hosted, latin subset, one file.
Chosen because it is humanist and slightly warm, which suits the character
above, and because its wide Latin coverage keeps Indonesian text comfortable at
body sizes. Not Inter, which is the default pick rather than a considered one.

Scale uses `clamp()`. Prose is capped at `65ch`.

## Identity motif

A hairline rule across the top of each section heading, with a short orange
segment overlapping its start. Repeated, specific, and it is the single job
orange does on light backgrounds. It marks where an editorial section begins
without wrapping content in cards.

## Layout

Editorial rhythm. Not `heading / subheading / three cards` repeated down the
page. Cards are used only where content is a genuine set of sibling items.
Whitespace is structural.

## Photography

Real school photography when the school supplies it. No stock photography, no
generated illustration, no grey skeleton blocks standing in for a product shot.
Until photos arrive, type and whitespace carry the page.

## Theme

Light only, and this is a brand decision rather than deferred work: the identity
is warm paper (`#FCFBF7`), the design system defines no dark neutrals, and a
school prospectus has no dark-mode use case comparable to a developer tool. If a
dark theme is ever wanted, it needs its own set of tokens, not an inversion.
