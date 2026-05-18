import { Page } from '@playwright/test'
import { IPage } from '../interfaces'

export abstract class BasePage implements IPage {
  protected readonly page: Page
  protected readonly baseUrl: string

  constructor(page: Page, baseUrl: string) {
    this.page = page
    this.baseUrl = baseUrl
  }

  async navigate(url?: string): Promise<void> {
    await this.page.goto(url ?? this.baseUrl)
    await this.waitForLoad()
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle')
  }

  async getTitle(): Promise<string> {
    return this.page.title()
  }

  getUrl(): string {
    return this.page.url()
  }

  protected async waitForSelector(selector: string, timeout = 10000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout })
  }

  protected async clickAndWait(selector: string): Promise<void> {
    await this.page.click(selector)
    await this.page.waitForLoadState('networkidle')
  }

  protected async fillField(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value)
  }

  protected async getText(selector: string): Promise<string> {
    return this.page.locator(selector).innerText()
  }

  protected async isVisible(selector: string): Promise<boolean> {
    return this.page.locator(selector).isVisible()
  }
}
