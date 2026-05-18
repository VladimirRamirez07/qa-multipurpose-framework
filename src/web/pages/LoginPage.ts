import { Page } from '@playwright/test'
import { BasePage } from '../../core/base'

export class LoginPage extends BasePage {
  // Locators
  private readonly emailInput = '[data-qa="login-email"]'
  private readonly passwordInput = '[data-qa="login-password"]'
  private readonly loginButton = '[data-qa="login-button"]'
  private readonly errorMessage = 'p:has-text("Your email or password is incorrect")'
  private readonly signupName = '[data-qa="signup-name"]'
  private readonly signupEmail = '[data-qa="signup-email"]'
  private readonly signupButton = '[data-qa="signup-button"]'

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl)
  }

  async navigate(): Promise<void> {
    await this.page.goto(`${this.baseUrl}/login`)
    await this.waitForLoad()
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillField(this.emailInput, email)
    await this.fillField(this.passwordInput, password)
    await this.page.click(this.loginButton)
    await this.waitForLoad()
  }

  async getErrorMessage(): Promise<string> {
    await this.waitForSelector(this.errorMessage)
    return this.getText(this.errorMessage)
  }

  async isLoginFormVisible(): Promise<boolean> {
    return this.isVisible(this.emailInput)
  }

  async fillSignupForm(name: string, email: string): Promise<void> {
    await this.fillField(this.signupName, name)
    await this.fillField(this.signupEmail, email)
    await this.page.click(this.signupButton)
    await this.waitForLoad()
  }
}