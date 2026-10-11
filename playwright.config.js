
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  reporter: 'html',

  use: {
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
    trace: 'on-first-retry',
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
