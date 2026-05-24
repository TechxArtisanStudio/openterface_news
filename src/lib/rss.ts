import rss from '@astrojs/rss';
import { getNewsArticles, articlePath } from '../lib/news';
import { siteConfig } from '../config/site';
import type { SiteLocale } from '../lib/locale';

export async function buildNewsRss(locale: SiteLocale) {
  const articles = await getNewsArticles(locale);

  return rss({
    title: `Openterface News (${locale})`,
    description: siteConfig.description,
    site: siteConfig.url,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: new URL(articlePath(entry), siteConfig.url).href,
    })),
    customData: `<language>${locale}</language>`,
  });
}
