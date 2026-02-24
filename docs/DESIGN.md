# Design

## Component library

ShadCN/Radix UI — components are copied into `src/components/ui/` at install time and owned
by this repo. Update via CLI (`bunx --bun shadcn@latest add [component]`), never by hand.

## Typography

- **Body / UI**: Inter (loaded via `next/font/google` in `layout.tsx`)
- **Mono content**: Tailwind `font-mono` applied to job titles, contact info, project
  descriptions — gives a technical, code-like feel for detail text

## Palette

Pure neutral. No accent colors.

| Token | Value | Use |
|-------|-------|-----|
| `--background` | `hsl(0 0% 100%)` | page background |
| `--foreground` | `hsl(224 71.4% 4.1%)` | primary text |
| `--muted-foreground` | `hsl(220 8.9% 46.1%)` | secondary text (dates, subtitles) |
| `--border` | `hsl(220 13% 91%)` | card borders, dividers |

CSS variable definitions are in `globals.css`. A `.dark` class block is defined but there is
no toggle implemented — the site always renders in light mode. See [PLANS.md](PLANS.md).

## Layout

- `max-w-2xl` centered column with `mx-auto`
- Horizontal padding: `p-4` mobile → `p-16` desktop → `p-12` print
- Sections stack vertically with `gap-y-8` (web) / `gap-y-6` (print)
- Avatar: `size-28`, right-aligned in header row

## Print decisions

### Sections hidden in print

| Section | Reason |
|---------|--------|
| Interests | Not relevant on a printed CV |
| Projects | Too many items; page-space is limited |
| Contact icon buttons | Replaced by plain-text email/phone |
| CommandMenu (button + hint) | No keyboard interaction when printed |

### Sections shown only in print

- Plain-text email and phone (`hidden print:flex` wrapper in `page.tsx`)

### Section order (print)

Print `order-*` utilities reorder sections to suit A4 reading flow:

```
1. Profile        (print:order-1)
2. Education      (print:order-2)
3. Achievements   (print:order-3)
4. Work Experience (print:order-4, starts on new page via .print-force-new-page)
```

### Page-break rules

- `.print-force-new-page` → `page-break-before: always` — Work Experience starts on page 2
- `.timeline-container` and `.timeline-item` → `page-break-inside: avoid` — roles don't split

## Command palette UI

- `< xl` breakpoint: floating round `Button` fixed at `bottom-4 right-4`
- `xl+` breakpoint: fixed bottom bar with `⌘J` hint text
- Both hidden in print via `print:hidden`
