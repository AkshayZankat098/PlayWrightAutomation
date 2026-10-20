const { MatrixVyom_URL } = require('../../constants/constants');

class MatrixVyomPage {

  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@id='loginid']");
    this.passwordInput = page.locator("//input[@id='pwd']");
    this.loginButton = page.locator("//button[@id='btnlogin']");
    this.UserModule = page.locator("//div[@class='ng-scope']//div[2]");
    this.UserList = page.locator("//a[@id='7001']");
    this.AddUser = page.locator("//button[@id='btnNew']");
    this.AddUser_ID = page.locator('[name="autoCompleteId"]');
    this.AddUser_Name = page.locator('#AutoUserName');
    this.SortName = page.locator("#TxtUShtName");
    this.Click_Save = page.locator("#btnSave");
  }

  async open() {
    await this.page.goto(MatrixVyom_URL);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async GotoUserModule() {
    await this.UserModule.click();
    await this.UserList.click();
    await this.AddUser.click();
    await this.AddUser_ID.click();
    await this.AddUser_ID.fill('AkshaySDET');
    await this.AddUser_Name.click();
    await this.AddUser_Name.fill('AkshaySDET');
    await this.SortName.click();
  } 



}

module.exports = MatrixVyomPage;
