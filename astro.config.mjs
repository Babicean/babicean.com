// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeSections from './src/lib/rehype-sections.mjs';

export default defineConfig({
  site: 'https://babicean.com',
  build: {
    // Keep every stylesheet as an external file so the Content-Security-Policy
    // can stay at style-src 'self' with no 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Never inline scripts either: they must load as files to satisfy
      // script-src 'self'.
      assetsInlineLimit: 0,
    },
  },
  markdown: {
    // Turns each "## Heading" in a project file into a label-column row.
    processor: unified({ rehypePlugins: [rehypeSections] }),
  },
});
