const { Leetcode_URL } = require('../constants/constants');

class LeetCodePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(Leetcode_URL);
  }
}

module.exports = LeetCodePage;
