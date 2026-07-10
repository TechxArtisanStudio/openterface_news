import { localizedPath, type SiteLocale } from './locale';

/** Redirect legacy channel hub URLs to the home feed (optionally with filter query params). */
export function homeFeedRedirect(
  locale: SiteLocale,
  search: URLSearchParams | string = '',
  extra: Record<string, string | null | undefined> = {},
): string {
  const params =
    typeof search === 'string'
      ? new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
      : new URLSearchParams(search);

  for (const [key, value] of Object.entries(extra)) {
    if (value) params.set(key, value);
  }

  const base = localizedPath(locale);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}
