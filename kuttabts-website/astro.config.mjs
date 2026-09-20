import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Static output: this is a public content site with no per-request data.
export default defineConfig({
  site: 'https://kuttabts.sch.id',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: {
    // Only the school's own assets are processed; no remote image sources.
    domains: [],
  },
  build: {
    format: 'directory',
  },
});
