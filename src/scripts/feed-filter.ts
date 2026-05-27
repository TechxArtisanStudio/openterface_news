/** Client-side product/topic filtering for prerendered feed pages. */

export function readFeedFilters(): { product: string | null; topic: string | null } {
  const params = new URLSearchParams(window.location.search);
  return {
    product: params.get('product'),
    topic: params.get('topic'),
  };
}

export function applyFeedFilters(root: ParentNode = document): number {
  const { product, topic } = readFeedFilters();
  const articles = root.querySelectorAll<HTMLElement>('[data-feed-article]');
  let visible = 0;

  articles.forEach((article) => {
    const articleProduct = article.dataset.product ?? '';
    const articleTopics = (article.dataset.topics ?? '').split(',').filter(Boolean);
    const matchesProduct = !product || articleProduct === product;
    const matchesTopic = !topic || articleTopics.includes(topic);
    const show = matchesProduct && matchesTopic;
    article.hidden = !show;
    if (show) visible += 1;
  });

  root.querySelectorAll<HTMLElement>('[data-filter-chip]').forEach((chip) => {
    const kind = chip.dataset.filterChip;
    const value = chip.dataset.filterValue ?? '';
    let active = false;
    if (kind === 'all') active = !product && !topic;
    else if (kind === 'product') active = product === value;
    else if (kind === 'topic') active = topic === value;
    chip.classList.toggle('filter-chip-active', active);
  });

  const empty = root.querySelector<HTMLElement>('[data-feed-empty]');
  const grid = root.querySelector<HTMLElement>('[data-feed-grid]');
  const filtering = Boolean(product || topic);

  if (empty) empty.hidden = !filtering || visible > 0;
  if (grid) grid.hidden = filtering && visible === 0;

  return visible;
}

export function initFeedFilter(): void {
  applyFeedFilters();
}
