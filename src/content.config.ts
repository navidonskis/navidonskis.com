import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

const writing = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/writing',
    // 2026-10-20-kebab-title.md -> kebab-title
    generateId: ({ entry }) =>
      entry
        .replace(/\.(md|mdx)$/, '')
        .split('/')
        .map((part) => part.replace(DATE_PREFIX, ''))
        .join('/'),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cta: z.enum(['none', 'talk', 'finops', 'gitlab']).default('talk'),
  }),
});

export const collections = { writing };
