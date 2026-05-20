import { remote } from 'webdriverio'
import { HomeScreen } from '../../src/mobile/screens'

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554',
  'appium:platformVersion': '17.0',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
  'appium:noReset': true,
}

const wdioConfig = {
  hostname: '127.0.0.1',
  port: 4723,
  logLevel: 'silent' as const,
  capabilities,
}

describe('@mobile @smoke Android Settings App', () => {
  let driver: Awaited<ReturnType<typeof remote>>
  let homeScreen: HomeScreen

  before(async () => {
    driver = await remote(wdioConfig)
    homeScreen = new HomeScreen(driver)
  })

  after(async () => {
    if (driver) await driver.deleteSession()
  })

  it('should launch Settings app successfully', async () => {
    const isLoaded = await homeScreen.isAppLoaded()
    if (!isLoaded) throw new Error('App did not load')
  })

  it('should be on the correct package', async () => {
    const pkg = await homeScreen.getCurrentPackage()
    if (pkg !== 'com.android.settings') throw new Error('Wrong package: ' + pkg)
  })

  it('should get current activity', async () => {
    const activity = await homeScreen.getCurrentActivity()
    if (!activity) throw new Error('No activity found')
    console.log('Current activity:', activity)
  })
})