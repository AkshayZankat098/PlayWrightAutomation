const { test, expect } = require('@playwright/test');
const QtripPage = require('../../pages/QTrip/Qtrip');
const { Qtrip } = require('../../constants/constants');


test('opens the QTrip homepage', async ({ page }) => {
  const qtripPage = new QtripPage(page);

  // await qtripPage.open();
  // await qtripPage.Register();
  // await qtripPage.Login();
  // await qtripPage.JsAlert();

  await qtripPage.NewTAB();



   await page.pause();

});
