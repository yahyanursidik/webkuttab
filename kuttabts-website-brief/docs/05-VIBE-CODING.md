# Vibe Coding Instructions — kuttabts.sch.id

Dokumen ini ditujukan untuk AI coding agent / developer yang membangun website.

---

## 1. Mission

Build the public school website for:

- **Kuttab Tarbiyah Sunnah**
- **TPQ–TQA Madrasah Tarbiyah Sunnah**

Location: Selacau, Batujajar, Kabupaten Bandung Barat.

This is a **school website only**.

Do not expand the scope into CRM, SIA, LMS, donor management, jamaah management, dashboards, parent accounts, payments, or internal operational systems.

---

## 2. Mandatory Stack

- Astro **7.3.3**
- TypeScript strict
- Netlify
- Astro Content Collections
- Markdown/MDX content
- CSS variables/design tokens
- Static-first architecture

Do not introduce a frontend framework unless a requirement cannot reasonably be met with Astro/native web APIs.

---

## 3. Mandatory References

Read before implementation:

1. `01-PRD.md`
2. `02-DESIGN-SYSTEM.md`
3. `03-CONTENT-IA.md`
4. `04-TECHNICAL.md`
5. Anti-Slop releases/documentation:
   `https://github.com/miqdadbadjuber/anti-slop/releases`

Anti-Slop is mandatory.

---

## 4. Ground Truth Rule

Do not invent school facts.

Kuttab facts must come from the approved school curriculum/source content.

For TPQ/TQA, if the repository does not contain verified data for:
- age;
- level;
- schedule;
- fee;
- method;
- target memorization;
- registration flow;

then **leave the field absent or mark it as content needed in development notes**. Never generate plausible-sounding information.

Do not expose placeholder text such as `TBD` on production pages.

---

## 5. Design Direction

The final website should feel:

> warm, grounded, calm, educational, trustworthy.

It must not feel like:
- SaaS;
- AI-generated landing page;
- Islamic luxury template;
- corporate dashboard;
- children's entertainment website.

Use real school photography when assets are available.

---

## 6. Color System

Derive visual identity from the supplied Madrasah Tarbiyah Sunnah logo.

Primary:
```text
Green        #446832
Orange       #F48120
Burnt Orange #CA6323
Warm Yellow  #E8C339
```

Neutral:
```text
Page BG       #FCFBF7
Surface       #FFFFFF
Muted Surface #F4F1E9
Text          #20251D
Muted Text    #646B5F
Border        #DDDCCE
```

Rules:
- neutral backgrounds dominate;
- green is the principal brand/action color;
- orange is an accent/secondary action color;
- yellow is limited;
- never use all brand colors equally in the same section;
- no gradients unless there is a documented design reason. Default: no gradient.

---

## 7. Anti-Slop Hard Rules

**ANTI-SLOP IS A REQUIREMENT, NOT A VISUAL STYLE.**

Do not:
- add eyebrow badges above every heading;
- add glowing/pulsing dots;
- create fake metrics;
- use floating decorative blobs;
- use glassmorphism;
- use excessive shadows;
- wrap every section in cards;
- make every icon sit in a rounded colored box;
- use generic English marketing slogans;
- fill empty space with decorative copy;
- make repeated “Why Choose Us?” feature grids;
- add animations merely to make the page feel premium;
- repeat CTA buttons in every section;
- generate testimonials;
- generate statistics not provided by the school.

Before adding any element ask:

> Does this help a parent understand the school, program, learning, activity, registration, or contact information?

If no, remove it.

---

## 8. Layout Rules

Do not repeat this pattern across the page:

```text
heading
subheading
3 cards
heading
subheading
3 cards
...
```

Prefer editorial rhythm:

```text
hero + strong photo
program links
short educational narrative
photo + text
curriculum/data section
schedule/timeline
activities
SPMB CTA
contact/location
```

Whitespace is intentional.

---

## 9. Homepage Build Order

Implement in this order:

1. Header
2. Hero
3. Program selector (Kuttab / TPQ / TQA)
4. Education values
5. Al-Qur'an section
6. Learning approach
7. School life / latest activities
8. SPMB CTA
9. Location/contact
10. Footer

Do not add more sections unless supported by the PRD/content.

---

## 10. Copy Rules

Copy must be:
- Indonesian first;
- clear;
- concrete;
- parent-oriented;
- concise;
- factual.

