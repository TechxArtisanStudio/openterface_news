import rss from '@astrojs/rss';
import { getNewsArticles, articlePath } from '../../lib/news';
import { siteConfig } from '../../config/site';
import { SUPPORTED_LOCALES, isSiteLocale } from '../../lib/locale';
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
  return SUPPORTED_LOCALES.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = async ({ params }) => {
  const localeParam = params.locale;
  if (!localeParam || !isSiteLocale(localeParam)) {
    return new Response('Not found', { status: 404 });
  }

  const articles = await getNewsArticles(localeParam);

  return rss({
    title: `Openterface News (${localeParam})`,
    description: siteConfig.description,
    site: siteConfig.url,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: new URL(articlePath(entry), siteConfig.url).href,
    })),
    customData: `<language>${localeParam}</language>`,
  });
};
