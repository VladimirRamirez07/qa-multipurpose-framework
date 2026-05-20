import { test, expect } from '@playwright/test'
import { remote } from 'webdriverio'
import { HomeScreen } from '../../src/mobile/screens'

const isMobile = process.env.MOBILE === 'true'

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554',
  'appium:platformVersion': '17.0',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
  'appium:noReset': true,
}

test.describe('@mobile @smoke Android Settings App', () => {
  test.skip(!isMobile, 'Skipping mobile tests - set MOBILE=true to run')

  test('should launch Settings app and validate package', async () => {
    const driver = await remote({
      hostname: '127.0.0.1',
      port: 4723,
      logLevel: 'silent',
      capabilities,
    })

    try {
      const screen = new HomeScreen(driver)
      const isLoaded = await screen.isAppLoaded()
      expect(isLoaded).toBeTruthy()

      const pkg = await screen.getCurrentPackage()
      expect(pkg).toBe('com.android.settings')

      const activity = await screen.getCurrentActivity()
      expect(activity).toBeTruthy()
    } finally {
      await driver.deleteSession()
    }
  })
})