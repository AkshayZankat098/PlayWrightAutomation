const { test, expect } = require('@playwright/test');
const MatrixVyomPage = require('../../pages/MatrixComsecProject/UserModule');

test('MatrixWeb Pages', async ({ page }) => {
  const matrixVyomPage = new MatrixVyomPage(page);

  await matrixVyomPage.open();
  await matrixVyomPage.login('sm', 'admin');
  await expect(page).toHaveURL(/demo\.matrixvyom\.com/i);
});
