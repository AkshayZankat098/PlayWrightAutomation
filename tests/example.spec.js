// @ts-check
import { test, expect } from '@playwright/test';

test.use({ headless: false });

test('searches Google for Virat Kohli', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Run this visible inspection in Chromium only');
  test.setTimeout(0);

  await page.goto('https://www.google.com/');

  const searchBox = page.locator('textarea[name="q"], input[name="q"]').first();
  await searchBox.fill('Virat Kohli');
  await searchBox.press('Enter');

  await page.pause();
  await expect(page).toHaveURL(/google\.[^/]+\/search\?.*q=Virat\+Kohli/);
});
