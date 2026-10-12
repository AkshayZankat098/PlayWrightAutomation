
const { defineConfig } = require('@playwright/test');
const { BASE_URL } = require('./constants/constants');

const configuredBaseURL = process.env.BASE_URL || BASE_URL;
let baseURL;

try {
  baseURL = new URL(configuredBaseURL).origin;
} catch {
  throw new Error(`BASE_URL must be an absolute URL. Received: ${configuredBaseURL}`);
}

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]],

  use: {
    baseURL,
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
