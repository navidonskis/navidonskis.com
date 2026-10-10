# navidonskis.com rebuild: specification

Status: approved for build. Owner: Donatas Navidonskis. Date: 2026-10-09.

## 1. Goal

Replace the current single-page consultant site with a writing-first personal site:

- Home page (launch version, no service offers)
- Writing index and post pages, authored as Markdown/MDX in the repo
- RSS and sitemap
- Deployed from Git to Cloudflare Pages, custom domain navidonskis.com

A later phase adds a services section (see `design/home-with-services-later.html`). It is not part of this build.

## 2. Stack and constraints

- Astro, latest stable. Content collections with `src/content.config.ts`.
- Integrations: `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`. Nothing else unless justified.
- Plain CSS: `src/styles/tokens.css` (custom properties) and `src/styles/global.css`. No Tailwind, no CSS-in-JS.
- No client-side JavaScript on the home page. Posts may use islands later (a calculator is planned), not now.
- Fonts from Google Fonts: IBM Plex Sans 400/500/600, IBM Plex Sans Condensed 600, IBM Plex Mono 400. Preconnect, `display=swap`, real fallback stacks.
- Output: static, `dist/`. Build must produce zero warnings.

## 3. Repository layout

```
.
├── CLAUDE.md
├── SPEC.md
├── design/                      reference mock, never published
│   ├── home-launch.html
│   ├── post.html
│   ├── home-with-services-later.html
│   └── *.png                    screenshots, if provided
├── public/
│   ├── favicon.svg
│   ├── og-default.png           simple static OG image, ink background, white title
│   ├── robots.txt
│   ├── _headers                 Cloudflare Pages headers
│   └── _redirects               www -> apex
├── src/
│   ├── content.config.ts
│   ├── content/writing/*.md
│   ├── layouts/Base.astro
│   ├── layouts/Post.astro
│   ├── components/Header.astro
│   ├── components/Footer.astro
│   ├── components/PostList.astro
│   ├── components/ContactBand.astro
│   ├── components/Seo.astro
│   ├── pages/index.astro
│   ├── pages/writing/index.astro
│   ├── pages/writing/[slug].astro
│   ├── pages/rss.xml.ts
│   └── pages/404.astro
├── astro.config.mjs
├── package.json
└── README.md
```

## 4. Design tokens

Taken from the approved mock. Put them in `tokens.css` as custom properties and use them everywhere; no raw hex values in components.

Colors

| Token | Value | Use |
|---|---|---|
| `--c-bg` | `#FFFFFF` | page background |
| `--c-ink` | `#0E1F2F` | primary text, dark band background, headings |
| `--c-text-2` | `#3A4854` | secondary text, lead paragraphs |
| `--c-muted` | `#5C6670` | dates, footer, meta |
| `--c-rule` | `#D9DEE3` | hairlines on white |
| `--c-rule-2` | `#C9CFD5` | hairlines on surface |
| `--c-surface` | `#F3F5F7` | alternating section background |
| `--c-tint` | `#EAF3EE` | highlighted boxes (post CTA) |
| `--c-tint-rule` | `#C9DCD2` | rule inside tint boxes |
| `--c-accent` | `#0B6B4F` | buttons, links, step numbers |
| `--c-accent-hover` | `#08523D` | link hover |
| `--c-on-ink-2` | `#C5CED6` | secondary text on dark band |
| `--c-code-bg` | `#0E1F2F` | code blocks |
| `--c-code-fg` | `#E6EBEF` | code text |

Typography

| Token | Value |
|---|---|
| `--f-sans` | `'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif` |
| `--f-display` | `'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif` |
| `--f-mono` | `'IBM Plex Mono', Menlo, Consolas, monospace` |
| h1 | display 600, 72px / 1.02, letter-spacing -0.01em; clamp to 40px on small screens |
| h2 | display 600, 40px / 1.1 |
| h3 | display 600, 34px / 1.1 |
| post h1 | display 600, 54px / 1.05; clamp to 34px |
| post h2 | display 600, 32px / 1.15 |
| body | sans 400, 17px / 1.55 (home), 18px / 1.6 (post) |
| lead | sans 400, 21px / 1.5, color `--c-text-2` |
| small | 15px to 16px, color `--c-muted` |

