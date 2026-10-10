# navidonskis.com

Personal site of Donatas Navidonskis. Astro 7, pnpm, Node 22 (`.nvmrc`). Read `SPEC.md` and `docs/HANDOVER.md` after this file.

## Branches and what is live

- `master` is the OLD webpack site, served live by GitHub Pages. It is locked by a ruleset: nothing may be pushed, merged or targeted there. Never open a pull request against `master`.
- `next` is the new Astro site, the default branch, and the base for all work. Branch from `next`, open pull requests into `next`. Passing `--base next` to `gh pr create` is still good practice.
- This arrangement is temporary. When the owner announces the cutover, `next` will be merged into `master` and this section will be rewritten. Until that announcement, assume nothing has changed.
- Nothing goes live without the owner: no merges, no DNS, no Cloudflare dashboard, no GitHub Pages settings.

## Workflow

- One issue, one branch (`feat/...`, `fix/...`, `content/...`, `docs/...`), one pull request into `next`.
- After a change: `pnpm build` with zero warnings, check 390px and 1280px for layout changes, show the diff, stop. Wait for "ok" or corrections.
- Never commit or push without an explicit go-ahead. Conventional commits, grouped by concern. No trailers of any kind: no `Signed-off-by`, no `Co-Authored-By`.
- The owner writes in Lithuanian or English; reply in the language of the issue. Reports short, result first.

## Copy rules

- `design/home-launch.html` is the v3 reference. Site copy is verbatim from it, except the owner edits listed in `docs/HANDOVER.md` (About bullets, hero lead, architecture column). Keep both sides as they are; do not "fix" either.
- When the owner changes copy, apply it to `src/pages/index.astro` and `design/home-launch.html` both, unless told otherwise.
- No services, pricing, NDA, paperwork, availability or day-job mentions on the home page. No em dashes anywhere. Keep `[bracketed]` placeholders if any appear.

## Blog posts

Posts arrive as Markdown from Google Docs. Add frontmatter (`title`, `description` up to 200 characters that does not repeat the first paragraph, `pubDate`, `tags`, `cta`), strip the H1 and the "date · @Donatas" line, keep the body verbatim. Default `cta: talk`. File name `YYYY-MM-DD-slug.md` in `src/content/writing/`; the date prefix is dropped from the URL. `draft: true` until the owner says publish.

## Technical decisions to respect

- Fonts go through Astro's fonts API (Google provider, build time), not a `<link>`. Config in `astro.config.mjs`, `<Font>` in `Base.astro` and `Post.astro`.
- Markdown uses the Sätteri processor; the only plugin is `src/lib/table-wrap.mjs`.
- `.container` and `.post` widths use `calc(var(--container) + 2 * var(--gutter))`. Changing that drifts 1280px layouts by 64px.
- `build.inlineStylesheets: 'never'`; the CSP in `public/_headers` keeps `style-src 'unsafe-inline'` for the Font component and Shiki, `script-src` stays strict.
- Trailing slashes always, directory build format, drafts filtered by `import.meta.env.PROD`, reading time computed at 220 wpm.
- Do not add dependencies beyond SPEC.md without saying why first. `astro check` is intentionally not in `package.json`.

## Verification

- `pnpm dev --port 4321`; after config changes `pnpm exec astro dev stop` and restart.
- Layout against the mock: serve `design/` with `python3 -m http.server 4399 --bind 127.0.0.1` and compare at 1280px; details in `docs/HANDOVER.md`.
- Lighthouse, html-validate and the link walk: commands in `docs/HANDOVER.md`. Expect only the `long-title` rule to fire.
