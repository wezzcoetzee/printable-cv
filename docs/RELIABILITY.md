# Reliability

## Pipeline

```
git push main
    │
    ▼
GitHub Actions (.github/workflows/cloudflare-pages.yml)
    ├── actions/checkout@v4
    ├── oven-sh/setup-bun@v2
    ├── bun install --frozen-lockfile
    ├── bun run build
    └── cloudflare/wrangler-action@v3
            └── pages deploy out --project-name=...
```

## PR preview deployments

Pull requests trigger the same pipeline. Wrangler automatically creates a preview URL
scoped to the branch. Preview deployments are available while the PR is open.

## Required secrets and variables

| Name | Type | Purpose |
|------|------|---------|
| `CLOUDFLARE_API_TOKEN` | Secret | Authenticates wrangler |
| `CLOUDFLARE_ACCOUNT_ID` | Secret | Identifies the Cloudflare account |
| `CLOUDFLARE_PROJECT_NAME` | Variable | Cloudflare Pages project name |

## Failure modes

| Failure | Impact | Recovery |
|---------|--------|----------|
| Cloudflare outage | Site unavailable | Wait for Cloudflare resolution; site is static so no data loss |
| Build failure | No deployment; previous version stays live | Fix the code, push again |
| Broken link in `resume-data.tsx` | Dead link for visitors | Update URL in `resume-data.tsx`, push |
| Wrangler auth failure | Deploy step fails; previous version stays live | Rotate `CLOUDFLARE_API_TOKEN` secret |

## No runtime failure

The site is 100% static. There is no server process to crash, no database to lose connection
to, and no queue to back up. Once deployed, the only failure mode is CDN-level.

## Analytics

Google Analytics is loaded via `next/script` with `strategy="lazyOnload"` in `layout.tsx`.
It is non-blocking and does not affect page load performance. If the GA script fails to load,
the site continues to function normally.
