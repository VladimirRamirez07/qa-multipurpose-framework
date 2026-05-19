# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\browserstack.spec.ts >> @web @browserstack BrowserStack Cross-Browser Tests >> should run login page test on BrowserStack Chrome
- Location: tests\web\browserstack.spec.ts:16:7

# Error details

```
Error: browserType.connectOverCDP: Target page, context or browser has been closed
Browser logs:

Error: Invalid username or password

Call log:
  - <ws connecting> wss://cdp.browserstack.com/playwright
  - <ws connected> wss://cdp.browserstack.com/playwright
  - <ws disconnected> wss://cdp.browserstack.com/playwright code=1001 reason=Error: Invalid username or password

```

# Test source

```ts
  1  | import { test, expect, chromium } from '@playwright/test'
  2  | import { browserstackConfig } from '../../config/browserstack/capabilities'
  3  | import { HomePage } from '../../src/web/pages'
  4  | import { LoginPage } from '../../src/web/pages'
  5  | 
  6  | const BASE_URL = 'https://automationexercise.com'
  7  | 
  8  | const isBS = process.env.ENV === 'browserstack'
  9  |   && !!process.env.BROWSERSTACK_USERNAME
  10 |   && !!process.env.BROWSERSTACK_ACCESS_KEY
  11 | 
  12 | test.describe('@web @browserstack BrowserStack Cross-Browser Tests', () => {
  13 | 
  14 |   test.skip(!isBS, 'Skipping BrowserStack tests - set ENV=browserstack to run')
  15 | 
  16 |   test('should run login page test on BrowserStack Chrome', async () => {
  17 |     const capabilities = {
  18 |       browser: 'chrome',
  19 |       browser_version: 'latest',
  20 |       os: 'Windows',
  21 |       os_version: '11',
  22 |       'browserstack.username': browserstackConfig.username,
  23 |       'browserstack.accessKey': browserstackConfig.accessKey,
  24 |       name: 'Login Page Test - Chrome',
  25 |       build: 'QA Multipurpose Framework - Build 1',
  26 |       project: 'qa-multipurpose-framework',
  27 |     }
  28 | 
  29 |     const cdpUrl = browserstackConfig.getCdpUrl(capabilities)
> 30 |     const browser = await chromium.connectOverCDP(cdpUrl)
     |                                    ^ Error: browserType.connectOverCDP: Target page, context or browser has been closed
  31 |     const context = await browser.newContext()
  32 |     const page = await context.newPage()
  33 | 
  34 |     try {
  35 |       const loginPage = new LoginPage(page, BASE_URL)
  36 |       await loginPage.navigate()
  37 |       const isVisible = await loginPage.isLoginFormVisible()
  38 |       expect(isVisible).toBeTruthy()
  39 | 
  40 |       const homePage = new HomePage(page, BASE_URL)
  41 |       await homePage.navigate()
  42 |       const isNavVisible = await homePage.isNavbarVisible()
  43 |       expect(isNavVisible).toBeTruthy()
  44 |     } finally {
  45 |       await page.close()
  46 |       await context.close()
  47 |       await browser.close()
  48 |     }
  49 |   })
  50 | })
```