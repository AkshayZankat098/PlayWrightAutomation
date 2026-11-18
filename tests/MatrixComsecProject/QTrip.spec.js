const { test, expect } = require('@playwright/test');
const QtripPage = require('../../pages/QTrip/Qtrip');


test('Opens the QTrip homepage', async ({ page }) => {
  const qtripPage = new QtripPage(page);

  await qtripPage.open();
  await qtripPage.Register();


});
