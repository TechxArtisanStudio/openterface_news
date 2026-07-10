import { defineConfig, devices } from '@playwright/test';

/** Dedicated port so smoke preview does not collide with dev-stack news on 4321. */
const SMOKE_PORT = process.env.SMOKE_PORT ?? '18801';
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://localhost:${SMOKE_PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'mobile',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer:
    process.env.PLAYWRIGHT_BASE_URL
      ? undefined
      : {
          command: `npm run preview -- --port ${SMOKE_PORT}`,
          url: `${baseURL}/`,
          reuseExistingServer: !process.env.CI,
          timeout: 120_000,
        },
});
