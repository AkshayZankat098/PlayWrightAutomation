const { test, expect } = require('@playwright/test');
const MatrixVyomPage = require('../../pages/MatrixComsecProject/UserModule');
const testData = require('../../test-data/test-data.json');

test('Goto matrix site and trying to create USER', async ({ page }) => {

  const matrixVyomPage = new MatrixVyomPage(page);

  await matrixVyomPage.open();
  await matrixVyomPage.login(testData.matrixVyom.username, testData.matrixVyom.password);
  await matrixVyomPage.GotoUserModule();
});
