# Playwright Automation

A JavaScript browser automation project using Playwright Test, page objects, reusable test data, and HTML reports. GitHub Actions runs the tests and publishes the HTML report to GitHub Pages after successful pushes to `main` or `master`.

## Project structure

```text
playwright-automation/
├── tests/
│   └── MatrixComsecProject/
│       └── QTrip.spec.js
├── pages/
│   └── QTrip/
│       ├── Qtrip.js
│       ├── Handles_In_PlayWright.js
│       └── Locators_Methods.js
├── constants/
│   └── constants.js
├── test-data/
│   └── test-data.json
├── .github/
│   └── workflows/
│       └── playwright.yml
├── Learning Document/
│   └── Framework Explanation.md
├── playwright.config.js
├── package.json
├── package-lock.json
├── utils/
├── reports/                 # Generated HTML report; ignored by Git
├── test-results/            # Generated artifacts; ignored by Git
└── README.md
```

Add future tests under `tests/` and page objects under `pages/`, organized by feature.

## Run tests

```bash
npm ci
npx playwright install chromium
npm test
npm run test:headed
npm run test:ui
npm run test:report
```

## CI/CD

The GitHub Actions workflow in `.github/workflows/playwright.yml` runs on pushes and pull requests targeting `main` or `master`, and can also be started manually. It installs dependencies and Chromium, runs the Chromium Playwright suite, and stores the report and test results as workflow artifacts.

After tests pass on a push to `main` or `master`, the workflow deploys the HTML report to GitHub Pages. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. Pull requests run tests but do not deploy the report.

The report is published at the GitHub Pages URL shown in the `Deploy Playwright Report` job's environment after a successful deployment.
