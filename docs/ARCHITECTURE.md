# Architecture

## System overview

```
src/data/resume-data.tsx
        │
        ▼
src/app/page.tsx  (Next.js RSC)
        │
        ▼
src/components/   (ShadCN + custom)
        │
        ▼
next build → out/  (static HTML/CSS/JS)
        │
        ▼
Cloudflare Pages CDN  (edge, global)
```

No server. No runtime. No database. `output: "export"` in `next.config.js` produces a fully
static site served directly from CDN.

## Data flow

1. `RESUME_DATA` in `src/data/resume-data.tsx` is a single `as const` object.
2. `src/app/page.tsx` imports it and renders all sections as React Server Components.
3. Build time: Next.js pre-renders everything to static HTML.
4. Runtime: zero server involvement.

## Directory map

```
printable-cv/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # root layout, Inter font, GA script
│   │   ├── page.tsx            # single-page CV, JSON-LD, section order
│   │   ├── globals.css         # Tailwind directives, print CSS, dark CSS vars
│   │   ├── robots.ts           # robots.txt generation
│   │   ├── sitemap.ts          # sitemap.xml generation
│   │   ├── opengraph-image.tsx # OG image (Next.js route)
│   │   ├── twitter-image.tsx   # Twitter card image (Next.js route)
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # ShadCN primitives — do not edit manually
│   │   ├── command-menu.tsx    # ⌘J command palette (client component)
│   │   ├── project-card.tsx    # project grid card
│   │   ├── achievement-card.tsx # achievement grid card
│   │   └── work-experience/
│   │       ├── company-card.tsx   # company header + timeline
│   │       └── timeline-item.tsx  # individual role within a company
│   └── data/
│       └── resume-data.tsx     # ALL CV content — single source of truth
├── docs/                       # project documentation
├── .github/workflows/
│   └── cloudflare-pages.yml   # CI/CD pipeline
├── next.config.js              # output: "export"
└── out/                        # build output (gitignored)
```

## Print architecture

The site has two rendering targets: web and print. There is no separate print stylesheet file —
all print rules are inline Tailwind `print:` utilities or the `@media print` block in
`globals.css`.

Key patterns:

| Pattern | Effect |
|---------|--------|
| `print:hidden` | Hides element when printing (interests, projects sections) |
| `print:flex`, `print:block` | Shows print-only elements (plain-text contact info) |
| `print:order-*` | Reorders sections for A4 layout (education/achievements before work) |
| `print:gap-y-6` | Tighter vertical spacing in print |
| `.print-force-new-page` | `page-break-before: always` on Work Experience section |
| `.timeline-container`, `.timeline-item` | `page-break-inside: avoid` in print media query |

## SEO setup

- `src/app/page.tsx` injects JSON-LD (`application/ld+json`) with `schema.org/Person` data.
- `layout.tsx` sets `<title>`, `<meta name="description">`, and canonical via Next.js `Metadata`.
- `robots.ts` generates `/robots.txt` allowing all crawlers.
- `sitemap.ts` generates `/sitemap.xml` with the canonical URL.
- `opengraph-image.tsx` and `twitter-image.tsx` generate OG/Twitter card images at build time.

## Command palette

`CommandMenu` (`src/components/command-menu.tsx`) is the only client component.

- Keyboard trigger: `⌘J` (or `Ctrl+J`)
- Mobile trigger: floating round button (bottom-right, hidden at `xl+`)
- Desktop hint: fixed bottom bar visible at `xl+`, hidden on mobile
- Both triggers hidden in print (`print:hidden`)
- Actions: Print (`window.print()`), links (personal website + social profiles)
- Built on `cmdk` 0.2 via ShadCN's `Command` primitive

## Build output

`bun run build` writes static files to `out/`. The wrangler action deploys this directory
to Cloudflare Pages.
