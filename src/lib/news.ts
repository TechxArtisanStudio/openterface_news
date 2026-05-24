import { getCollection, type CollectionEntry } from 'astro:content';
import { localizedPath, type SiteLocale } from './locale';
import type { ProductSlug } from '../config/products';

export type NewsEntry = CollectionEntry<'news'>;

export function articlePath(entry: NewsEntry): string {
  const { locale, channel, product, slug, eventType } = entry.data;
  if (channel === 'product' && product) {
    return localizedPath(locale, 'product', product, slug);
  }
  if (channel === 'software') {
    return localizedPath(locale, 'software', slug);
  }
  if (channel === 'events' && eventType) {
    return localizedPath(locale, 'events', eventType, slug);
  }
  return localizedPath(locale);
}

export async function getNewsArticles(locale: SiteLocale, includeDrafts = false): Promise<NewsEntry[]> {
  const all = await getCollection('news', ({ data }) => {
    if (data.locale !== locale) return false;
    if (!includeDrafts && data.draft) return false;
    return true;
  });
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProductArticles(
  locale: SiteLocale,
  product: ProductSlug,
): Promise<NewsEntry[]> {
  const articles = await getNewsArticles(locale);
  return articles.filter((a) => a.data.channel === 'product' && a.data.product === product);
}

export function filterByTopic(articles: NewsEntry[], topic: string | null): NewsEntry[] {
  if (!topic) return articles;
  return articles.filter((a) => a.data.topic.includes(topic));
}

export function filterByProduct(articles: NewsEntry[], product: string | null): NewsEntry[] {
  if (!product) return articles;
  return articles.filter((a) => a.data.product === product);
}

export function formatArticleDate(date: Date, locale: SiteLocale): string {
  return date.toLocaleDateString(locale === 'zh' ? 'zh-CN' : locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getAdjacentArticles(
  articles: NewsEntry[],
  current: NewsEntry,
): { prev: NewsEntry | null; next: NewsEntry | null } {
  const index = articles.findIndex((a) => a.id === current.id);
  return {
    prev: index > 0 ? articles[index - 1]! : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1]! : null,
  };
}

export async function getTranslationAlternates(
  translationKey: string,
): Promise<{ locale: SiteLocale; path: string }[]> {
  const all = await getCollection('news', ({ data }) => data.translationKey === translationKey && !data.draft);
  return all.map((entry) => ({
    locale: entry.data.locale,
    path: articlePath(entry),
  }));
}
