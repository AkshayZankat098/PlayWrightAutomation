# Playwright Automation

A JavaScript browser test project using Playwright Test, feature-organized tests, page objects, reusable test data, and HTML reports.

## Project structure

```text
playwright-automation/
├── tests/
│   └── auth/
│       └── login.spec.js
├── pages/
│   └── LoginPage.js
├── test-data/
│   └── test-data.json
├── constants/
│   └── constants.js
├── docs/
│   └── playwright-basics.md
├── reports/                 # Generated HTML report; ignored by Git
├── test-results/            # Generated artifacts; ignored by Git
├── playwright.config.js
├── package.json
└── package-lock.json
```

Organize future tests by feature under `tests/` (for example, `tests/search/` or `tests/navigation/`) and add a page object when a feature needs reusable page interactions.

## Run tests

```bash
npm test
npm run test:headed
npm run test:ui
npm run test:report
```

Set `BASE_URL` in the environment to override the default practice site URL.
