import { remote, Browser } from 'webdriverio'

export class HomeScreen {
  private driver: Browser

  constructor(driver: Browser) {
    this.driver = driver
  }

  async getPageSource(): Promise<string> {
    return this.driver.getPageSource()
  }

  async isAppLoaded(): Promise<boolean> {
    try {
      const source = await this.driver.getPageSource()
      return source.length > 0
    } catch {
      return false
    }
  }

  async getCurrentActivity(): Promise<string> {
    return this.driver.getCurrentActivity()
  }

  async getCurrentPackage(): Promise<string> {
    return this.driver.getCurrentPackage()
  }
}