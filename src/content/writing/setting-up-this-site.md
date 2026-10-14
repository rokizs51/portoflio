---
title: "Setting Up This Site"
description: "The stack behind this page, and why each piece earns its spot."
pubDate: 2026-10-10
---

This site is deliberately boring, which is the highest compliment I can pay
infrastructure. Here's everything in it and why:

- **[Astro](https://astro.build/)** builds plain static HTML. No framework
  runtime ships to the browser; the only JavaScript on any page is the
  dark-mode toggle and a soft page fade.
- **Markdown content collections.** Every post is a `.md` file with a few lines
  of front matter:

  ```md
  ---
  title: "Setting Up This Site"
  description: "One line, reused in lists, meta tags, and RSS."
  pubDate: 2026-10-10
  ---
  ```

  Writing a post is `git push` away, which is the only publishing pipeline
  worth having when the alternative is an excuse.
- **One hand-written stylesheet.** Design tokens at the top, `light-dark()`
  for the color scheme, system fonts, no frameworks.
- **RSS**, because owning your own feed is the oldest feature on the web that
  still actually works.

> The best interface is the one you stop noticing. Same goes for the stack
> underneath it.

If reading this page felt like reading any clean blog post — mission accomplished.
