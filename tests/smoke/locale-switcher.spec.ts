import { test, expect } from '@playwright/test';

test('article locale switch preserves path for Chinese', async ({ page }) => {
  await page.goto('/en/software/20260521-keycmd-019-release/', { waitUntil: 'domcontentloaded' });
  const zhLink = page.locator('a[data-locale-switch][href="/zh/software/20260521-keycmd-019-release/"]');
  await expect(zhLink).not.toHaveCount(0);
});

test('feed locale switch preserves query string', async ({ page }) => {
  await page.goto('/en/?product=kvm-go', { waitUntil: 'domcontentloaded' });
  const deLink = page.locator('a[data-locale-switch][href="/de/?product=kvm-go"]');
  await expect(deLink).not.toHaveCount(0);
});

test('product channel locale switch preserves path', async ({ page }) => {
  await page.goto('/en/product/kvm-go/', { waitUntil: 'domcontentloaded' });
  const jaLink = page.locator('a[data-locale-switch][href="/ja/product/kvm-go/"]');
  await expect(jaLink).not.toHaveCount(0);
});
