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
  'hk',
  'tw',
  'ru',
  'ar',
  'tr',
  'pl',
  'nl',
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
  hk: '繁體中文（香港）',
  tw: '繁體中文（台灣）',
  ru: 'Русский',
  ar: 'العربية',
  tr: 'Türkçe',
  pl: 'Polski',
  nl: 'Nederlands',
};

export const DEFAULT_LOCALE: SiteLocale = 'en';

/** BCP 47 tags for `<html lang>`, hreflang, and Intl APIs. */
export const LOCALE_BCP47: Record<SiteLocale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  es: 'es',
  it: 'it',
  pt: 'pt',
  ro: 'ro',
  hk: 'zh-HK',
  tw: 'zh-TW',
  ru: 'ru',
  ar: 'ar',
  tr: 'tr',
  pl: 'pl',
  nl: 'nl',
};

export function htmlLang(locale: SiteLocale): string {
  return LOCALE_BCP47[locale];
}

export function hreflangCode(locale: SiteLocale): string {
  return LOCALE_BCP47[locale];
}

export function intlLocale(locale: SiteLocale): string {
  return LOCALE_BCP47[locale];
}

export function textDirection(locale: SiteLocale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export const INVALID_LOCALE_REDIRECT = '/';

export function isSiteLocale(value: string): value is SiteLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): SiteLocale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isSiteLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** Build a localized path; English has no locale prefix. */
export function localizedPath(locale: SiteLocale, ...segments: string[]): string {
  const parts = (locale === 'en' ? segments : [locale, ...segments]).filter(Boolean);
  return parts.length === 0 ? '/' : `/${parts.join('/')}/`;
}

export function localizedRssPath(locale: SiteLocale): string {
  return locale === 'en' ? '/feed.xml' : `/${locale}/feed.xml`;
}

export function stripLocalePrefix(pathname: string): { locale: SiteLocale; segments: string[] } {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isSiteLocale(segments[0])) {
    return { locale: segments[0], segments: segments.slice(1) };
  }
  return { locale: DEFAULT_LOCALE, segments };
}

export function localePath(locale: SiteLocale, path = ''): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return localizedPath(locale, ...normalized.split('/').filter(Boolean));
}

/** Build path like /product/kvm-go/ (en) or /zh/product/kvm-go/ */
export function withLocale(locale: SiteLocale, segments: string): string {
  const path = segments.startsWith('/') ? segments.slice(1) : segments;
  const parts = path.endsWith('/') ? path.slice(0, -1) : path;
  return localizedPath(locale, ...parts.split('/').filter(Boolean));
}

/** Swap locale while preserving path segments and query string. */
export function switchLocalePath(
  pathname: string,
  targetLocale: SiteLocale,
  search = '',
): string {
  const { segments } = stripLocalePrefix(pathname);
  const path = localizedPath(targetLocale, ...segments);
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
