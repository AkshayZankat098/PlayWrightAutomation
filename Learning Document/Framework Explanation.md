/*

File order after `npx playwright test`

1. playwright.config.js — Playwright reads the configuration and discovers tests in `tests/`.
2. constants.js — loaded by the config to get the default site URL. It is also imported by the page object.
3. login.spec.js — Playwright loads and runs this test.
4. LoginPage.js — imported by the test; its `open()` and `login()` actions run when the test calls them.
5. test-data.json — read by the test for the login credentials.
6. reports/ — Playwright writes the HTML report after the run.

Note : Those files are not all run one after another like a script. Playwright loads the config and test dependencies first, then performs the browser actions and checks.


*/