Layout

- Container: max-width 1120px, horizontal padding 32px (20px under 640px).
- Post reading column: max-width 720px.
- Section padding: 80px to 96px vertical on desktop, 56px under 768px.
- Radius: 6px buttons, 8px boxes, 999px chips. Rules 1px. Cards use a 3px top rule in `--c-ink`, no borders elsewhere, no shadows.
- Buttons: primary = accent background, white text, weight 500, padding 12px 20px (14px 24px in hero). Inverse on dark band = white background, ink text, weight 600.
- Chips: 1px rule border, 999px radius, 6px 12px padding, 14px text.
- List rows (writing, about bullets): top rule, 18px to 20px vertical padding, last row also bottom rule.

Responsive behavior

- Below 900px: multi-column grids stack to one column (three "What I work on" columns, two FAQ columns later, about split).
- Header nav wraps; keep the button visible. No hamburger menu needed at launch.
- Tables inside posts scroll horizontally in their own container; the page never scrolls sideways.

## 5. Pages

### 5.1 Home (`/`)

Structure and copy: `design/home-launch.html`, verbatim. Sections in order:

1. Header: name link, nav (Writing, What I work on, About), button "Talk to me" linking to `#contact`.
2. Hero: h1, lead paragraph, primary button "Read the latest" (links to `#writing`), text link "Talk to me about your GCP setup" (links to `#contact`).
3. Writing: h2 plus "All posts and RSS" link (to `/writing/`), then the latest 3 published posts rendered by `PostList` (title, description, date). The mock shows placeholder rows; the real page reads the collection.
4. What I work on: three columns, copy verbatim.
5. About: left column (h2, paragraph, chips), right column (bullet rows). Keep `[bracketed]` placeholders.
6. Contact band: dark, h2, paragraph, inverse button "Book a 30-minute call" and email link. Both hrefs come from `src/site.config.ts` (`bookingUrl`, `email`), with placeholder values until the owner sets them.
7. Footer: location line and links GitHub, LinkedIn, RSS (`/rss.xml`). Link targets also from `site.config.ts`.

### 5.2 Writing index (`/writing/`)

Same header, footer and contact band. h1 "Writing", intro line (one sentence, write it: what the writing is about, in the voice of the hero copy), then all published posts newest first: date, title, description. Drafts excluded from production builds.

### 5.3 Post (`/writing/[slug]/`)

Structure and styles: `design/post.html`. Elements:

- Back link "Writing"
- h1, meta line: formatted date, reading time (compute from body word count, 220 wpm, round up)
- Lead paragraph = frontmatter `description`
- Body styles: h2, p, ul/ol, blockquote, inline code, `pre` blocks (dark, mono 14px, scroll), tables in an `overflow-x: auto` container with the mock's cell padding and rules, images max-width 100%.
- CTA aside at the end, variant from frontmatter `cta`:
  - `talk` (default): heading "Something in your GCP setup bothering you?", text "Thirty minutes, no pitch.", button "Book a 30-minute call"
  - `finops`: heading "Want this done on your GCP?", text "A fixed-scope FinOps audit, two weeks, read-only access.", button same
  - `gitlab`: heading "Want this measured on your pipelines?", text "GitLab CI on GCP audit, fixed price agreed up front, one to two weeks.", button same
  - `none`: no aside
- Author block: name, one line bio (from `site.config.ts`)
- Footer

### 5.4 404

Minimal: "Nothing here." and a link to the home page and the writing index. Same header and footer.

## 6. Content model

`src/content.config.ts`, collection `writing`, glob loader on `src/content/writing/**/*.{md,mdx}`:

```ts
title: z.string()
description: z.string().max(200)
pubDate: z.coerce.date()
updatedDate: z.coerce.date().optional()
draft: z.boolean().default(false)
tags: z.array(z.string()).default([])
cta: z.enum(['none', 'talk', 'finops', 'gitlab']).default('talk')
```

