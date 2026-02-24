# Plans

## Current status

Content-update site. No active feature development.

## Potential improvements

### Dark mode toggle

CSS variables for `.dark` are already defined in `globals.css`. A toggle UI and
`next-themes` integration would complete this. Blocked by: decision on toggle placement
(doesn't fit current minimal aesthetic without thought).

### PDF export

Generate a PDF server-side (e.g. Puppeteer in a CI job) and host it as a static asset.
Would allow direct PDF downloads without relying on browser print dialogs.

### Next.js upgrade

Currently on 14.0.4. Next.js 15 introduces breaking changes in `Metadata` and async params.
Upgrade path is straightforward but needs testing of the static export output.

### cmdk v1

`cmdk` is pinned to 0.2. The v1 API differs (new component names, changed props).
Upgrading ShadCN's `Command` primitive would require a migration. Tracked in
[tech-debt-tracker](exec-plans/tech-debt-tracker.md).

### Playwright print test

Automate browser print rendering verification using Playwright's print emulation.
Would catch layout regressions. Currently verified manually.

## Links

- Tech debt: [exec-plans/tech-debt-tracker.md](exec-plans/tech-debt-tracker.md)
