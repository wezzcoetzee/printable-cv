---
target: the CV page
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-11-21T03-53-03Z
slug: src-app-page-tsx
---
# Critique: CV page (src/app/page.tsx)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Static page; ⌘J hint desktop-only |
| 2 | Match System / Real World | 3 | Header "Tech Lead / Principal Engineer" vs profile "Software Engineer" vs current title |
| 3 | User Control and Freedom | 3 | No section jump links on a long scroll |
| 4 | Consistency and Standards | 2 | Tags placement varies; timeline rule only on multi-role orgs; tiles overhang column in print |
| 5 | Error Prevention | 3 | n/a; content typos are the real errors |
| 6 | Recognition Rather Than Recall | 2 | Email/phone icon-only on screen |
| 7 | Flexibility and Efficiency | 2 | ⌘J palette undiscoverable, meaningless on touch |
| 8 | Aesthetic and Minimalist Design | 2 | 14-15 identical pills per role, duplicated across Eneco/Capgemini |
| 9 | Error Recovery | 3 | Avatar fallback is a gray "WC" box |
| 10 | Help and Documentation | 3 | n/a |
| **Total** | | **26/40** | **Acceptable** |

## Anti-Patterns Verdict
Not AI slop (no gradients, eyebrows, hero metrics, glass, terminal cosplay) but not distinctive: reads as shadcn defaults with content poured in. Detector: 1 real hit (marketing-buzzword "mission-critical", layout.tsx metadata, also resume-data.tsx:34 unflagged); 1 false positive (side-tab on the neutral timeline rule, company-card.tsx:62). DOM: heading order, link names, aria-labels all pass. Two 10px text sizes (command-menu.tsx:41, project-card.tsx:49), both screen-only. 22 dead `print:block` URL lines inside the print-hidden Projects section.

## Priority Issues
- **[P1] Generic profile, buried proof.** Profile is interchangeable; best outcomes (battery onboarding 6 months to 2 weeks, VM provisioning 4-6h to 30m) are buried mid-list. Fix: specific first-person profile, promote 2-3 outcomes per role. Command: clarify.
- **[P1] Print pagination.** A4 output is 4 pages: half-empty page 1 (Work forced to new page), orphaned company headers at page ends, print order puts Education/Achievements before experience, tile grid overhangs the column, avatar placeholder prints. Command: polish.
- **[P2] Prose in thin gray mono.** All reading text is 12-14px mono at Slate Note; slow to read in paragraphs, washes out in grayscale print with Courier fallback. Fix: prose in sans, mono for dates/tags/metadata. Command: typeset.
- **[P2] Tag clouds.** Loudest, densest element with no hierarchy. Fix: one comma-separated mono line, 6-8 most relevant, no duplicates. Command: distill.
- **[P2] Mobile cramped.** Role/date row squeezes, nested timeline indent eats ~40px, floating ⌘ overlaps content. Command: adapt.

## Persona Red Flags
- Jordan: no visible email on screen, only unlabeled icon buttons.
- Casey: wrapped dates, ~3400px scroll, no section jumps, ⌘ button useless on touch.
- Riley: avatar depends on remote GitHub URL; "Capgemini contracted to Eneco" plus two badges wraps badly at 390px.
- Hiring manager printing the PDF: 4 pages, orphaned headers, experience last, thin mono hard to mark up.

## Minor Observations
"bottle necks"; "Iconics" vs "Ionic"; "RCL Foods(South Africa)"; 2000 vs 2500 people; tense mix in Idexx bullets; redundant "Contracted to Eneco" badge; no skip link.

## Questions to Consider
- If a recruiter read only the first 8 lines, would they know why to call?
- Is the mono the personality, or the default?
- Should the PDF be its own designed 2-page document rather than the web page with print utilities?
