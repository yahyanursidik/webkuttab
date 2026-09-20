# Content needed from the school

Nothing in this list has been guessed or filled in with plausible-sounding text.
Where a value is missing, the corresponding element is **absent from the page**,
not rendered as an empty label or a `TBD`.

Each item names the exact place it plugs into.

## 1. Blocking for launch

These keep a parent from acting on the site at all.

| Item | Where it goes | Effect today |
| --- | --- | --- |
| WhatsApp number | `site.whatsapp` in `src/data/site.ts` | Every "Tanya admin / pengurus lewat WhatsApp" button is hidden. The SPMB block and both madrasah pages currently have no direct contact action. |
| Google Maps URL | `site.mapsUrl` | "Buka lokasi di peta" link is hidden in the contact block and the footer. |
| Email address | `site.email` | Email line hidden in the contact block and the footer. |
| Service hours | `site.serviceHours` | "Jam layanan" heading and value are not rendered. |
| Instagram URL | `site.instagram` | Instagram link hidden. |

Set any of these to a real string and the control appears automatically. Leave
them `null` and it stays hidden. Do not set them to an empty string.

## 2. TPQ and TQA operational data

`/program/tpq` and `/program/tqa` are currently short on purpose. They state the
unit's name, its parent institution and its location, then route the reader to
a person. They stay that way until the unit supplies the following. Fill the
contract in `docs/03-CONTENT-IA.md` section 4:

- `age_range`
- `entry_requirement` (TQA prerequisite in particular)
- `levels`
- `schedule`
- `learning_method`
- `quran_target`
- `diniyah_scope`
- `capacity`
- `registration_status` and `registration_url`
- `fees_public` and `fees`

Note that the two units currently carry an identical one-line summary in
`src/data/school.ts`, because nothing verified distinguishes them yet. That is
also why the homepage groups them under one "Madrasah Tarbiyah Sunnah" block
rather than giving each its own card.

## 3. SPMB details

The SPMB block explains that terms are announced by the school and points to the
contact section. It cannot list specifics until these arrive:

- academic year being opened (the code assumes `2026/2027`, set in
  `ACADEMIC_YEAR` in `src/data/school.ts`)
- programmes open and quota per class
- requirements
- registration stages
- key dates
- fees, and whether they may be published
- registration URL, if there is one

## 4. Photography

The school's profile video now carries the hero, so the page is no longer
text-only. Still missing: **still photographs**.

- the "Kegiatan sekolah" section still shows its empty state
- Open Graph has no `og:image`, so shared links show no preview card

Needed: school grounds, a classroom, learning activity, materials, outdoor
activity, and pupil work. If a publication policy restricts children's faces,
wide shots, hands and activity crops, shots from behind, and facility photos
all work. Place them in `src/assets/` and reference them through Astro's
`<Image>` so they are optimised. The video poster at
`public/video/profil-sekolah-poster.jpg` is a frame from the video, not a
photograph, and is not a substitute.

## 5. Logos

Two lockups were supplied and both are used as given, not redrawn:

| File | Used for |
| --- | --- |
| `src/assets/logo-kuttab.png` | source lockup |
| `src/assets/logo-kuttab-mark.png` | header, favicons, homepage institution block |
| `src/assets/logo-madrasah.png` | source lockup |
| `src/assets/logo-madrasah-mark.png` | homepage institution block |

The `-mark` files are the emblem cropped out of each lockup. The full
lockups carry their own wordmarks, which are illegible at header size and
would duplicate the school name set as text beside them. **If official
mark-only or SVG files exist, replace the two `-mark` files** and regenerate
`public/favicon-32.png`, `favicon-180.png` and `favicon-512.png`.

### The two logos do not share a palette

Sampled from the supplied artwork:

| | Green | Orange |
| --- | --- | --- |
| Kuttab lockup | `#4F7239` | `#F08519` |
| Madrasah lockup | `#446832` | `#F48120` |

The site's design tokens use the **Madrasah** values, because
`02-DESIGN-SYSTEM.md` specifies those hex codes explicitly. The two marks are
reproduced as supplied rather than recoloured to match each other. **Confirm
which set is the brand master**, and whether the two should be reconciled.

## 6. Routes not built yet, and what unblocks each

Each of these is a page the brief's sitemap asks for. None was built as an empty
shell, because a page with nothing verified in it is worse than no page.

| Route | Blocked on | Where the topic lives now |
| --- | --- | --- |
| `/spmb` | Requirements, stages, dates, quota, fees, registration URL (section 3 above). | The `/#spmb` block on the homepage, which explains that terms are announced by the school. Nav points there. |
| `/faq` | Real, recurring parent questions. Anti-Slop R-28 is explicit that a generic FAQ damages trust more than having none. | Nothing. |
| `/galeri` | Photographs (section 4 above). | Nothing. |
| `/artikel`, `/pengumuman` | At least one published entry in the matching collection. | Nothing. Schemas are ready. |

### The four /pendidikan sub-routes

The sitemap lists `/pendidikan/kurikulum`, `/al-quran`, `/diniyah` and
`/pembelajaran-umum`. Everything verified about the last three amounts to a
subject list each, so four routes would have produced one real page and three
padded ones. They are sections with stable anchors on `/pendidikan` instead:

- `/pendidikan#kurikulum`
- `/pendidikan#al-quran`
- `/pendidikan#diniyah`
- `/pendidikan#pembelajaran-umum`

Splitting any of them into its own route later is a small change. **This is a
deviation from the brief's sitemap and is flagged for your decision.**

## 7. Content collections, currently empty

Add Markdown files to activate these. Schemas are in `src/content.config.ts`.

- `src/content/activities/` drives the homepage "Kegiatan sekolah" section.
  Publishing the first file with `published: true` replaces the empty state with
  the three most recent entries.
- `src/content/articles/`, `src/content/announcements/` and `src/content/faq/`
  are defined but have no page rendering them yet. They are wired up in Phase C.

An FAQ should only be added once real, recurring parent questions are known. A
generic FAQ is worse than none.

## 8. Video

`public/video/profil-sekolah.mp4` is the school's own profile video, shown in
the homepage hero.

- Supplied as 39.8 MB, 474x850 portrait, 60 fps, 3 minutes 20 seconds.
- Re-encoded to 13.2 MB (H.264, 30 fps, CRF 30, mono AAC 64k, faststart).
  The original is untouched in Downloads.
- It does **not** autoplay. `preload="none"` means the browser fetches only
  the 46 KB poster on page load and nothing else until a visitor presses play.
  This follows PRD section 12 and vibe-coding section 14, which both forbid
  autoplay video on the homepage.

Two things would improve it:

1. **A caption file.** The Indonesian subtitles are burned into the picture, so
   they cannot be read by a screen reader, translated, or searched. A WebVTT
   file added as `<track kind="captions">` would fix that.
2. **A shorter cut.** 3 minutes 20 seconds is a full tour. A 30 to 45 second
   edit would suit the hero better, with the full version on its own page.

The clip carries an `@kuttab_tarbiyahsunnah` watermark and burned-in captions
from its social media origin. Confirm that is acceptable on the official site.
