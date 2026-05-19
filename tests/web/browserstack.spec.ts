import { test, expect, chromium } from '@playwright/test'
import { HomePage } from '../../src/web/pages'
import { LoginPage } from '../../src/web/pages'

const BASE_URL = 'https://automationexercise.com'
const BS_USERNAME = process.env.BROWSERSTACK_USERNAME || ''
const BS_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || ''
const isBS = process.env.ENV === 'browserstack' && !!BS_USERNAME && !!BS_ACCESS_KEY

test.describe('@web @browserstack BrowserStack Cross-Browser Tests', () => {

  test.skip(!isBS, 'Skipping BrowserStack tests - set ENV=browserstack to run')

  test('should run login page test on BrowserStack Chrome', async () => {
    const caps = {
      'browser': 'chrome',
      'browser_version': 'latest',
      'os': 'Windows',
      'os_version': '11',
      'browserstack.username': BS_USERNAME,
      'browserstack.accessKey': BS_ACCESS_KEY,
      'name': 'Login Page Test - Chrome',
      'build': 'QA Multipurpose Framework - Build 1',
      'project': 'qa-multipurpose-framework',
    }

    const wsEndpoint = 'wss://cdp.browserstack.com/playwright?caps=' + encodeURIComponent(JSON.stringify(caps))

    const browser = await chromium.connectOverCDP(wsEndpoint)
    const context = await browser.newContext()
    const page = await context.newPage()

    try {
      const loginPage = new LoginPage(page, BASE_URL)
      await loginPage.navigate()
      const isVisible = await loginPage.isLoginFormVisible()
      expect(isVisible).toBeTruthy()

      const homePage = new HomePage(page, BASE_URL)
      await homePage.navigate()
      const isNavVisible = await homePage.isNavbarVisible()
      expect(isNavVisible).toBeTruthy()
    } finally {
      await page.close()
      await context.close()
      await browser.close()
    }
  })
})