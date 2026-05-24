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
        page !== 'https://news.openterface.com/' &&
        !page.endsWith('/feed.xml'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