- File naming: `YYYY-MM-DD-kebab-title.md`. The URL slug drops the date prefix: `/writing/kebab-title/`.
- `draft: true` posts build locally, never in production (`import.meta.env.PROD`).
- Reading time is computed at build time, not stored in frontmatter.
- One sample post is provided in `content/writing/`. Copy it into `src/content/writing/`.

## 7. SEO and feeds

- `Seo.astro`: title template `{title} | Donatas Navidonskis` (home: `Donatas Navidonskis: cloud cost, platform engineering and system design on Google Cloud`), meta description, canonical, Open Graph and Twitter card tags, `og:image` defaulting to `/og-default.png`.
- JSON-LD: `Person` on the home page, `Article` on posts (headline, datePublished, dateModified, author).
- `/rss.xml` with full post content (use `@astrojs/rss` with the rendered body), `/sitemap-index.xml` via the integration, `robots.txt` pointing at the sitemap.
- `site` in `astro.config.mjs` set to `https://navidonskis.com`.

## 8. Cloudflare Pages

- Build command `pnpm build`, output `dist`, Node version pinned via `.nvmrc` and `NODE_VERSION` noted in README.
- `public/_redirects`: `https://www.navidonskis.com/* https://navidonskis.com/:splat 301`.
- `public/_headers`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, and a CSP that allows self, `fonts.googleapis.com`, `fonts.gstatic.com` and `static.cloudflareinsights.com`.
- Cloudflare Web Analytics: include the beacon snippet only when `PUBLIC_CF_ANALYTICS_TOKEN` is set.
- README: step-by-step for connecting the repo in the Cloudflare dashboard, setting the custom domain, and where to put the booking URL, email and social links (`src/site.config.ts`).

## 9. Accessibility and performance

- Semantic landmarks, one h1 per page, skip link, visible focus styles, link underlines on hover at minimum.
- Color contrast per tokens (all pairs above 4.5:1 for body text).
- No layout shift from fonts beyond swap; use `size-adjust` fallbacks if Lighthouse flags CLS.
- Lighthouse 95+ on all four categories for home and a post page, mobile and desktop.

## 10. Out of scope for this build

Services and pricing section, calculator island, newsletter, comments, dark mode (tokens are structured so it can be added later), internationalisation, image CDN.

## 11. Tasks, in order

Each task ends with a passing `pnpm build` and a short report. Commit only when told.

1. Scaffold: Astro project, integrations, `tokens.css`, `global.css`, `site.config.ts`, `Base.astro`, `Header`, `Footer`. Fonts loading correctly.
2. Home page per `design/home-launch.html`. Check at 390px, 768px and 1280px. The 1280px render should match the reference HTML opened in a browser.
3. Content collection, sample post, `PostList`, writing index, post layout per `design/post.html`, CTA variants, reading time.
4. `Seo.astro`, JSON-LD, RSS, sitemap, robots, 404, OG default image.
5. Cloudflare Pages files (`_headers`, `_redirects`, `.nvmrc`), README with deploy and configuration steps.
6. QA: Lighthouse on home and post, HTML validation, internal link check, confirm `design/` is not in `dist/`. Final report listing anything left for the owner (placeholders, URLs, analytics token).

## 12. Acceptance checklist

- [ ] Home matches the reference at 1280px and reads well at 390px
- [ ] Copy identical to `design/home-launch.html`, placeholders intact
- [ ] Writing index and post page match `design/post.html`
- [ ] Drafts excluded in production build
- [ ] RSS validates, sitemap present, robots points to it
- [ ] Lighthouse 95+ across the board
- [ ] Zero build warnings, no client JS on home
- [ ] `design/` absent from `dist/`
- [ ] README explains deploy and the three things the owner must fill in

## 13. How to read the design references

`design/home-launch.html` and `design/post.html` are the approved mock exported as plain HTML with inline styles. Open them in a browser to see the intended result; read them for exact spacing, colors and copy. Translate inline styles into the token system and reusable components; the visual result at 1280px must stay the same. `design/home-with-services-later.html` shows the future services section and exists only so component choices today do not block it later. PNG screenshots, if present next to the HTML files, show the intended rendering.
