import { test, expect } from '@playwright/test';

async function leadArticlePath(page: import('@playwright/test').Page): Promise<string> {
  const href = await page.locator('article.card h2 a').first().getAttribute('href');
  expect(href).toBeTruthy();
  return href!;
}

async function redirectBody(request: import('@playwright/test').APIRequestContext, path: string): Promise<string> {
  const response = await request.get(path, { maxRedirects: 0 });
  return response.text();
}

test('/latest/ stub targets the homepage lead article', async ({ request, page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const expected = await leadArticlePath(page);
  const body = await redirectBody(request, '/latest/');
  expect(body).toContain(`url=${expected}`);
  expect(body).toMatch(/noindex/i);
});

test('/latest/2/ stub targets the second homepage article', async ({ request, page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const second = await page.locator('article.card h2 a').nth(1).getAttribute('href');
  expect(second).toBeTruthy();
  const body = await redirectBody(request, '/latest/2/');
  expect(body).toContain(`url=${second}`);
});

test('/newest/ stub targets the newest article', async ({ request, page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const expected = await leadArticlePath(page);
  const body = await redirectBody(request, '/newest/');
  expect(body).toContain(`url=${expected}`);
});

test('/en/latest/ stub targets canonical /latest/', async ({ request }) => {
  const body = await redirectBody(request, '/en/latest/');
  expect(body).toContain('url=/latest/');
});

test('/zh/latest/ stub targets the Chinese feed lead article', async ({ request, page }) => {
  await page.goto('/zh/', { waitUntil: 'domcontentloaded' });
  const expected = await leadArticlePath(page);
  const body = await redirectBody(request, '/zh/latest/');
  expect(body).toContain(`url=${expected}`);
});

test('/latest/99/ returns 404', async ({ page }) => {
  const response = await page.goto('/latest/99/', { waitUntil: 'commit' });
  expect(response?.status()).toBe(404);
});
