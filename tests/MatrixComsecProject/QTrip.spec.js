const { test, expect } = require('@playwright/test');
const QtripPage = require('../../pages/QTrip/Qtrip');
const { Qtrip } = require('../../constants/constants');

test.use({
  headless: false,
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
  },
});

test('opens the QTrip homepage', async ({ page }) => {
  const qtripPage = new QtripPage(page);
  await qtripPage.open();

  await expect(page).toHaveURL(Qtrip);
});
