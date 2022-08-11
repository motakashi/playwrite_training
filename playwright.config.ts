// playwright.config.ts
import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // "Pixel 4" tests use Chromium browser.
    // {
    //   name: 'Pixel 4',
    //   use: {
    //     browserName: 'chromium',
    //     ...devices['Pixel 4'],
    //   }
    // },
    // "iPhone 11" tests use WebKit browser.
    // {
    //   name: 'iPhone 11',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['iPhone 11'],
    //   }
    // },
  ],
};
export default config;