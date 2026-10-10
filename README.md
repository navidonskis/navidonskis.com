# navidonskis.com

Personal site of Donatas Navidonskis. Writing first, consulting later. Static Astro site, deployed to Cloudflare Pages.

## Stack

- Astro with content collections, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`
- `@astrojs/markdown-satteri` (Astro's own Markdown processor) for the one Markdown plugin we have: wrapping tables in a scroll container
- Plain CSS with custom properties (`src/styles/tokens.css`, `src/styles/global.css`)
- IBM Plex from Google Fonts through Astro's fonts API: files are fetched at build time and served from `/_astro/fonts/` with metric-matched fallbacks, so no third-party request sits on the critical path
- No client-side JavaScript, except the Cloudflare Web Analytics beacon when its token is set
- pnpm, Node 22 (see `.nvmrc`)

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:4321, drafts visible
pnpm build      # production build to dist/, drafts excluded
pnpm preview    # serve dist/
```

## Three things to fill in before launch

1. `src/site.config.ts`: `bookingUrl` (scheduling link), `email`, `github`, `linkedin`. Until `email` is set, the contact band shows the `[email address]` placeholder and the link points at the band itself.
2. `src/pages/index.astro`, About section: the `[peak orders per minute or requests per second]` placeholder.
3. Cloudflare Pages environment variable `PUBLIC_CF_ANALYTICS_TOKEN` (optional). Without it no analytics script is included.

## Writing a post

Create `src/content/writing/YYYY-MM-DD-kebab-title.md`. The URL becomes `/writing/kebab-title/` (the date prefix is dropped).

```md
---
title: "Post title"
description: "One or two sentences, max 200 characters. Shown as the lead paragraph and in lists."
pubDate: 2026-10-20
updatedDate: 2026-11-01   # optional
draft: true               # optional, default false. Drafts build locally, never in production.
tags: ["gcp", "iam"]      # optional
cta: talk                 # optional: none | talk | finops | gitlab, default talk
---

Body in Markdown. Tables scroll horizontally on small screens, code blocks are highlighted at build time.
```

Reading time is computed from the body at build time (220 words per minute, rounded up).

`cta` selects the aside at the end of the post:

| Value | Heading |
|---|---|
| `talk` | Something in your GCP setup bothering you? |
| `finops` | Want this done on your GCP? |
| `gitlab` | Want this measured on your pipelines? |
| `none` | no aside |

MDX (`.mdx`) works too and is meant for posts with interactive islands later.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub or GitLab.
2. Cloudflare dashboard: Workers & Pages, Create, Pages, Connect to Git. Pick the repository.
3. Build settings:
   - Framework preset: Astro
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION` = `22` (matches `.nvmrc`), optionally `PUBLIC_CF_ANALYTICS_TOKEN`
4. Save and deploy. The first build gives you a `*.pages.dev` URL.
5. Custom domain: in the Pages project, Custom domains, Set up a custom domain, enter `navidonskis.com`. Cloudflare adds the DNS record if the zone is on Cloudflare. Add `www.navidonskis.com` as well so the redirect in `public/_redirects` can send it to the apex.
6. Web Analytics (optional): Cloudflare dashboard, Analytics & Logs, Web Analytics, Add a site, copy the token into the `PUBLIC_CF_ANALYTICS_TOKEN` variable and redeploy.

Headers (CSP, nosniff, referrer policy, caching) live in `public/_headers`. The www redirect lives in `public/_redirects`. Both are picked up by Pages automatically.

## Repository layout

```
design/            approved mock, reference only, never published
public/            static files copied to dist/ as-is (favicon, OG image, robots, _headers, _redirects)
scripts/           og-image.py regenerates public/og-default.png
src/content/       posts
src/components/    Header, Footer, PostList, ContactBand, Seo
src/layouts/       Base (every page), Post (writing/[slug])
src/pages/         routes, including rss.xml and 404
src/styles/        tokens.css, global.css
src/site.config.ts owner settings
```

## Checks before a release

- `pnpm build` passes with zero warnings
- `dist/` contains no `design/` folder
- `/rss.xml` and `/sitemap-index.xml` are present in `dist/`
- Lighthouse 95+ on `/` and a post page, mobile and desktop
