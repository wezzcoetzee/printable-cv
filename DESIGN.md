---
name: Wesley Coetzee CV
description: A single-page engineer's CV that reads well on screen and prints to a tidy A4 sheet.
colors:
  ink: "#030712"
  graphite: "#111827"
  prose: "#1f2937"
  slate-note: "#575e6b"
  hairline: "#e5e7eb"
  mist: "#f3f4f6"
  sheet: "#ffffff"
  live-signal: "#22c55e"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.333
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "12px"
  md: "16px"
  lg: "32px"
  page-mobile: "16px"
  page-print: "48px"
  page-desktop: "64px"
components:
  button-icon-outline:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.slate-note}"
    rounded: "{rounded.md}"
    size: "36px"
  button-icon-outline-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.graphite}"
  badge-tag:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  badge-interest:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  card-tile:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.lg}"
    padding: "12px"
---

# Design System: Wesley Coetzee CV

## 1. Overview

**Creative North Star: "The Engineer's Letter"**

The page is a letter typeset by a careful engineer: a white sheet, one column, a confident sans for the things you scan (name, section, company, role), a book serif for the things you read (tagline, profile, outcomes), and a monospace for the detail (dates, stack, location). It is personal in voice and exact in setting. Nothing on the page exists to look designed; everything exists to be read, then printed, then handed to someone else.

Density is moderate. A single `max-w-2xl` column (672px) holds everything, with 32px between sections on screen and 24px in print. Whitespace does the separating; borders appear only where a tile needs an edge. The system is flat, neutral and almost entirely achromatic, so the one green dot that marks a live project link reads as a signal rather than decoration. The page must work identically as an A4 sheet: print is a first-class surface, not a fallback.

This system rejects, by name, the anti-references in PRODUCT.md: the **generic CV-builder template** (stock icon rows, skill-bar percentages, template-photo header), the **dense corporate resume** (cramped two-column walls, 9pt justified blocks), anything **over-designed or flashy** (gradients, glassmorphism, gradient text, decorative noise), the **trendy AI-landing look** (tracked-uppercase eyebrows, numbered section markers, hero-metric template), and the **dev-portfolio cliché** (terminal cosplay, fake code blocks, blinking cursors, contribution graphs, "Hello, World" heroes).

**Key Characteristics:**
- One centered column, 672px max, generous vertical rhythm.
- Three voices: sans to scan, serif to read, mono for detail.
- Achromatic palette with cool-gray neutrals; color is a signal, never a theme.
- Flat surfaces: hairline borders instead of shadows.
- Light is canonical and matches the printed sheet. A dark variant is planned, not shipped.

## 2. Colors

A cool, near-achromatic neutral palette with a single functional green.

