import { articlePath, getNewsArticles, type NewsEntry } from './news';
import type { SiteLocale } from './locale';

export type SearchEntry = { title: string; href: string; excerpt: string };

function entryExcerpt(entry: NewsEntry): string {
  const description = entry.data.description?.trim();
  if (description) return description;
  return entry.body.slice(0, 120).replace(/\s+/g, ' ').trim();
}

export async function searchIndexForLocale(locale: SiteLocale): Promise<SearchEntry[]> {
  const articles = await getNewsArticles(locale);
  return articles.map((entry) => ({
    title: entry.data.title,
    href: articlePath(entry),
    excerpt: entryExcerpt(entry),
  }));
}
