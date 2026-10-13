const { MatrixVyom_URL } = require('../../constants/constants');

class MatrixVyomPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator("//button[@id='btnlogin']");
  }

  async open() {
    await this.page.goto(MatrixVyom_URL);
    await this.usernameInput.fill('sm');
    await this.passwordInput.fill('admin');
    await this.loginButton.click();
  }

}

module.exports = MatrixVyomPage;
