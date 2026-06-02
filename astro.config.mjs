// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://news.openterface.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/en/') &&
        !page.includes('/latest/') &&
        !page.includes('/newest/') &&
        !page.endsWith('/feed.xml'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
