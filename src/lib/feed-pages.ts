import { PRODUCT_LABELS, type ProductSlug } from '../config/products';
import { t } from '../i18n/ui';
import { localizedPath, type SiteLocale } from './locale';
import {
  getNewsArticles,
  getProductArticles,
} from './news';

export async function homeFeedProps(locale: SiteLocale, url: URL) {
  const ui = t(locale);
  const activeProduct = url.searchParams.get('product');
  const activeTopic = url.searchParams.get('topic');
  const articles = await getNewsArticles(locale);

  return {
    locale,
    title: ui.feed.homeTitle,
    description: ui.feed.homeDescription,
    articles,
    basePath: localizedPath(locale),
    activeProduct,
    activeTopic,
  };
}

export async function softwareFeedProps(locale: SiteLocale, url: URL) {
  const ui = t(locale);
  const activeApp = url.searchParams.get('app');
  const articles = (await getNewsArticles(locale)).filter((a) => a.data.channel === 'software');

  return {
    locale,
    title: ui.feed.softwareTitle,
    description: ui.feed.softwareDescription,
    articles,
    basePath: localizedPath(locale, 'software'),
    activeApp,
  };
}

export async function eventsFeedProps(locale: SiteLocale) {
  const ui = t(locale);
  const articles = (await getNewsArticles(locale)).filter((a) => a.data.channel === 'events');

  return {
    locale,
    title: ui.feed.eventsTitle,
    description: ui.feed.eventsDescription,
    articles,
    basePath: localizedPath(locale, 'events'),
  };
}

export async function productFeedProps(locale: SiteLocale, product: ProductSlug) {
  const ui = t(locale);
  const productLabel = PRODUCT_LABELS[product];
  const articles = await getProductArticles(locale, product);

  return {
    locale,
    title: ui.feed.productUpdatesTitle(productLabel),
    description: ui.feed.productUpdatesDescription(productLabel),
    articles,
    basePath: localizedPath(locale, 'product', product),
  };
}
