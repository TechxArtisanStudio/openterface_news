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

export const APPS = ['kvm', 'keycmd'] as const;

export type AppSlug = (typeof APPS)[number];

export const APP_LABELS: Record<AppSlug, string> = {
  kvm: 'KVM Control',
  keycmd: 'KeyCmd',
};

const DOCS_PRODUCT_SHORT: Record<ProductSlug, string> = {
  keymod: 'keymod',
  'kvm-go': 'kvmgo',
  minikvm: 'minikvm',
  'uconsole-kvm-extension': 'kvmext',
  accessories: 'accessories',
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

const MARKETING_SHORT: Record<ProductSlug, string> = {
  keymod: 'keymod',
  'kvm-go': 'kvmgo',
  minikvm: 'minikvm',
  'uconsole-kvm-extension': 'kvmext',
  accessories: 'accessories',
};

export function marketingProductUrl(locale: SiteLocale, product: ProductSlug): string {
  const short = MARKETING_SHORT[product];
  return `${MARKETING_HOST_BY_LOCALE[locale]}/${short}/`;
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
  const short = DOCS_PRODUCT_SHORT[product];
  if (locale === 'en') {
    return `${docsBaseUrl()}/products/${short}/`;
  }
  return `${docsBaseUrl()}/${locale}/products/${short}/`;
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
