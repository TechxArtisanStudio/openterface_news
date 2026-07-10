import { t } from '../i18n/ui';
import { localizedPath, type SiteLocale } from './locale';
import { getNewsArticles } from './news';

export async function homeFeedProps(locale: SiteLocale, url: URL) {
  const ui = t(locale);
  const activeProduct = url.searchParams.get('product');
  const activeTopic = url.searchParams.get('topic');
  const activeApp = url.searchParams.get('app');
  const articles = await getNewsArticles(locale);

  return {
    locale,
    title: ui.feed.homeTitle,
    description: ui.feed.homeDescription,
    articles,
    basePath: localizedPath(locale),
    activeProduct,
    activeTopic,
    activeApp,
  };
}
