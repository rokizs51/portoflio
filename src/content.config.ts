import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Everything published under /writing/.
 * Drop a Markdown file into src/content/writing/ with frontmatter
 * matching this schema and it shows up automatically.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    /** One-line summary. Used in meta tags and the RSS feed. */
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Drafts are hidden from production builds but visible in `astro dev`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
