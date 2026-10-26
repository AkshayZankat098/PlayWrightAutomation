const { Qtrip } = require('../../constants/constants');
/*** @param {import('@playwright/test').Page} page */

class QtripPage {

  constructor(page) {
    this.page = page;
  }

async open() {
    await this.page.goto(Qtrip);

    const context = this.page.context();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://www.google.com/');
    await page2.goto('https://www.google.com/');
  }
}

module.exports = QtripPage;
