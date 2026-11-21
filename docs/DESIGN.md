# Design

## Component library

ShadCN/Radix UI — components are copied into `src/components/ui/` at install time and owned
by this repo. Update via CLI (`bunx --bun shadcn@latest add [component]`), never by hand.

## Typography

Three families, all loaded via `next/font/google` in `layout.tsx`:

- **Inter** (default sans): name, section headings, company names, role titles.
- **Source Serif 4** (`font-serif`, `--font-serif`): everything you read. Tagline, profile
  paragraphs and role bullets, in the `prose` color. Print sizes: tagline 12pt, profile 10pt,
  bullets 9.5pt.
- **Geist Mono** (`font-mono`, `--font-mono`): detail. Dates, location, contact text, company
  blurbs, the stack line, badges, achievement tiles.

## Palette

Pure neutral. No accent colors.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `hsl(0 0% 100%)` | page background |
| `--foreground` | `hsl(224 71.4% 4.1%)` | primary text |
| `--muted-foreground` | `hsl(220 10% 38%)` | secondary text (dates, blurbs, stack line) |
| `--prose` | `hsl(215 27.9% 16.9%)` | reading text (tagline, profile, bullets) |
| `--border` | `hsl(220 13% 91%)` | card borders, dividers |

CSS variable definitions are in `globals.css`. A `.dark` class block is defined but there is
no toggle implemented — the site always renders in light mode. See [PLANS.md](PLANS.md).

## Layout

- `max-w-2xl` centered column with `mx-auto`
- Horizontal padding: `p-4` mobile → `p-16` desktop → none in print (`@page` sets A4 margins of 14mm/16mm)
- Sections stack vertically with `gap-y-8` (web) / `gap-y-6` (print)
- Avatar: `size-28`, right-aligned in header row, hidden in print

## Print decisions

### Sections hidden in print

| Section | Reason |
|---------|--------|
| Interests | Not relevant on a printed CV |
| Projects | Too many items; page-space is limited |
| Contact icon buttons | Replaced by plain-text email/phone |
| Avatar | A remote image; prints as a gray initials box when it fails |
| CommandMenu (button + hint) | No keyboard interaction when printed |

### Sections shown only in print

- Plain-text email and phone (`hidden print:flex` wrapper in `page.tsx`)

### Section order (print)

Print follows web order, so experience comes straight after the profile on page 1:

```
1. Profile
2. Work Experience
3. Education
4. Achievements
```

### Page-break rules

- Section headings (`main h2`), company headers and role title rows use `break-after: avoid`, so a heading never ends a page.
- Roles may split between bullets so pages fill; a single bullet never splits.
- A company's tech list (`.company-tech`) stays with its last role, and achievement tiles never split.

## Command palette UI

- `< xl` breakpoint: floating round `Button` fixed at `bottom-4 right-4`
- `xl+` breakpoint: fixed bottom bar with `⌘J` hint text
- Both hidden in print via `print:hidden`
