# AGENTS.md

Quick orientation for AI agents and new contributors.

## What this is

Static Next.js CV site for Wesley Coetzee. Deployed to Cloudflare Pages.
No backend, no database, no auth, no API routes. One page.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, `output: "export"`) |
| Styling | Tailwind CSS + ShadCN/Radix |
| Package manager | Bun |
| Hosting | Cloudflare Pages (via wrangler) |
| CI | GitHub Actions |

## Key constraint

**All CV content lives in `src/data/resume-data.tsx`.** Every other file is layout/rendering.
To update the CV, edit only that file.

## Dev commands

```bash
bun install          # install dependencies
bun run dev          # local dev server
bun run build        # static export → out/
bun run lint         # ESLint
```

## Adding ShadCN components

```bash
bunx --bun shadcn@latest add [component-name]
```

Do not hand-edit files under `src/components/ui/` — they are managed by the ShadCN CLI.

## Coding rules

- TypeScript strict — no `any`, no `@ts-ignore`
- No unit tests (purely presentational; build is the integration test)
- Print layout via Tailwind `print:` utilities — no separate print stylesheet
- Comments only where logic is non-obvious

## Deployment

Push to `main` → GitHub Actions builds → wrangler deploys to Cloudflare Pages.
PRs get preview deployments automatically.

Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
Required variable: `CLOUDFLARE_PROJECT_NAME`

## Design Context

Strategic design context lives in **`PRODUCT.md`** (project root). Read it before any UI work.

- **Register:** brand (personal-brand/portfolio surface — design IS the product).
- **Personality:** precise, credible, restrained. Pure neutral palette, mono-detail
  typography. No gradients, glassmorphism, eyebrow kickers, or CV-builder template look.
- **Must stay printable.** The A4 print/PDF output is a first-class surface, not an
  afterthought. Any layout change must be checked in print: verify section order, page
  breaks, hidden/shown elements, and grayscale readability. See `docs/DESIGN.md` →
  "Print decisions" for the canonical rules.
- **A11y target:** WCAG 2.1 AA (contrast, keyboard nav, reduced motion).

## Docs map

```
./ARCHITECTURE.md      system design, data flow, directory map
./PRODUCT.md           strategic design context (register, principles, anti-references)
docs/
  DESIGN.md            visual design, print decisions
  FRONTEND.md          component catalogue, how to add sections
  PLANS.md             potential future work
  PRODUCT_SENSE.md     what this is and why
  QUALITY_SCORE.md     definition of done
  RELIABILITY.md       CI/CD pipeline, failure modes
  SECURITY.md          attack surface (minimal)
  design-docs/         core beliefs and design decisions
  exec-plans/          tech debt tracker
  product-specs/       product specs index
```
