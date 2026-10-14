// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, OpenGraph links, the RSS feed, and the sitemap.
  // TODO: point `site.url` at your real domain in src/data/site.ts before deploying.
  site: site.url,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      // Dual themes so code blocks follow the light/dark switch.
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
    },
  },
});
