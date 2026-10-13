const { test, expect } = require('@playwright/test');
const LeetCodePage = require('../../pages/LeetCodePage');

test('LeetCode homepage opens', async ({ page }) => {
  const leetCodePage = new LeetCodePage(page);

  await leetCodePage.open();
  await expect(page).toHaveURL(/leetcode\.com/);
});
