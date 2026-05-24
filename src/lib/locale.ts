export const SUPPORTED_LOCALES = [
  'en',
  'zh',
  'ja',
  'ko',
  'de',
  'fr',
  'es',
  'it',
  'pt',
  'ro',
] as const;

export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<SiteLocale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ro: 'Română',
};

export const DEFAULT_LOCALE: SiteLocale = 'en';

export function isSiteLocale(value: string): value is SiteLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): SiteLocale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isSiteLocale(segment) ? segment : DEFAULT_LOCALE;
}

export function localePath(locale: SiteLocale, path = ''): string {
  const normalized = path.startsWith('/') ? path : path ? `/${path}` : '';
  return `/${locale}${normalized}${normalized && !normalized.endsWith('/') ? '/' : normalized === '' ? '/' : ''}`;
}

/** Build path like /en/product/kvm-go/ */
export function withLocale(locale: SiteLocale, segments: string): string {
  const path = segments.startsWith('/') ? segments : `/${segments}`;
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  return `/${locale}${withSlash}`;
}

/** Swap locale segment while preserving path and query string. */
export function switchLocalePath(
  pathname: string,
  targetLocale: SiteLocale,
  search = '',
): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isSiteLocale(segments[0]!)) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  const trailing = pathname.endsWith('/') || pathname === '' ? '/' : '';
  const path = `/${segments.join('/')}${trailing}`;
  if (!search) return path;
  return `${path}${search.startsWith('?') ? search : `?${search}`}`;
}

/** hreflang alternates for feed/channel pages (same path, different locale prefix). */
export function getLocaleAlternatesForPath(
  pathname: string,
): { locale: SiteLocale; path: string }[] {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    path: switchLocalePath(pathname, locale),
  }));
}
