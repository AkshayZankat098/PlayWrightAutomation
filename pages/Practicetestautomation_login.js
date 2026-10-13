const { Practicetestautomation_URL } = require('../constants/constants');

class Practicetestautomation_login {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
  }

  async open() {
    await this.page.goto(Practicetestautomation_URL);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = Practicetestautomation_login;
