import type { SiteLocale } from './locale';
import { surfaceMarketingHost } from './surface-urls';
import { buyProductLabel as i18nBuyLabel } from '../i18n/ui';

export const siteConfig = {
  name: 'Openterface News',
  url: 'https://news.openterface.com',
  description:
    'Official product updates, software releases, and event news from Openterface — KVM-GO, Mini-KVM, KeyMod, and more.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  headerBrandLogo: 'https://assets2.openterface.com/images/icon/op-news.svg',
  headerOpMark: '/images/openterface.svg',
  headerNewsMark: '/images/news-wordmark.svg',
  accent: '#ff6e42',
  links: {
    marketingEn: surfaceMarketingHost('en'),
    docs: 'https://docs.openterface.com',
    shop: 'https://shop.techxartisan.com/',
    forum: 'https://forum.openterface.com',
    legacy: 'https://openterface.com',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
                  linkerDomains: ['openterface.com', 'forum.openterface.com']
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
    },
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export function marketingHost(locale: SiteLocale): string {
  return surfaceMarketingHost(locale);
}

export function buyProductLabel(locale: SiteLocale, product: import('./products').ProductSlug): string {
  return i18nBuyLabel(locale, product);
}

export { newsEcosystemLinks } from '../i18n/ui';
