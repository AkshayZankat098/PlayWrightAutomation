const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const userData = require('../../test-data/test-data.json');


test('valid user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(userData.validUser.username, userData.validUser.password);

  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
});
