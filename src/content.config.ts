import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per project in src/content/projects/.
 * Frontmatter is validated at build time, so a missing field fails the build
 * instead of shipping a broken page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
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
    /**
     * Phone screenshots for the swipeable Screens row, in order. Paths are
     * relative to the project's Markdown file. Omit for no Screens row.
     */
    screens: z
      .array(z.object({ src: image(), caption: z.string(), alt: z.string() }))
      .default([]),
    /** Rendered as the Links row; omitted when empty. */
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

/**
 * The Reading row: every entry lives in one YAML file, shown by `order`.
 */
const reading = defineCollection({
  loader: file('./src/content/reading.yaml'),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    year: z.number().int(),
    url: z.string(),
    /** One line on why it's worth reading. Ideally in your own words. */
    summary: z.string(),
    order: z.number().default(100),
    /** true = kept in the file but not shown. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, reading };
