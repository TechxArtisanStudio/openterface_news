import { docsPath } from '../config/products';
import { siteConfig } from '../config/site';
import { surfaceMarketingHost } from '../config/surface-urls';
import type { t } from '../i18n/ui';
import type { SiteLocale } from './locale';

export type NewsEcosystemLink = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
};

type Ui = ReturnType<typeof t>;

function joinUrl(host: string, path: string): string {
  const base = host.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.endsWith('/') ? `${base}${normalized}` : `${base}${normalized}/`;
}

export function buildNewsEcosystemLinks(locale: SiteLocale, ui: Ui): NewsEcosystemLink[] {
  return [
    { label: `${ui.nav.home} ↗`, href: surfaceMarketingHost(locale), external: true },
    { label: `${ui.nav.docs} ↗`, href: docsPath(locale), external: true },
    { label: `${ui.nav.media ?? 'Media'} ↗`, href: joinUrl(surfaceMarketingHost(locale), '/media/'), external: true },
    { label: `${ui.nav.shop} ↗`, href: siteConfig.links.shop, external: true },
    {
      label: ui.footer.forum.replace(/\s*↗\s*$/, ''),
      href: siteConfig.links.forum,
      external: true,
      badge: 'New',
    },
  ];
}
