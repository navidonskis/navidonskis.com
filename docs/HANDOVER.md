# Handover notes (2026-10-10)

Update 2026-10-10: branch astro-rebuild was renamed to next and is now the default branch; master is locked. Read CLAUDE.md for current branch rules.

## Where things are

- Repo: `/Users/donnav/navidonskis.com/navidonskis.com`, GitHub `navidonskis/navidonskis.com`.
- Branch `next` holds the new site, 8 commits on top of `master`, pushed to origin. `master` still holds the old webpack site and is what GitHub Pages serves today. Nothing is live from the new site yet.
- `/Users/donnav/navidonskis.com/navidonskis-astro` is the standalone directory the site was first built in. It is redundant now (identical content, own `.git`, no remote). Do not work there. Donatas may delete it.
- The old webpack `node_modules` was moved, not deleted, into a session scratchpad directory. It can be forgotten.
- `worker/.wrangler/` is an untracked cache leftover from the old Cloudflare worker. Harmless. Do not delete without asking.
- Original handoff material (spec, design mocks, sample post) came from `~/Downloads/navidonskis-handoff/`. Copies are in the repo.

## State of the work

All six tasks from `SPEC.md` section 11 are done and accepted:

1. Scaffold: Astro 7.3.8, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`, `@astrojs/markdown-satteri`. pnpm, Node 24 (`.nvmrc`).
2. Home page per `design/home-launch.html` (now v3 plus owner edits, see below).
3. Content collection, post layout, writing index, RSS, 404.
4. SEO component, JSON-LD (Person on home, Article on posts), OG image, robots, sitemap.
5. Cloudflare Pages files (`public/_headers`, `public/_redirects`), README with deploy steps.
6. QA: Lighthouse 100/100/100/100 on home and post, mobile and desktop. HTML valid except the `long-title` rule (the home title is spec-mandated, ignore). No broken internal links. `design/` absent from `dist/`.

Published content: one post, `src/content/writing/2026-10-09-cuds-on-gcp-a-decision-framework.md` (URL `/writing/cuds-on-gcp-a-decision-framework/`). Two drafts: the handoff sample (`2026-10-20-gcloud-session-expires-every-16-hours.md`, an outline) and `2026-11-03-gitlab-hosted-runners-vs-your-own-on-gcp.md`, which I wrote from the mock copy to test the post layout. Donatas may delete or rewrite the GitLab one.

Owner settings in `src/site.config.ts`: booking link `https://cal.com/navidonskis/30min` and email are real and set by Donatas. `github` and `linkedin` URLs were my guesses; confirm them with him before launch.

## Still open, owner side

- Create the Cloudflare Pages project, connect the repo, custom domain, optional `PUBLIC_CF_ANALYTICS_TOKEN`. Steps are in `README.md`. Do not touch Cloudflare or DNS yourself.
- Merge `next` to `master` and retire GitHub Pages (CNAME was removed on the branch).
- Decide what happens to the 2019 blog post and the old Cloudflare worker that only exist on `master`.
- Nothing is placeholder on the home page any more. `[email address]` and `[photo]` from the mock are filled with real values.

## Decisions that are not obvious from the code

