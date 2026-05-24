import { docsPath, type ProductSlug } from './products';
import { surfaceDocsBase, surfaceMarketingHost } from './surface-urls';
import { t, buyProductLabel as i18nBuyLabel } from '../i18n/ui';
import { localizedPath, type SiteLocale } from '../lib/locale';

export const siteConfig = {
  name: 'Openterface News',
  url: 'https://news.openterface.com',
  description:
    'Official product updates, software releases, and event news from Openterface — KVM-GO, Mini-KVM, KeyMod, and more.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    marketingEn: surfaceMarketingHost('en'),
    docs: surfaceDocsBase(),
    forum: 'https://forum.openterface.com',
    legacy: 'https://openterface.com',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'news.openterface.com',
        'openterface.com',
        'docs.openterface.com',
        'forum.openterface.com',
        'en.openterface.com',
        'cn.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'kr.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
      ],
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
  const ui = t(locale);
  return [
    { label: ui.nav.allNews, href: localizedPath(locale) },
    {
      label: ui.nav.products,
      href: localizedPath(locale, 'product', 'kvm-go'),
      children: [
        { label: 'KVM-GO', href: localizedPath(locale, 'product', 'kvm-go') },
        { label: 'Mini-KVM', href: localizedPath(locale, 'product', 'minikvm') },
        { label: 'KeyMod', href: localizedPath(locale, 'product', 'keymod') },
        { label: 'uConsole KVM', href: localizedPath(locale, 'product', 'uconsole-kvm-extension') },
      ],
    },
    { label: ui.nav.software, href: localizedPath(locale, 'software') },
    { label: ui.nav.events, href: localizedPath(locale, 'events') },
    {
      label: ui.nav.docs,
      href: docsPath(locale),
      external: true,
    },
  ];
}

export function buyProductLabel(locale: SiteLocale, product: ProductSlug): string {
  return i18nBuyLabel(locale, product);
}
