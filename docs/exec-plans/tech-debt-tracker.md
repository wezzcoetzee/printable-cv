# Tech Debt Tracker

Open items that are known but not yet addressed.

## Open

### `cmdk` pinned to 0.2

`cmdk` is pinned to `0.2.x`. The v1 release changed component names and props in a
breaking way. ShadCN's `Command` primitive would need to be regenerated and the
`command-menu.tsx` usage updated. Not urgent — 0.2 works correctly.

### Next.js 14.0.4 not on latest

The project uses Next.js 14.0.4. Upgrading to the latest 14.x patch or to Next.js 15
requires testing the static export output and reviewing any breaking `Metadata` API changes.

### No automated print test

Print layout is verified manually via browser print preview. A Playwright test using
print emulation (`page.emulateMedia({ media: 'print' })`) and screenshot comparison
would catch regressions automatically.

### `docker-compose.yaml` referenced in README but missing

The README mentions `docker-compose.yaml` but the file does not exist in the repository.
Either add the file or remove the reference from the README.

### `rel="noopener noreferrer"` audit on external `_blank` links

`ProjectCard` opens external links with `target="_blank"` but does not set
`rel="noopener noreferrer"`. This exposes the site to tab-napping. All external `_blank`
links should have `rel="noopener noreferrer"` applied.
