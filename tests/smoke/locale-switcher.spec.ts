import { test, expect } from '@playwright/test';

test('apps feed app filter shows matching articles only', async ({ page }) => {
  await page.goto('/?app=keycmd', { waitUntil: 'networkidle' });
  await expect(page.locator('[data-filter-chip="app"][data-filter-value="keycmd"]')).toHaveClass(/filter-chip-active/);
  const visibleArticles = page.locator('[data-feed-article]:visible');
  await expect(visibleArticles).not.toHaveCount(0);
  const count = await visibleArticles.count();
  for (let i = 0; i < count; i += 1) {
    await expect(visibleArticles.nth(i)).toHaveAttribute('data-app', 'keycmd');
  }
});

test('apps feed locale switch preserves app filter', async ({ page }) => {
  await page.goto('/?app=kvm', { waitUntil: 'domcontentloaded' });
  const deLink = page.locator('a[data-locale-switch][href="/de/?app=kvm"]');
  await expect(deLink).not.toHaveCount(0);
});

test('article locale switch preserves path for Chinese', async ({ page }) => {
  await page.goto('/apps/20260521-keycmd-019-release/', { waitUntil: 'domcontentloaded' });
  const zhLink = page.locator('a[data-locale-switch][href="/zh/apps/20260521-keycmd-019-release/"]');
  await expect(zhLink).not.toHaveCount(0);
});

test('feed locale switch preserves query string', async ({ page }) => {
  await page.goto('/?product=kvm-go', { waitUntil: 'domcontentloaded' });
  const deLink = page.locator('a[data-locale-switch][href="/de/?product=kvm-go"]');
  await expect(deLink).not.toHaveCount(0);
});

test('feed locale switch strips _gl but keeps product filter', async ({ page }) => {
  await page.goto('/?product=kvm-go&_gl=1*abc*_ga*xyz', { waitUntil: 'domcontentloaded' });
  const deLink = page.locator('a[data-locale-switch][href="/de/?product=kvm-go"]').first();
  await expect(deLink).not.toHaveCount(0);
  const href = await deLink.getAttribute('href');
  expect(href).toContain('product=kvm-go');
  expect(href).not.toContain('_gl=');
});

test('feed product filter shows matching articles only', async ({ page }) => {
  await page.goto('/?product=minikvm', { waitUntil: 'networkidle' });
  await expect(page.locator('[data-filter-chip="product"][data-filter-value="minikvm"]')).toHaveClass(/filter-chip-active/);
  const visibleArticles = page.locator('[data-feed-article]:visible');
  await expect(visibleArticles).not.toHaveCount(0);
  const count = await visibleArticles.count();
  for (let i = 0; i < count; i += 1) {
    await expect(visibleArticles.nth(i)).toHaveAttribute('data-product', 'minikvm');
  }
});

test('feed all chip clears product filter', async ({ page }) => {
  await page.goto('/?product=minikvm', { waitUntil: 'networkidle' });
  await page.locator('[data-filter-row="products"] [data-filter-chip="all"]').click();
  await expect(page).toHaveURL('/');
  await expect(page.locator('[data-feed-article]:visible')).toHaveCount(await page.locator('[data-feed-article]').count());
});

test('product channel locale switch preserves path', async ({ page }) => {
  await page.goto('/?product=kvm-go', { waitUntil: 'domcontentloaded' });
  const jaLink = page.locator('a[data-locale-switch][href="/ja/?product=kvm-go"]');
  await expect(jaLink).not.toHaveCount(0);
});

test('article locale switch includes hk, ru, and nl targets', async ({ page }) => {
  await page.goto('/apps/20260521-keycmd-019-release/', { waitUntil: 'domcontentloaded' });
  for (const href of [
    '/hk/apps/20260521-keycmd-019-release/',
    '/ru/apps/20260521-keycmd-019-release/',
    '/nl/apps/20260521-keycmd-019-release/',
  ]) {
    await expect(page.locator(`a[data-locale-switch][href="${href}"]`)).not.toHaveCount(0);
  }
});
