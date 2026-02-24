# Frontend

## Component catalogue

### `src/app/page.tsx`

The only page. Imports `RESUME_DATA` and renders all sections. Injects JSON-LD. Manages
section order (including print overrides). Renders `CommandMenu` with links from `RESUME_DATA`.

### `src/components/command-menu.tsx`

Client component. Keyboard shortcut `⌘J` / `Ctrl+J` opens a `cmdk` dialog with two groups:
- **Actions**: Print (calls `window.print()`)
- **Links**: personal website + social profiles passed via `links` prop

Props: `links: { url: string; title: string }[]`

### `src/components/work-experience/company-card.tsx`

Renders one employer. Shows company name (linked), location badges, optional `about` blurb,
and a list of positions. When a company has more than one position, renders a left-border
timeline. Delegates each position to `TimelineItem`.

Props: `company`, `link`, `badges`, `about?`, `positions[]`

### `src/components/work-experience/timeline-item.tsx`

Renders one role within a company: title, date range, technology badges, and bullet descriptions.
Carries `timeline-item` class for print `page-break-inside: avoid`.

Props: `position: { title, technologies, start, end, description[] }`

### `src/components/project-card.tsx`

Card for the Projects grid. Shows title (linked if `link` provided), mono description, and
tech stack badges. In print the URL is shown in plain text via a `print:visible` div.

Props: `title`, `description`, `tags`, `link?`

### `src/components/achievement-card.tsx`

Card for the Achievements grid. Shows title, description, and date. No link.

Props: `title`, `description`, `date`

### `src/components/ui/`

ShadCN primitives: `Avatar`, `Badge`, `Button`, `Card`, `Command`, `Dialog`, `Section`.
Do not edit these files manually — use the ShadCN CLI to update them.

---

## Updating CV content

Edit `src/data/resume-data.tsx` only. Every field maps directly to rendered output.

Key fields:

| Field | Renders in |
|-------|-----------|
| `name`, `initials`, `about` | Header |
| `location`, `locationLink` | Header (linked globe) |
| `avatarUrl` | Avatar image |
| `contact.email`, `contact.tel` | Header buttons + print text |
| `contact.social[]` | Header icon buttons + CommandMenu links |
| `profile[]` | Profile section (paragraphs) |
| `education[]` | Education section |
| `work[]` | Work Experience section (CompanyCard + TimelineItem) |
| `achievements[]` | Achievements grid (AchievementCard) |
| `interests[]` | Interests badges (web only) |
| `projects[]` | Projects grid (ProjectCard, web only) |

---

## Adding a new CV section

1. Add a new array field to `RESUME_DATA` in `resume-data.tsx`.
2. Create a card component in `src/components/` if the section needs one.
3. Import and render the section in `src/app/page.tsx` inside a `<Section>` wrapper.
4. Decide print visibility: add `print:hidden` or leave visible.
5. Assign `print:order-*` if the print order differs from web order.

---

## ShadCN primitives

To add a new ShadCN component:

```bash
bunx --bun shadcn@latest add [component-name]
```

This copies the component source into `src/components/ui/`. Commit the result. Never modify
generated files between CLI updates.
