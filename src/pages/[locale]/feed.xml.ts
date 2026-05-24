import { buildNewsRss } from '../../lib/rss';
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

  if (localeParam === 'en') {
    return Response.redirect(new URL('/feed.xml', siteConfig.url), 301);
  }

  return buildNewsRss(localeParam);
};
