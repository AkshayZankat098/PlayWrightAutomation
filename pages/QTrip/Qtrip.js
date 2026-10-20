const { Qtrip } = require('../../constants/constants');
/*** @param {import('@playwright/test').Page} page */

class QtripPage {

  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(Qtrip);
  }


}

module.exports = QtripPage;