- Fonts: SPEC says Google Fonts via `<link>`. That cost 8 Lighthouse points on mobile (render-blocking third-party CSS), so fonts now go through Astro's built-in fonts API with the Google provider: fetched at build time, served from `/_astro/fonts/`, metric-matched fallbacks generated. Config in `astro.config.mjs`, `<Font>` components in `src/layouts/Base.astro` (Sans, Condensed) and `src/layouts/Post.astro` (Mono, head slot). Tokens reference the generated `--font-plex-*` variables with the SPEC stacks as fallback.
- Markdown: Astro 7 defaults to the Sätteri processor; rehype plugins need an extra package. The only plugin is `src/lib/table-wrap.mjs` (wraps tables in `.table-wrap` so they scroll inside their container). `@astrojs/markdown-satteri` is a direct dependency only so that file can import `satteri()`.
- Container width: the mocks use content-box, so `max-width: 1120px` plus `32px` padding means 1120px of content. Our reset is border-box, so `.container` and `.post` use `calc(var(--container) + 2 * var(--gutter))`. Keep that or 1280px layouts drift 64px.
- `build.inlineStylesheets: 'never'` keeps CSS in files. The CSP in `public/_headers` still has `style-src 'unsafe-inline'` because the `<Font>` component emits an inline `<style>` and Shiki emits `style` attributes. `script-src` is strict.
- `site.config.ts` has two descriptions: `homeDescription` (home meta description, trimmed hero lead) and `description` (default for other pages, RSS channel, JSON-LD). SPEC section 9 of the v3 change list asked for JSON-LD to stay unchanged, hence the split.
- Post slugs drop the date prefix via `generateId` in `src/content.config.ts`. Drafts are filtered with `import.meta.env.PROD` in `src/lib/posts.ts`, so `pnpm dev` shows them and `pnpm build` does not.
- Reading time is computed in `src/lib/posts.ts` at 220 wpm, never stored.
- Trailing slashes are enforced (`trailingSlash: 'always'`, `build.format: 'directory'`).
- `astro check` was dropped from `package.json` because it needs extra dependencies SPEC does not allow.
- The OG image is generated by `scripts/og-image.py` with Arial Narrow Bold (the display font's fallback), not IBM Plex, so it can be regenerated on any Mac without installing fonts.
- Avatar: `public/images/donatas-{160,320}.{jpg,webp}`, black and white, supplied by Donatas already in B/W. The earlier crop script run in the session is not saved; if a new photo arrives, resize to 160 and 320 square with PIL and overwrite the four files. Markup is in `src/pages/index.astro` (`<picture>`).

## Copy rules and the design reference

- `design/home-launch.html` is v3 from Donatas. Copy on the site is verbatim from it with these owner-requested exceptions that are newer than v3 and must be kept:
  - About bullets: "15+ years of software engineering, the last 9+ running a multi-project Google Cloud organisation.", "Leading the re-architecture of that Google Cloud setup so it is secure by default, governed, easy to reason about and self-service for every team in the company.", "Started the SRE function...", "Migrated infrastructure from bare metal (Rackspace) to Google Cloud."
  - Hero lead includes "Whether you are on Google Cloud or about to move there, ...".
  - Architecture column includes "or whether and how to move to Google Cloud at all."
  - The design file carries the hero and column edits but still has the older About bullets with `[N]`. Donatas said that is fine; do not "fix" either side.
- When Donatas changes copy, apply it to both `src/pages/index.astro` and `design/home-launch.html` unless he says otherwise. He checks diffs of both.
- No services or pricing section, no NDA, paperwork, availability or day-job mentions on the home page. No em dashes anywhere. Keep `[bracketed]` placeholders if any appear in new copy.
- `design/post.html` is the post reference. Its header shows a future "Services" nav; the real header is the launch one. `design/home-with-services-later.html` is the future services page, reference only.
- There is also a packed export at `~/Downloads/navidonskis.com redesign.html` (three artboards in a gzip+base64 bundle). It was superseded by v3 before I finished comparing it. Ignore unless Donatas points at it again; the unpacker I wrote lives only in the session scratchpad.

## How Donatas works

- Direct, short messages, often Lithuanian. Reply in Lithuanian when he writes Lithuanian. Keep reports short, lead with the result.
- Task by task. After a change: run `pnpm build` (must be zero warnings), check 390px and 1280px, show the diff, stop. He says "ok" or gives corrections.
- Never commit or push without an explicit go-ahead. When he does say commit: conventional commits, grouped by concern, no `Signed-off-by`, no `Co-Authored-By`, no trailers of any kind. He had these stripped once already.
- Nothing goes live without him: no DNS, no Cloudflare dashboard, no merge to master.
- He adds blog posts as Markdown files from Google Docs. Expected handling: write frontmatter (`title`, `description` up to 200 chars that does not repeat the first paragraph, `pubDate`, `tags`, `cta`), strip the H1 and the "date · @Donatas" line, keep the body verbatim. Default `cta: talk`; `finops` and `gitlab` mention audits, which do not match the no-pitch launch tone.

## Verifying layout against the mock

The mocks are plain HTML with inline styles. To measure them in the built-in browser they must be served over http (file URLs are not scriptable):

```bash
cd design && python3 -m http.server 4399 --bind 127.0.0.1
```

Then compare element positions at a 1280px viewport between `http://127.0.0.1:4399/home-launch.html` and `http://localhost:4321/`. Positions should match to the pixel down to the Writing section; below it they drift only because real post descriptions are longer than the mock's placeholder rows. At 390px check `document.documentElement.scrollWidth === 390` and that `.grid-3`, `.steps` and `.about` stack.

Dev server: `pnpm dev --port 4321`. Astro 7 runs it as a daemon; after config changes it sometimes needs `pnpm exec astro dev stop` and a restart. `.claude/launch.json` has an `astro-dev` entry for the browser pane.

## QA commands used

CI runs the build, HTML, link and format checks on every pull request into `next` and on every push to `next`: `.github/workflows/ci.yml`, one job named `ci`. It uploads `dist/` as a workflow artifact named `dist`, kept 7 days, so a reviewer downloads that instead of building the site. Lighthouse stays manual. Tooling is pinned and never added to `package.json`.

- Lighthouse: `pnpm preview --port 4322`, then `CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" pnpm dlx lighthouse <url> --preset=desktop --chrome-flags="--headless=new" --output=json --only-categories=performance,accessibility,best-practices,seo`. Drop `--preset=desktop` for mobile. To test a post page in a production build, temporarily set `draft: false` on a draft and restore it afterwards; the only published post works as is now.
- Build: `pnpm build`. CI pipes the output through `tee` and fails the step if it contains `warn`, so a warning is as fatal as a non-zero exit.
- HTML: `pnpm dlx html-validate@11.16.2 "dist/**/*.html"`. Settings live in `.htmlvalidate.json`: `html-validate:recommended` with `long-title` off (the home and post titles are spec-mandated) and `no-inline-style` off (Shiki writes `style` attributes on highlighted code, the same reason the CSP keeps `style-src 'unsafe-inline'`).
- Links: `python3 scripts/check-links.py` over `dist/`. Every internal `href` and `src` must resolve to a file in `dist/` or an `id` on the target page; external URLs and other schemes are skipped. Standard library only.
- Format: prettier 3.9.10 with `prettier-plugin-astro` 1.1.1 over `src/**/*.{astro,ts,js,mjs,css}` and `public/**/*.{css,js}`. Posts in `src/content/writing/` are never formatted. `.prettierrc` is 100 columns, single quotes, 2 spaces, which is what the TypeScript, CSS and JS already were; the `.astro` templates needed one reformat, done in its own commit. `pnpm dlx` installs the plugin, but prettier resolves plugin names from the repository, so pass it by path out of the dlx install. Swap `--check` for `--write` to fix:

```bash
pnpm dlx --package=prettier@3.9.10 --package=prettier-plugin-astro@1.1.1 --shell-mode '
  plugin="$(dirname "$(command -v prettier)")/../prettier-plugin-astro/dist/index.js"
  prettier --check --plugin="$plugin" \
    "src/**/*.{astro,ts,js,mjs,css}" "public/**/*.{css,js}"
'
```

Run it from the repository root so the globs and `.prettierrc` resolve the way CI resolves them.

## Repo map

```
design/                 mocks, never published
public/                 favicon.svg, og-default.png, images/, robots.txt, _headers, _redirects
scripts/og-image.py     regenerates the OG image
src/content.config.ts   'writing' collection, schema, slug rule
src/content/writing/    posts, YYYY-MM-DD-slug.md
src/lib/posts.ts        getPosts (draft filter, sort), postUrl, readingTime, formatDate
src/lib/table-wrap.mjs  Sätteri hast plugin
src/styles/tokens.css   all design tokens, responsive overrides
src/styles/global.css   reset, type, buttons, chips, rows, cards, skip link
src/layouts/Base.astro  html shell, Seo, fonts, analytics beacon, skip link
src/layouts/Post.astro  post page, CTA variants, Article JSON-LD, body styles
src/components/         Header, Footer, ContactBand, PostList, Seo
src/pages/              index, writing/index, writing/[slug], rss.xml.ts, 404
src/site.config.ts      owner settings and metadata
```
