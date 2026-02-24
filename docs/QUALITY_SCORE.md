# Quality Score

## Definition of done

A change is shippable when all of the following pass:

- [ ] TypeScript strict — zero errors (`bun run build` reports none)
- [ ] ESLint passes — `bun run lint` exits 0
- [ ] Build succeeds — `out/` is produced without errors
- [ ] Web layout verified — main page renders correctly at mobile and desktop widths
- [ ] Print layout verified — browser print preview shows correct A4 layout, no clipped sections
- [ ] No broken links — all `href` values in `resume-data.tsx` resolve

## Explicit omissions

- **No unit tests.** Components are purely presentational with no logic to isolate.
  The build is the integration test.
- **No accessibility tests.** Radix UI primitives (used via ShadCN) provide baseline
  ARIA semantics and keyboard navigation out of the box. Manual spot-checks are sufficient.
