import { test, expect } from '@playwright/test';

test('root serves English feed without redirect', async ({ page }) => {
  const response = await page.goto('/', { waitUntil: 'commit' });
  expect(response?.status()).toBe(200);
  await expect(page).toHaveURL(/\/$/);
});

test('/en/ redirects to root', async ({ page }) => {
  const response = await page.goto('/en/', { waitUntil: 'commit' });
  expect(response?.status()).toBe(200);
  await expect(page).toHaveURL(/\/$/);
});

test('news header uses warm editorial masthead chrome', async ({ page }) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('/');
  const header = page.locator('header.site-header--news');
  await expect(header).toBeVisible();
  await expect(header).toHaveCSS('background-color', 'rgb(58, 53, 48)');
  const backLink = header.getByRole('link', { name: 'Back to Openterface website' });
  await expect(backLink).toHaveAttribute('href', /openterface\.com\/?$/);
  await expect(backLink.locator('img.site-header__op-mark')).toBeVisible();
  await expect(header.locator('img.site-header__news-mark')).toBeVisible();
  await expect(header.locator('nav[aria-label="News sections"]')).toHaveCount(0);
  await expect(header.getByRole('button', { name: 'Open menu' })).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 1, name: 'Openterface News' })).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(249, 247, 241)');
});

test('news search finds articles by title', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const search = page.getByRole('searchbox', { name: 'Search' });
  await expect(search).toBeVisible();
  await search.fill('KeyCmd');

  const results = page.locator('[data-news-search-results] a[role="option"]');
  await expect(results.first()).toBeVisible();
  await expect(results.first()).toContainText(/KeyCmd/i);
});

test('English feed loads with article cards', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1, name: 'Openterface News' })).toBeVisible();
  await expect(page.locator('article.card').first()).toBeVisible();
});

test('localized feeds return 200 with locale-appropriate H1', async ({ page }) => {
  const cases = [
    { path: '/de/', h1: 'Openterface News' },
    { path: '/zh/', h1: 'Openterface 资讯' },
    { path: '/ro/', h1: 'Openterface Știri' },
    { path: '/ja/', h1: 'Openterface ニュース' },
    { path: '/hk/', h1: 'Openterface 資訊' },
    { path: '/tw/', h1: 'Openterface 資訊' },
    { path: '/ru/', h1: 'Новости Openterface' },
    { path: '/ar/', h1: 'أخبار Openterface' },
    { path: '/tr/', h1: 'Openterface Haberler' },
    { path: '/pl/', h1: 'Openterface Aktualności' },
    { path: '/nl/', h1: 'Openterface Nieuws' },
  ] as const;

  for (const { path, h1 } of cases) {
    const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: h1 })).toBeVisible();
  }
});

test('pilot article exists in each sample locale', async ({ page }) => {
  const paths = [
    '/apps/20260521-keycmd-019-release/',
    '/de/apps/20260521-keycmd-019-release/',
    '/zh/apps/20260521-keycmd-019-release/',
    '/ro/apps/20260521-keycmd-019-release/',
    '/ja/apps/20260521-keycmd-019-release/',
    '/hk/apps/20260521-keycmd-019-release/',
    '/tw/apps/20260521-keycmd-019-release/',
    '/ru/apps/20260521-keycmd-019-release/',
    '/ar/apps/20260521-keycmd-019-release/',
    '/tr/apps/20260521-keycmd-019-release/',
    '/pl/apps/20260521-keycmd-019-release/',
    '/nl/apps/20260521-keycmd-019-release/',
  ];

  for (const path of paths) {
    const response = await page.goto(path, { waitUntil: 'commit' });
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  }
});

test('legacy channel hubs redirect to home feed', async ({ page }) => {
  for (const path of ['/apps/', '/events/']) {
    const response = await page.goto(path, { waitUntil: 'commit' });
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveURL(/\/$/);
  }

  const productHub = await page.goto('/product/kvm-go/', { waitUntil: 'domcontentloaded' });
  expect(productHub?.status()).toBeLessThan(400);
  await expect(page).toHaveURL(/product=kvm-go/);
  await expect(page.getByRole('heading', { level: 1, name: 'Openterface News' })).toBeVisible();
});

test('pilot article page loads with single h1', async ({ page }) => {
  const response = await page.goto('/product/kvm-go/20260518-kvm-go-us-shipment-update/', {
    waitUntil: 'domcontentloaded',
  });
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('link', { name: /Discuss on Forum/i })).toBeVisible();
});

test('RSS feed is valid XML', async ({ request }) => {
  const response = await request.get('/feed.xml');
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('<rss');
  expect(body).toContain('Openterface News');
});

test('localized RSS feeds return 200', async ({ request }) => {
  for (const path of ['/hk/feed.xml', '/ru/feed.xml', '/nl/feed.xml']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('<rss');
  }
});

test('/en/feed.xml redirects to /feed.xml', async ({ page }) => {
  await page.goto('/en/feed.xml', { waitUntil: 'commit' });
  await expect(page).toHaveURL(/\/feed\.xml$/);
});

test('hk and tw pages use BCP47 html lang and hreflang', async ({ page }) => {
  const cases = [
    { path: '/hk/', lang: 'zh-HK' },
    { path: '/tw/', lang: 'zh-TW' },
  ] as const;

  for (const { path, lang } of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator(`link[rel="alternate"][hreflang="${lang}"]`)).toHaveCount(1);
    const internalCode = path === '/hk/' ? 'hk' : 'tw';
    await expect(page.locator(`link[rel="alternate"][hreflang="${internalCode}"]`)).toHaveCount(0);
  }
});

test('zh page uses zh-CN BCP47 codes', async ({ page }) => {
  await page.goto('/zh/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
  await expect(page.locator('link[rel="alternate"][hreflang="zh"]')).toHaveCount(0);
});
