# Core Beliefs

Guiding principles that shape every decision in this codebase.

## 1. Single source of truth

All CV content lives in `src/data/resume-data.tsx`. No content is duplicated across files,
hard-coded into components, or stored elsewhere. To change anything that appears on the CV,
change that one file.

## 2. Static over dynamic

The site has no server, no database, and no runtime. `output: "export"` in `next.config.js`
enforces this. If a proposed feature requires a server component that runs at request time,
an API route, or a database — it is outside scope. Reach for a static solution first.

## 3. Print as first-class target

The CV must produce a clean A4 printout. Print layout is not an afterthought added with a
`@media print` hack at the end — it is designed alongside the web layout. Every new section
must include a deliberate decision: visible in print or hidden, and in what order.

## 4. Build as integration test

There are no unit tests. The TypeScript compiler and the Next.js build are the test suite.
If `bun run build` succeeds and the output renders correctly in a browser (web + print
preview), the change is correct. Adding a test framework for purely presentational components
would add maintenance cost without catching real bugs.

## 5. ShadCN is a copy-paste library, not a dependency

ShadCN components are owned by this repo once installed. They are not a versioned npm package
that auto-updates. Updating a component means running the CLI again and reviewing the diff.
This is intentional — it gives full control over the component source without being surprised
by upstream changes.
