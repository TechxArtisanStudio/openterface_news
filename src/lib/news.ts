import { getCollection, type CollectionEntry } from 'astro:content';
import { intlLocale, localizedPath, type SiteLocale } from './locale';
import type { ProductSlug } from '../config/products';

export type NewsEntry = CollectionEntry<'news'>;

/** Max site-wide rank aliases per locale (/latest/, /latest/2/, …). */
export const MAX_RANK_ALIAS = 10;

export function compareNewsEntries(a: NewsEntry, b: NewsEntry): number {
  const dateDiff = b.data.date.getTime() - a.data.date.getTime();
  if (dateDiff !== 0) return dateDiff;
  return a.data.slug.localeCompare(b.data.slug);
}

export function sortNewsEntries(articles: NewsEntry[]): NewsEntry[] {
  return [...articles].sort(compareNewsEntries);
}

export function articlePath(entry: NewsEntry): string {
  const { locale, channel, product, slug, eventType } = entry.data;
  if (channel === 'product' && product) {
    return localizedPath(locale, 'product', product, slug);
  }
  if (channel === 'software') {
    return localizedPath(locale, 'apps', slug);
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
  return sortNewsEntries(all);
}

/** 1-based rank (1 = newest). Returns null if out of range or no articles. */
export async function getRankedArticle(
  locale: SiteLocale,
  rank: number,
  includeDrafts = false,
): Promise<NewsEntry | null> {
  if (!Number.isInteger(rank) || rank < 1 || rank > MAX_RANK_ALIAS) return null;
  const articles = await getNewsArticles(locale, includeDrafts);
  return articles[rank - 1] ?? null;
}

/** Static paths for /latest/[rank]/ (ranks 2..N only). */
export async function getLatestRankParamPaths(locale: SiteLocale): Promise<{ rank: string }[]> {
  const articles = await getNewsArticles(locale);
  const max = Math.min(articles.length, MAX_RANK_ALIAS);
  if (max < 2) return [];
  return Array.from({ length: max - 1 }, (_, i) => ({ rank: String(i + 2) }));
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
  return date.toLocaleDateString(intlLocale(locale), {
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
