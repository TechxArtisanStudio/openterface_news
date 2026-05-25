import { test, expect } from '@playwright/test';

test('article locale switch preserves path for Chinese', async ({ page }) => {
  await page.goto('/software/20260521-keycmd-019-release/', { waitUntil: 'domcontentloaded' });
  const zhLink = page.locator('a[data-locale-switch][href="/zh/software/20260521-keycmd-019-release/"]');
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

test('product channel locale switch preserves path', async ({ page }) => {
  await page.goto('/product/kvm-go/', { waitUntil: 'domcontentloaded' });
  const jaLink = page.locator('a[data-locale-switch][href="/ja/product/kvm-go/"]');
  await expect(jaLink).not.toHaveCount(0);
});

test('article locale switch includes hk, ru, and nl targets', async ({ page }) => {
  await page.goto('/software/20260521-keycmd-019-release/', { waitUntil: 'domcontentloaded' });
  for (const href of [
    '/hk/software/20260521-keycmd-019-release/',
    '/ru/software/20260521-keycmd-019-release/',
    '/nl/software/20260521-keycmd-019-release/',
  ]) {
    await expect(page.locator(`a[data-locale-switch][href="${href}"]`)).not.toHaveCount(0);
  }
});
