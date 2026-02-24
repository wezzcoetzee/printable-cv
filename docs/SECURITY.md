# Security

## Attack surface

Essentially none. The site accepts no user input, runs no server, has no authentication,
and connects to no database. The output is static HTML/CSS/JS served from a CDN.

## What exists

### GitHub Actions secrets

Two secrets grant CI permission to deploy: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
The API token should be scoped to `Pages:Edit` for the specific project only — minimum privilege.

### Google Analytics

A third-party script (`gtag.js`) is loaded from Google's CDN. It runs in the visitor's browser
and is subject to Google's privacy policy. No PII is collected beyond what GA captures by default.

### External links

`resume-data.tsx` and `project-card.tsx` open external links with `target="_blank"`.
The `ProjectCard` component does not currently set `rel="noopener noreferrer"` on external links
— this is tracked as a tech-debt item in [exec-plans/tech-debt-tracker.md](exec-plans/tech-debt-tracker.md).

## Explicit omissions

The following security concerns do not apply to this site and are intentionally not addressed:

- Authentication / sessions — no login, no users
- Input validation / sanitisation — no user input
- SQL injection / NoSQL injection — no database
- CSRF / XSS via user content — no user-generated content
- Server-side secrets — no server
- Rate limiting — no API
