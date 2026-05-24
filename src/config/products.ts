import type { SiteLocale } from './locale';

export const PRODUCTS = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export type ProductSlug = (typeof PRODUCTS)[number];

export const PRODUCT_LABELS: Record<ProductSlug, string> = {
  keymod: 'KeyMod',
  'kvm-go': 'KVM-GO',
  minikvm: 'Mini-KVM',
  'uconsole-kvm-extension': 'uConsole KVM',
  accessories: 'Accessories',
};

export const TOPICS = [
  'shipping',
  'production',
  'beta',
  'software',
  'campaign',
  'event',
  'community',
  'analysis',
] as const;

export type TopicSlug = (typeof TOPICS)[number];

export const TOPIC_LABELS: Record<TopicSlug, string> = {
  shipping: 'Shipping',
  production: 'Production',
  beta: 'Beta',
  software: 'Software',
  campaign: 'Campaign',
  event: 'Event',
  community: 'Community',
  analysis: 'Analysis',
};

/** Marketing subdomain hosts (locale code ≠ subdomain for ja/ko/zh). */
const MARKETING_HOST_BY_LOCALE: Record<SiteLocale, string> = {
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
};

export function marketingProductUrl(locale: SiteLocale, product: ProductSlug): string {
  return `${MARKETING_HOST_BY_LOCALE[locale]}/products/${product}/`;
}

export function docsBaseUrl(): string {
  return 'https://docs.openterface.com';
}

export function docsProductUrl(locale: SiteLocale, product: ProductSlug): string {
  return `${docsBaseUrl()}/${locale}/product/${product}/`;
}

export function forumUrl(): string {
  return 'https://forum.openterface.com';
}

export function crowdSupplyUrl(product: ProductSlug): string {
  const urls: Partial<Record<ProductSlug, string>> = {
    keymod: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    'kvm-go': 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    minikvm: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
  };
  return urls[product] ?? 'https://www.crowdsupply.com/techxartisan';
}
