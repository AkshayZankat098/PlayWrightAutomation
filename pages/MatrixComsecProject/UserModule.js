const { MatrixVyom_URL } = require('../../constants/constants');

class MatrixVyomPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#btnlogin');
  }

  async open() {
    await this.page.goto(MatrixVyom_URL, { waitUntil: 'domcontentloaded' });
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async login(username = 'sm', password = 'admin') {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = MatrixVyomPage;
