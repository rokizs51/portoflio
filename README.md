# Roki Zain S — personal site

A minimal portfolio + public learning log, in the spirit of
[mitchellh.com](https://mitchellh.com/). Built with [Astro](https://astro.build/):
static HTML, Markdown posts, one hand-written stylesheet. The only JavaScript is
the dark-mode toggle and soft page fades.

## Commands

```bash
npm run dev        # local dev server → http://localhost:4321
npm run build      # static site → dist/
npm run preview    # serve the production build locally
```

## Where things live

| I want to…                     | Edit…                                       |
| ------------------------------ | ------------------------------------------- |
| name, links, socials, tagline  | `src/data/site.ts`                          |
| rewrite the About page         | `src/pages/index.astro`                     |
| publish a post                 | new `.md` file in `src/content/writing/`    |
| change colors / typography     | `src/styles/global.css` (tokens at the top) |
| site-wide layout, footer icons | `src/components/Layout.astro`               |

Post front matter (validated by `src/content.config.ts`):

```md
---
title: "Post title"
description: "One-line summary — used in meta tags and RSS."
pubDate: 2026-10-14
updatedDate: 2026-10-20   # optional
draft: true               # optional; drafts are hidden from production builds
---
```

## Before deploying — TODO checklist

1. `src/data/site.ts` → set `url` to your real domain (canonical links, RSS, sitemap, OG).
2. `src/data/site.ts` → replace placeholder `email` / `x` / `github` / `linkedin`
   with real links (set any key to `null` to hide its footer icon).
3. `src/pages/index.astro` → replace the `TODO`-marked bio lines.
4. `public/robots.txt` → update the Sitemap URL.
5. `src/content/writing/` → keep or delete the two starter posts.

## Deploying

Any static host works — the build output is the `dist/` folder.

- **Cloudflare Pages** — build command `npm run build`, output directory `dist`.
- **Netlify / Vercel** — framework preset "Astro", everything else auto-detected.
- **GitHub Pages** — use Astro's official GitHub Action template
  ([Deploy to GitHub Pages](https://docs.astro.build/en/recipes/deploy/#deploying-to-github-pages))
  and set `site.url` to your Pages URL.

## Notes on behavior

- **Dark mode** follows your OS by default; the sun/moon button (top right)
  overrides it per-browser via `localStorage`.
- **RSS** lives at `/rss.xml` and is auto-discoverable from every page.
- **Sitemap** is generated at `/sitemap.xml` on each build.
