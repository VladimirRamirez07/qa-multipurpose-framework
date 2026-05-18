import { Page } from '@playwright/test'
import { BasePage } from '../../core/base'

export class HomePage extends BasePage {
  // Locators
  private readonly navbar = '#header'
  private readonly loginLink = 'a[href="/login"]'
  private readonly loggedInUser = 'a:has-text("Logged in as")'
  private readonly logoutLink = 'a[href="/logout"]'
  private readonly productsLink = 'a[href="/products"]'
  private readonly cartLink = 'a[href="/view_cart"]'
  private readonly searchInput = '#search_product'
  private readonly searchButton = '#submit_search'

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl)
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.baseUrl)
    await this.waitForLoad()
  }

  async isLoggedIn(): Promise<boolean> {
    return this.isVisible(this.loggedInUser)
  }

  async getLoggedInUsername(): Promise<string> {
    const text = await this.getText(this.loggedInUser)
    return text.replace('Logged in as ', '').trim()
  }

  async clickLogin(): Promise<void> {
    await this.page.click(this.loginLink)
    await this.waitForLoad()
  }

  async clickLogout(): Promise<void> {
    await this.page.click(this.logoutLink)
    await this.waitForLoad()
  }

  async clickProducts(): Promise<void> {
    await this.page.click(this.productsLink)
    await this.waitForLoad()
  }

  async searchProduct(term: string): Promise<void> {
    await this.fillField(this.searchInput, term)
    await this.page.click(this.searchButton)
    await this.waitForLoad()
  }

  async isNavbarVisible(): Promise<boolean> {
    return this.isVisible(this.navbar)
  }
}