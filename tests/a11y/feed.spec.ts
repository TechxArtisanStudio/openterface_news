import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('English feed has no critical a11y violations', async ({ page }) => {
  await page.goto('/en/', { waitUntil: 'domcontentloaded' });

  const results = await new AxeBuilder({ page })
    .exclude('header')
    .exclude('.filter-bar')
    .analyze();

  const critical = results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious');
  expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
});

test('article page has accessible structure', async ({ page }) => {
  await page.goto('/en/product/kvm-go/20260518-kvm-go-us-shipment-update/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('navigation', { name: 'Article navigation' })).toBeVisible();
});
