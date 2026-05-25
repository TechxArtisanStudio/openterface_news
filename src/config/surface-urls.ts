import type { SiteLocale } from './locale';

const PROD_DOCS = 'https://docs.openterface.com';

const PROD_MARKETING: Record<SiteLocale, string> = {
  en: 'https://en.openterface.com',
  de: 'https://de.openterface.com',
  es: 'https://es.openterface.com',
  fr: 'https://fr.openterface.com',
  it: 'https://it.openterface.com',
  ja: 'https://jp.openterface.com',
  ko: 'https://kr.openterface.com',
  pt: 'https://pt.openterface.com',
  ro: 'https://ro.openterface.com',
  zh: 'https://cn.openterface.com',
  hk: 'https://hk.openterface.com',
  tw: 'https://tw.openterface.com',
};

/** Dev marketing host from env (Vite requires static import.meta.env references). */
const DEV_MARKETING: Partial<Record<SiteLocale, string | undefined>> = {
  en: import.meta.env.PUBLIC_OP_DEV_MARKETING_EN,
  de: import.meta.env.PUBLIC_OP_DEV_MARKETING_DE,
  es: import.meta.env.PUBLIC_OP_DEV_MARKETING_ES,
  fr: import.meta.env.PUBLIC_OP_DEV_MARKETING_FR,
  it: import.meta.env.PUBLIC_OP_DEV_MARKETING_IT,
  ja: import.meta.env.PUBLIC_OP_DEV_MARKETING_JA,
  ko: import.meta.env.PUBLIC_OP_DEV_MARKETING_KO,
  pt: import.meta.env.PUBLIC_OP_DEV_MARKETING_PT,
  ro: import.meta.env.PUBLIC_OP_DEV_MARKETING_RO,
  hk: import.meta.env.PUBLIC_OP_DEV_MARKETING_HK,
  tw: import.meta.env.PUBLIC_OP_DEV_MARKETING_TW,
  zh: import.meta.env.PUBLIC_OP_DEV_MARKETING_ZH,
};

export function surfaceDocsBase(): string {
  return import.meta.env.PUBLIC_OP_DEV_DOCS || PROD_DOCS;
}

export function surfaceNewsBase(): string {
  return import.meta.env.PUBLIC_OP_DEV_NEWS || 'https://news.openterface.com';
}

export function surfaceMarketingHost(locale: SiteLocale): string {
  return DEV_MARKETING[locale] || PROD_MARKETING[locale];
}

export function surfaceMarketingHosts(): Record<SiteLocale, string> {
  const hosts = { ...PROD_MARKETING };
  for (const locale of Object.keys(DEV_MARKETING) as SiteLocale[]) {
    const dev = DEV_MARKETING[locale];
    if (dev) hosts[locale] = dev;
  }
  return hosts;
}
