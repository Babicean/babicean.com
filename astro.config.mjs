// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSections from './src/lib/rehype-sections.mjs';

export default defineConfig({
  site: 'https://babicean.com',
  build: {
    // Keep every stylesheet as an external file so the Content-Security-Policy
    // can stay at style-src 'self' with no 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  markdown: {
    // Turns each "## Heading" in a project file into a label-column row.
    rehypePlugins: [rehypeSections],
  },
});
