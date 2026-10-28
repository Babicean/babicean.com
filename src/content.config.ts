import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per project in src/content/projects/.
 * Frontmatter is validated at build time, so a missing field fails the build
 * instead of shipping a broken page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** Subtitle on the project's own page. */
    tagline: z.string(),
    /** The line under the title on the homepage. */
    summary: z.string(),
    year: z.number().int(),
    /** Shown on the homepage row, joined with middle dots. */
    platforms: z.array(z.string()).default([]),
    role: z.string(),
    /** Joined with middle dots on the project page. */
    stack: z.array(z.string()).default([]),
    status: z.string(),
    /** Lower numbers come first on the homepage. */
    order: z.number().default(100),
    /** true = not listed and no page built. Work in progress stays here. */
    draft: z.boolean().default(false),
    /** A built-in visual for the Screens row. */
    media: z.enum(['tally-screen']).optional(),
    mediaCaption: z.string().optional(),
    /** Rendered as the Links row; omitted when empty. */
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects };
