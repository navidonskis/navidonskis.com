# navidonskis.com

Personal site of Donatas Navidonskis: writing first, consulting later. Static Astro site deployed on Cloudflare Pages.

Read `SPEC.md` before doing anything. It holds the goal, the design tokens, the page structure, the content schema and the task order. `design/` holds the approved mock as plain HTML (source of truth for layout, spacing, colors and copy) and, if present, PNG screenshots of it.

## Stack

- Astro (latest stable), content collections, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`
- Plain CSS with custom properties. No Tailwind, no UI framework, no client-side JS on the home page.
- pnpm. Node LTS.
- Deploy target: Cloudflare Pages, build `pnpm build`, output `dist/`.

## Commands

- `pnpm dev` local server
- `pnpm build` production build (must pass with zero warnings before any commit)
- `pnpm preview` serve the build

## Rules

- Copy in `design/*.html` is final. Do not reword it. Leave every `[bracketed placeholder]` exactly as it is; the owner fills them in.
- Any copy you do write (alt text, 404 page, meta descriptions): direct, short, no filler, no em dashes (use commas or full stops), no buzzwords, no emojis.
- Do not add dependencies beyond the ones in SPEC.md without saying why first.
- Do not commit or push without an explicit go-ahead. Show the diff summary, then wait.
- Do not create a services or pricing section. It is deliberately out of scope for launch.
- Do not touch DNS, Cloudflare dashboard settings or anything outside this repo. Produce config files and instructions instead.
- Keep `design/` out of the published site (it must not land in `dist/` or `public/`).
- Work task by task in the order given in SPEC.md. Finish a task, run the build, report, then continue.
