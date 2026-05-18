import { test, expect } from '@playwright/test'
import { LoginPage } from '../../src/web/pages'
import { HomePage } from '../../src/web/pages'
import { userFactory } from '../../src/shared/utils'
import { TIMEOUTS } from '../../src/shared/constants'

const BASE_URL = 'https://automationexercise.com'

test.describe('@web @smoke Login Feature', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page, BASE_URL)
    homePage = new HomePage(page, BASE_URL)
    await loginPage.navigate()
  })

  test('should display login form correctly', async () => {
    const isVisible = await loginPage.isLoginFormVisible()
    expect(isVisible).toBeTruthy()
  })

  test('should show error with invalid credentials', async () => {
    const fakeUser = userFactory.create()
    await loginPage.login(fakeUser.email, fakeUser.password)
    const error = await loginPage.getErrorMessage()
    expect(error).toContain('Your email or password is incorrect')
  })

  test('should navigate to login page from home', async () => {
    await homePage.navigate()
    await homePage.clickLogin()
    const isVisible = await loginPage.isLoginFormVisible()
    expect(isVisible).toBeTruthy()
  })

  test('should display home navbar correctly', async () => {
    await homePage.navigate()
    const isVisible = await homePage.isNavbarVisible()
    expect(isVisible).toBeTruthy()
  })
})