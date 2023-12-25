import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'list',
  use: {
    baseURL: 'https://shop.mercedes-benz.com/en-au/shop/vehicle/srp/demo',
    screenshot: "only-on-failure",
    testIdAttribute: "data-test-id"
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]
});
