const { test } = require('@playwright/test');

test('launch browser', async ({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const currentURL = page.url();

    if (currentURL.includes('practicetestautomation.com')) {
      console.log('The URL contains the expected string.' + currentURL);
    }else {
      console.log('The URL does not contain the expected string.');
    }


    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator("//button[@id='submit']").click();

    await page.pause();

});

