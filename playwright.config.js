
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',

  // Test execution
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30_000,

  // Reports
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'reports',
        open: 'never',
      },
    ],
  ],

  // Shared browser settings
  use: {
    headless: Boolean(process.env.CI),
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',

        launchOptions: {
          args: process.env.CI
            ? []
            : ['--start-maximized'],
        },

        viewport: process.env.CI
          ? { width: 1280, height: 720 }
          : null,
      },
    },
  ],
});
