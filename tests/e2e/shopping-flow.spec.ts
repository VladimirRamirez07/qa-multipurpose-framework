import { test, expect } from '@playwright/test'
import { HomePage } from '../../src/web/pages'
import { LoginPage } from '../../src/web/pages'
import { UserApiClient } from '../../src/api/clients'
import { userFactory } from '../../src/shared/utils'
import { TIMEOUTS } from '../../src/shared/constants'

const BASE_URL = 'https://automationexercise.com'

test.describe('@e2e @critical Shopping Flow', () => {
  test('complete navigation flow - home to products', async ({ page }) => {
    const homePage = new HomePage(page, BASE_URL)
    const loginPage = new LoginPage(page, BASE_URL)

    // Step 1: Land on homepage
    await homePage.navigate()
    const isNavVisible = await homePage.isNavbarVisible()
    expect(isNavVisible).toBeTruthy()

    // Step 2: Navigate to login
    await homePage.clickLogin()
    const isLoginVisible = await loginPage.isLoginFormVisible()
    expect(isLoginVisible).toBeTruthy()

    // Step 3: Attempt login with generated credentials
    const testUser = userFactory.create()
    await loginPage.login(testUser.email, testUser.password)

    // Step 4: Verify error handling works correctly
    const error = await loginPage.getErrorMessage()
    expect(error).toContain('Your email or password is incorrect')
  })

  test('API + Web combined - validate data consistency', async ({ page, request }) => {
    const homePage = new HomePage(page, BASE_URL)
    const apiClient = new UserApiClient(request)

    // Step 1: Verify API is healthy
    const users = await apiClient.getUsers() as unknown[]
    expect(users.length).toBeGreaterThan(0)

    // Step 2: Create test data via API
    const testUser = userFactory.create()
    const createdUser = await apiClient.createUser({
      name: testUser.name,
      email: testUser.email,
    }) as { id: string; name: string }
    expect(createdUser.id).toBeDefined()

    // Step 3: Verify web layer is also functional
    await homePage.navigate()
    const isNavVisible = await homePage.isNavbarVisible()
    expect(isNavVisible).toBeTruthy()

    // Step 4: Validate data via API
    const fetchedUser = await apiClient.getUserById(1) as { id: number; email: string }
    expect(fetchedUser.id).toBe(1)
    expect(fetchedUser.email).toBeDefined()
  })

  test('multi-step API workflow - CRUD operations', async ({ request }) => {
    const apiClient = new UserApiClient(request)
    const testUser = userFactory.create()

    // Step 1: Create
    const created = await apiClient.createUser({
      name: testUser.name,
      email: testUser.email,
    }) as { id: string; name: string }
    expect(created.id).toBeDefined()
    expect(created.name).toBe(testUser.name)

    // Step 2: Read
    const fetched = await apiClient.getUserById(1) as { id: number }
    expect(fetched.id).toBe(1)

    // Step 3: Update
    const updatedUser = userFactory.create()
    const updated = await apiClient.updateUser(1, {
      name: updatedUser.name,
    }) as unknown as { name: string; id: number }
    expect(updated.name).toBe(updatedUser.name)
    expect(updated.id).toBeDefined()


    // Step 4: Verify list still works
    const users = await apiClient.getUsers() as unknown[]
    expect(Array.isArray(users)).toBeTruthy()
  })
})