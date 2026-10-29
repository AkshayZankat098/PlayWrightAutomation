const { Qtrip } = require('../../constants/constants');
/*** @param {import('@playwright/test').Page} page */

class QtripPage {

  constructor(page) {
    this.page = page;
  }

  async open() {
      await this.page.goto(Qtrip);
  }

  async Register() {
      const Register = await this.page.getByRole('link', { name: 'Register' });
      await Register.click();
      await this.page.getByRole('textbox', { name: 'Email address' }).fill('Test@gmail.com');

      const password = this.page.getByLabel('Type to create account password');
      await password.click();
      await password.fill('Akshay');

      const confirmPassword = this.page.getByPlaceholder('Retype Password to Confirm');
      await confirmPassword.click();
      await confirmPassword.fill('Akshay');

      await this.page.getByRole('button', { name: 'Register Now' }).click();
  }

    async Login() {

      // Register dialog handler first
      this.page.on('dialog', async (Akshay) => {
        await Akshay.accept();
      });

      await this.page.getByRole('link', { name: 'Login Here' }).click();
      const email = this.page.getByLabel('Email address');
      await email.click();
      await email.fill('Test@gmail.com');
  
      const password = this.page.getByLabel('Password');
      password.click();
      password.fill('T');
      await this.page.getByRole('button', { name: 'Login to QTrip' }).click();
    }

      async NewTAB() {
        await this.page.goto(Qtrip);

        const context = this.page.context();

        const TAB1 = await context.newPage();
        await TAB1.goto('https://www.google.com/');

        const TAB2 = await context.newPage();
        await TAB2.goto('https://www.youtube.com/');

        const TAB3 = await context.newPage();
        await TAB3.goto('https://www.facebook.com/');
      }


}
module.exports = QtripPage;
