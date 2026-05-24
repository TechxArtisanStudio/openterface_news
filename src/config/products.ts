import type { SiteLocale } from './locale';
import { surfaceDocsBase, surfaceMarketingHosts } from './surface-urls';

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
const MARKETING_HOST_BY_LOCALE: Record<SiteLocale, string> = surfaceMarketingHosts();

export function marketingProductUrl(locale: SiteLocale, product: ProductSlug): string {
  return `${MARKETING_HOST_BY_LOCALE[locale]}/products/${product}/`;
}

export function marketingHomeUrl(locale: SiteLocale): string {
  return `${MARKETING_HOST_BY_LOCALE[locale]}/`;
}

export function docsBaseUrl(): string {
  return surfaceDocsBase();
}

export function docsPath(locale: SiteLocale, subpath = ''): string {
  const normalized = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  const suffix = normalized && !normalized.endsWith('/') ? `${normalized}/` : normalized || '/';
  const base = docsBaseUrl();
  if (locale === 'en') {
    return suffix === '/' ? `${base}/` : `${base}${suffix}`;
  }
  return `${base}/${locale}${suffix === '/' ? '/' : suffix}`;
}

export function docsProductUrl(locale: SiteLocale, product: ProductSlug): string {
  if (locale === 'en') {
    return `${docsBaseUrl()}/product/${product}/`;
  }
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