Avoid:
- “Empowering Future Leaders”;
- “Where Faith Meets Excellence”;
- “Building a Brighter Tomorrow”;
- “The Best Islamic Education”;
- “Unlock Your Child's Potential”;
- invented emotional filler.

Prefer factual copy such as:

> `Tahfizh Al-Qur'an memperoleh alokasi 14 JP pada struktur kurikulum Kuttab tahun ajaran 2026/2027.`

Always include the context/year when a fact may change.

---

## 11. Component Rules

Build components for repeated semantic patterns, not for abstraction's sake.

Good candidates:
- `SiteHeader.astro`
- `SiteFooter.astro`
- `ProgramLink.astro`
- `SectionHeading.astro` (simple, no forced eyebrow)
- `ImageText.astro`
- `ActivityCard.astro`
- `FAQ.astro`
- `SPMBCallout.astro`
- `ContactBlock.astro`

Avoid a generic “everything card” component that forces unrelated content into the same visual treatment.

---

## 12. Responsive Rules

Mobile-first.

At mobile:
- hero H1 not oversized;
- navigation collapses cleanly;
- buttons remain easy to tap;
- no horizontal scroll;
- images crop deliberately;
- no sticky bar unless it clearly improves access to SPMB/contact and does not cover content.

Test at minimum:
- 360px
- 390px
- 768px
- 1024px
- 1440px

---

## 13. Accessibility Rules

Mandatory:
- semantic HTML;
- `nav`, `main`, `section`, `footer` appropriately;
- skip link;
- visible keyboard focus;
- no div buttons;
- alt text for meaningful images;
- empty alt for decorative images;
- form labels;
- reduced motion;
- contrast check for all brand color combinations.

Never place orange or yellow text on white unless contrast passes for its size/weight.

---

## 14. Performance Rules

- no unnecessary hydration;
- no huge JS bundle;
- optimize images;
- preload only critical assets;
- limit font files/weights;
- lazy-load below-fold imagery;
- no autoplay background video;
- no heavy carousel library;
- no client framework for static sections.

---

## 15. SEO Rules

For each route:
- descriptive title;
- meta description;
- canonical;
- Open Graph;
- single H1;
- proper H2/H3 hierarchy;
- meaningful internal links.

Generate sitemap and robots.

Use structured data only with verified facts.

---

## 16. Content Modeling Rule

Never hard-code recurring editorial content inside page components.

Use content collections for:
- activities;
- articles;
- announcements;
- FAQs;
- program long-form content where useful.

Use site config for:
- address;
- phone/WhatsApp;
- social links;
- school name;
- current SPMB URL/status.

---

## 17. Development Workflow

### Phase A — foundation
- initialize Astro 7.3.3;
- configure TypeScript strict;
- create tokens;
- build base layout;
- implement header/footer;
- configure SEO primitives.

### Phase B — homepage
- implement with real content structure;
- use temporary neutral image blocks only while assets are unavailable;
- do not generate decorative illustrations as substitutes.

### Phase C — internal pages
- programs;
- education;
- activities;
- articles;
- SPMB;
- FAQ;
- contact.

### Phase D — content & assets
- insert verified copy;
- replace placeholders with real school photos;
- optimize all images.

### Phase E — quality gate
- responsive test;
- keyboard test;
- Lighthouse;
- broken link check;
- metadata check;
- Anti-Slop review;
- remove unused components/classes/scripts.

---

## 18. Anti-Slop Delivery Gate

Before marking a page complete, output a short internal checklist:

```text
[ ] No invented facts
[ ] No generic AI slogans
[ ] No decorative badge/pill without purpose
[ ] No fake statistics/testimonials
[ ] No unnecessary cards
[ ] No excessive gradients/shadows
[ ] Brand colors follow DESIGN-SYSTEM.md
[ ] Mobile layout checked
[ ] Keyboard/focus checked
[ ] Images optimized
[ ] SEO metadata present
[ ] Page has one clear primary purpose
```

A page that fails this gate is not done.

---

## 19. Definition of Done

A feature/page is complete only when:
- it matches PRD scope;
- content is supported by approved source;
- no unsupported TPQ/TQA details are invented;
- design follows logo palette and design system;
- Anti-Slop gate passes;
- responsive and accessible;
- no console errors;
- no broken links;
- production build succeeds;
- Netlify preview is visually checked before merge.
