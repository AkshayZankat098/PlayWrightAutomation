const { MatrixVyom_URL } = require('../../constants/constants');

class MatrixVyomPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@id='loginid']");
    this.passwordInput = page.locator("//input[@id='pwd']");
    this.loginButton = page.locator("//button[@id='btnlogin']");
    this.UserModule = page.locator("//div[@class='ng-scope']//div[2]");
    this.UserList = page.locator("//a[@id='7001']");
    this.AddUser = page.locator("//button[@id='btnNew']");
  }

  async open() {
    await this.page.goto(MatrixVyom_URL);
  }

  async login(username = 'sm', password = 'admin') {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.UserModule.click();
    await this.UserList.click();
    await this.AddUser.click();
  }
}

module.exports = MatrixVyomPage;
