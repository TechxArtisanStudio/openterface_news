import type { ProductSlug } from './products';
import { surfaceDocsBase, surfaceMarketingHost } from './surface-urls';
import { buyProductLabel as i18nBuyLabel, t } from '../i18n/ui';
import { newsEcosystemNav } from '../lib/ecosystem-nav';
import type { SiteLocale } from '../lib/locale';

export const siteConfig = {
  name: 'Openterface News',
  url: 'https://news.openterface.com',
  description:
    'Official product updates, software releases, and event news from Openterface — KVM-GO, Mini-KVM, KeyMod, and more.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  headerBrandLogo: 'https://assets2.openterface.com/images/icon/op-news.svg',
  accent: '#ff6e42',
  links: {
    marketingEn: surfaceMarketingHost('en'),
    docs: surfaceDocsBase(),
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

export function newsNav(locale: SiteLocale): NavItem[] {
  return newsEcosystemNav(locale, t(locale));
}

export function buyProductLabel(locale: SiteLocale, product: ProductSlug): string {
  return i18nBuyLabel(locale, product);
}