### Primary
- **Ink** (#030712): every heading, the name, company names, and primary text. 20:1 on Sheet. The page's only voice color.
- **Graphite** (#111827): filled surfaces that need weight, such as interest badges and the default button. Text on tag badges.
- **Prose** (#1f2937): all reading text set in the serif (tagline, profile, bullets). Darker than Slate Note so paragraphs read comfortably in print.

### Neutral
- **Slate Note** (#575e6b): all secondary and detail text (profile paragraphs, role bullets, dates, location, descriptions). 6.5:1 on Sheet, 5.9:1 on Mist, so it passes AA at 12px.
- **Hairline** (#e5e7eb): the only border color. Tile edges, input strokes, the timeline rule.
- **Mist** (#f3f4f6): tag badge fill and hover fill on outline buttons. Never a section background.
- **Sheet** (#ffffff): the page. Pure white, chroma 0, identical to the A4 sheet it prints on.

### Tertiary
- **Live Signal** (#22c55e): a 4px dot next to a project title that links to something running. Used nowhere else.

### Planned: dark variant
`globals.css` already defines a `.dark` token block (Ink and Sheet invert; neutrals shift to #1e293b-family slates), but there is no toggle and the site never renders dark. Treat it as planned. When it ships it must keep the same contrast ratios and must never apply to print.

### Named Rules
**The Signal-Only Rule.** Chromatic color appears only when it carries meaning (a live link, a destructive action). If a color is there to make the page feel less gray, it is forbidden.

**The Slate Floor Rule.** No text lighter than Slate Note (#575e6b). The ShadCN default muted gray (#6b7280) was deliberately darkened; do not regress it.

## 3. Typography

**Display Font:** Inter (with ui-sans-serif, system-ui)
**Body Font:** Source Serif 4 (with Georgia, serif)
**Label/Mono Font:** Geist Mono (with ui-monospace)

**Character:** Inter sets the scannable skeleton in a neutral, confident sans. Source Serif carries everything you read, like a typeset letter, which is where the warmth comes from. Geist Mono marks the detail (dates, stack, location) as the engineer's handwriting: precise and tabular. All three load through `next/font/google`.

### Hierarchy
- **Display** (700, 1.5rem / 24px, 1.333): the name only. Once per page.
- **Headline** (700, 1.25rem / 20px, 1.4): section titles ("Profile", "Work Experience", "Education"). Plain words, no kickers, no numbers.
- **Title** (600, 1rem / 16px, 1): company, school and tile titles. Role titles use the same weight at 15px.
- **Body** (serif 400, 1rem / 16px, 1.625, Prose color): profile paragraphs. Bullets at 15px, the tagline at 18px. Print: profile 10pt, bullets 9.5pt, tagline 12pt. Column width caps it near 75ch.
- **Label** (mono 400, 0.75rem / 12px, 1.33): company blurbs, dates, location, the stack line, badges, education degree. Badges use 600. Dates always use `tabular-nums`.

### Named Rules
**The Three-Voice Rule.** Sans is for what you scan, serif is for what you read, mono is for detail. Never set a heading in serif, a bullet in mono, or a date in serif.

**The No-Shouting Rule.** No uppercase labels, no tracked-out kickers, no sizes above 24px. Hierarchy comes from weight and the switch between the three voices.

## 4. Elevation

The system is flat. Depth comes from whitespace and 1px Hairline borders, not shadows. Nothing floats over content, on any screen size.

### Named Rules
**The Paper Rule.** If it would not survive a laser printer, it does not belong. No shadows on content, no translucency, no blur.

## 5. Components

Refined and restrained: components are typographic first and only take a box when grouping demands it.

### Buttons
- **Shape:** gently rounded (6px).
- **Icon outline (primary use):** 36px square, Sheet fill, Hairline border, Slate Note icon at 16px. Used for the contact row (email, phone, socials). Every one carries an `aria-label`.
- **Labelled outline:** same chrome, 36px tall, icon plus a mono label. The contact row ends with one: Print.
- **Hover / Focus:** hover fills Mist and darkens the icon to Graphite via a color transition. Focus shows a 2px Ink ring with 2px offset.
- **Print:** the icon row is hidden and replaced by plain underlined email and phone text.

### Chips (badges)
- **Tag:** Mist fill, Graphite mono text at 12px (10px on project tiles), 600 weight, 6px radius, no border. Used for company location badges.
- **Interest:** Graphite fill at 80%, Sheet text. Web only; hidden in print.

### Cards / Containers
- **Company entry:** not a visible box. No border, no padding; just a heading, an optional mono blurb, and positions. Multi-role companies get a 2px Hairline timeline rule on the left, indented 16px, with 32px text inset (Slate Note in print for grayscale contrast). Phones drop the rule and split roles with a Hairline instead.
- **Tile (achievements, projects):** 8px radius, Sheet background, 1px Mist border, 12px padding, laid out in a 1/2/3-column grid (3 in print).
- **Education:** heading row with right-aligned tabular dates, then the degree in mono.

### Navigation
- **Command menu (⌘J):** a ShadCN command dialog listing external links. On xl screens a fixed bottom hint bar shows the shortcut in a small `kbd`. Below xl there is no trigger; touch users print from the contact row. Hidden in print.

### Stack line
Each company ends with one mono line in Slate Note: a bold Ink "Stack" label, then up to 8 technologies separated by middle dots, most relevant first. Never pills; each technology stays unbroken.

### Phones (below 640px)
The page reads like a dated letter. No avatar, so the name and tagline take the full width. No timeline rule; a Hairline separates roles and each date sits above its title. Print keeps the desktop layout.

### Timeline (signature)
The only structural ornament on the page: a vertical rule tying multiple roles at one company together, so promotions read as a single story. Each role is a sans title with right-aligned mono dates over a disc-bulleted serif list. In print a role may split between bullets, but a title never ends a page and the company header never orphans from its first role.

## 6. Do's and Don'ts

### Do:
- **Do** keep everything in one centered column at 672px max, with 32px between sections (24px in print).
- **Do** set headings in Inter, reading text in Source Serif, and detail in Geist Mono, per the Three-Voice Rule.
- **Do** keep secondary text at Slate Note (#575e6b) or darker; it is 6.5:1 on Sheet.
- **Do** use `tabular-nums` for every date.
- **Do** check every layout change in print: section order, page breaks, and hidden/shown elements. See `docs/DESIGN.md` for the canonical print rules.
- **Do** carry warmth in the copy, not in the palette.

### Don't:
- **Don't** make it look like a **generic CV-builder template**: no stock icon rows, no skill-bar percentages, no template-photo header.
- **Don't** drift into a **dense corporate resume**: no cramped two-column walls of text, no 9pt justified blocks.
- **Don't** go **over-designed or flashy**: no gradients, glassmorphism, gradient text, decorative noise, or color for its own sake.
- **Don't** borrow the **trendy AI-landing look**: no tracked-uppercase eyebrow above sections, no numbered section markers, no hero-metric template.
- **Don't** fall into the **dev-portfolio cliché**: no terminal cosplay, fake code blocks, blinking cursors, GitHub contribution graphs, or "Hello, World" heroes.
- **Don't** add shadows to content, or use a colored `border-left` thicker than 1px as an accent (the timeline rule is structural, Hairline, and 2px max).
- **Don't** introduce a second chromatic color. If the green dot ever has company, one of them is decoration.
- **Don't** add continuously running animation; state transitions on hover and focus only, and they must respect `prefers-reduced-motion`.
