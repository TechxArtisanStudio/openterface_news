import { articlePath, getRankedArticle } from './news';
import { INVALID_LOCALE_REDIRECT, isSiteLocale, localizedPath, type SiteLocale } from './locale';
import { siteConfig } from '../config/site';

/** HTML redirect stub (GitHub Pages) with query-string preservation for UTMs. */
export function latestRedirectHtml(targetPath: string): string {
  const canonical = new URL(targetPath, siteConfig.url).href;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=${targetPath}">
  <meta name="robots" content="noindex, nofollow">
  <link rel="canonical" href="${canonical}">
  <title>Redirecting…</title>
  <script>
    (function () {
      var target = ${JSON.stringify(targetPath)};
      var q = location.search;
      location.replace(q ? target + q : target);
    })();
  </script>
</head>
<body><p><a href="${targetPath}">Continue to article</a></p></body>
</html>
`;
}

export function parseRankParam(value: string | undefined): number | null {
  if (!value) return 1;
  const n = Number.parseInt(value, 10);
  if (!Number.isInteger(n) || n < 2) return null;
  return n;
}

export function resolveLocaleParam(localeParam: string | undefined): SiteLocale | 'redirect-en' | null {
  if (!localeParam || !isSiteLocale(localeParam)) return null;
  if (localeParam === 'en') return 'redirect-en';
  return localeParam;
}

export function enLatestCanonicalPath(rank: number): string {
  return rank === 1 ? localizedPath('en', 'latest') : localizedPath('en', 'latest', String(rank));
}
