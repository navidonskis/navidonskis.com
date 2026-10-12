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

### Where posts live

Every post is one Markdown file in `src/content/writing/`. That is the only content directory in the repository; a file anywhere else is not published.

Name it `YYYY-MM-DD-kebab-title.md`. The date prefix is dropped from the URL, so `2026-10-20-gcloud-session.md` becomes `/writing/gcloud-session/`.

Keep `draft: true` in the frontmatter while the post is unfinished. Drafts are visible on `pnpm dev` and left out of `pnpm build`, so an unfinished post can sit in the repository without reaching the live site. Remove the line to publish.

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

## Images, charts and embeds

Everything below was tried on this build, not assumed.

### Three width levels

A post body is 720px wide on a desktop. A picture, a table or an embed can step out of that column. There are three levels and two class names:

| Level | Width on a desktop | What you write |
|---|---|---|
| standard | 720px, the text column | nothing, this is the default |
| wide | 1120px, the same width as the rest of the site | `class="wide"` |
| full | the whole window, edge to edge | `class="full"` |

The class goes on the outermost tag of the block, and that tag has to sit at the top level of the post, not inside a paragraph or a list. A `<figure>`, a `<div>` or the embed itself all work; a class on something nested deeper does nothing.

Narrow windows take care of themselves. Below 1184px `wide` shrinks to the window minus the page gutter (32px, 20px under 640px), so on a 390px phone it is the text column again; `full` is edge to edge at every size. Neither can push the page sideways.

A picture, wide. Files live in `public/images/`, same as in the section below:

```html
<figure class="wide">
  <img src="/images/diagram.png" alt="Short description" width="1120" height="560" />
  <figcaption>What the picture shows.</figcaption>
</figure>
```

A picture in a `wide` or a `full` block fills that block, so a small file is upscaled and goes soft. Export at twice the level you use: 2240px for wide, 2560px or more for full. Keep the `width` and `height` attributes at the real pixel size of the file anyway, they only set the shape of the box while the picture loads.

A table, full. The table itself stays Markdown. Leave a blank line after the opening tag and before the closing one, otherwise the table comes out as literal text:

```md
<figure class="full">

| Region | Instances | Commitment | Coverage |
|---|---|---|---|
| europe-west1 | 412 | 3 year | 78% |
| europe-west4 | 180 | 1 year | 64% |

<figcaption>What the table shows.</figcaption>
</figure>
```

Every table is wrapped in `div.table-wrap` on its own, so a table that is still too wide scrolls inside its own box and not on the page. That holds at all three levels.

An embed, standard, needs no wrapper at all; for the other two levels put the class on the `<iframe>`:

```html
<iframe class="wide" src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="What the embed shows"></iframe>
```

Any `<iframe>` fills its block and keeps a 16:9 box, so the 560x315 of a pasted snippet does not stick out on a phone. For another ratio, add `style="aspect-ratio: 4 / 3"`. Whether the browser loads a given embed at all is a separate question of the security policy, see Embeds below.

`src/content/writing/2026-10-12-width-levels-fixture.md` is a draft post with every level on a figure, a table and an embed. It never reaches production; open it on `pnpm dev` after changing post styles.

### Images

Put the file in `public/images/` and link it with a path that starts at the site root:

```md
![Short description of the picture](/images/diagram.png)
```

Files in `public/` are copied to the site as they are, so that path always works.

Do not use a path relative to the post file (`![...](./diagram.png)`). Astro then sends the picture through its image optimiser, which needs the `sharp` package this project does not install, and `pnpm build` fails with `MissingSharp`.

Markdown's `![]()` produces a plain `<img>` with no width or height, so the page shifts a little while the picture loads. For anything large, write the tag by hand with the real pixel size:

```html
<img src="/images/diagram.png" alt="Short description" width="960" height="540" />
```

Nothing is resized or converted automatically. For a `.webp` version and a sharp copy on retina screens, export the files yourself and use the same shape as the home page photo:

```html
<picture>
  <source srcset="/images/diagram.webp 1x, /images/diagram-2x.webp 2x" type="image/webp" />
  <img src="/images/diagram.png" alt="Short description" width="960" height="540" />
</picture>
```

Pictures shrink to the column on small screens on their own (`img, svg, video { max-width: 100% }` in `src/styles/global.css`), so a wide picture will not push the page sideways on a phone. The text column is 720px on a desktop and 350px on a 390px phone; exporting at twice the desktop width is enough.

### Charts and graphs

Paste the SVG straight into the Markdown body. It works, including a `<style>` block inside the `<svg>`, and it stays text: it scales, it stays sharp, and the colours can be edited later. This is the best option for a chart.

```md
Revenue per region:

<svg viewBox="0 0 600 200" role="img" aria-label="Revenue per region">
  <style>.bar { fill: #2f6f4f }</style>
  <rect class="bar" x="0" y="20" width="420" height="24" />
</svg>
```

A PNG export also works and follows the image rules above. Use it when the tool cannot give you SVG.

One restriction: this holds for `.md` only. In `.mdx` a `{` is code, so the `{ fill: ... }` inside a `<style>` block fails the build. Keep charts in plain `.md`.

### Embeds

YouTube works, one URL form only. Paste this into the post, with the video id after `/embed/`:

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="What the video shows"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

The host has to be `www.youtube-nocookie.com`, because `public/_headers` allows `frame-src https://www.youtube-nocookie.com` and nothing else. YouTube's own Share, Embed snippet uses `https://www.youtube.com/embed/...` and the browser refuses it with a CSP error in the console. Swap the host by hand; the video id and the rest of the snippet are the same. The nocookie host also sets no cookie before the viewer presses play.

Width and height attributes can stay or go, the embed is sized by the stylesheet either way. How wide it comes out is Three width levels above.

Still blocked, by design: Vimeo, CodePen, Google Sheets, every other iframe host. Script-based embeds (X posts, GitHub gists) too, because `script-src` allows only this site and the Cloudflare analytics beacon, and `object-src 'none'` closes `<object>` and `<embed>`. Each new host needs its own addition to the CSP, which is the owner's call.

An iframe pointing at your own HTML file in `public/` does not work either. Naming a host in `frame-src` drops the `'self'` that frames used to inherit from `default-src`. Putting `'self'` back would not help: `frame-ancestors 'none'` goes out on every path of this site, so the file refuses to be framed by the page embedding it. Both cases were tested in a browser.

What works without any of that: your own images and inline SVG, and a `data:` URI.

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
