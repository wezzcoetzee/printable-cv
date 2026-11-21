# Product

## Register

brand

## Users

Recruiters, hiring managers, and engineering peers evaluating Wesley Coetzee. They arrive
from a name search, a link in an application, or a referral, and skim quickly on either a
phone or desktop, often with several other candidates open. A meaningful share will print
the page to A4 or save it as a PDF for sharing internally. The job to be done: confirm,
within seconds, that Wesley is a credible engineer worth a conversation, then find the
specific detail (a role, a stack, a project) that confirms fit.

## Product Purpose

A single-page personal CV that renders cleanly on the web and prints to a tidy A4 sheet.
It exists to make Wesley legible and credible fast: name, title, and headline experience
visible without scrolling; the full work history and achievements one scan away. Success is
a recruiter reaching a "yes, let's talk" without friction, and a print/PDF that looks
deliberate rather than dumped from a builder. Content lives in one config file
(`src/data/resume-data.tsx`); there is no editor, CMS, or accounts.

## Brand Personality

Precise and technical, with a human voice. Understated confidence that lets the work speak,
not the decoration, but it should read as a person rather than a spec sheet. The
mono-accented detail typography signals engineer credibility; the neutral palette and
generous whitespace signal restraint and care. Warmth comes from voice and tone (first-person
copy, specific outcomes, the odd personal detail), never from color or ornament. Three words:
precise, credible, warm-restrained. The page should read as written by someone who sweats
details and is good to work with, because that is the pitch.

## Anti-references

- **Generic CV-builder template.** Nothing that reads as Canva / Zety / LinkedIn export:
  no stock icon rows, no skill-bar percentages, no template-photo header.
- **Dense corporate resume.** No cramped two-column walls of text, no 9pt justified blocks,
  no everything-on-one-screen compression that sacrifices readability.
- **Over-designed / flashy.** No gradients, glassmorphism, gradient text, decorative noise,
  or color used for its own sake. The palette stays pure neutral on purpose.
- **Trendy AI-landing look.** No tracked-uppercase eyebrow above every section, no
  numbered section markers, no hero-metric template, no SaaS-marketing clichés.

- **Dev-portfolio cliché.** No terminal cosplay, fake code blocks, blinking cursors,
  GitHub contribution graphs, or "Hello, World" heroes. Engineer credibility comes from the
  work described, not from dressing the page up as an IDE.

## Design Principles

- **The work is the design.** Decoration is borrowed credibility; restraint is earned
  credibility. Every visual choice should make the content clearer, never louder.
- **Legible in seconds.** Hierarchy must deliver name → title → headline experience before
  any scroll. If a recruiter has to hunt, the design failed.
- **Print is a first-class surface.** The A4 output is not an afterthought; section order,
  page breaks, and what's hidden/shown in print are deliberate design decisions.
- **Detail signals discipline.** Consistent spacing, alignment, and the mono-detail
  convention are the proof-of-craft that matches the engineer being described.
- **A person, not a template.** Warmth lives in the words: specific, first-person, plain.
  If a paragraph could appear on anyone's CV, rewrite it.
- **One source of truth.** Content stays in the config file; the design adapts to the data,
  not the reverse.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body text ≥ 4.5:1 contrast, large text ≥ 3:1 against its background.
Semantic landmarks and heading order, full keyboard navigation (including the ⌘J command
palette), visible focus states. Honor `prefers-reduced-motion` for any animation. Ensure
the print/PDF output remains high-contrast and readable in grayscale.
