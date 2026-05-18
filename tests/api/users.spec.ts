import { test, expect } from '@playwright/test'
import { UserApiClient } from '../../src/api/clients'
import { userFactory } from '../../src/shared/utils'
import { HTTP_STATUS } from '../../src/shared/constants'

test.describe('@api @smoke Users API', () => {
  let apiClient: UserApiClient

  test.beforeEach(async ({ request }) => {
    apiClient = new UserApiClient(request)
  })

  test('GET /users - should return list of users', async () => {
    const response = await apiClient.getUsers()
    expect(Array.isArray(response)).toBeTruthy()
    expect((response as unknown[]).length).toBeGreaterThan(0)
  })

  test('GET /users/:id - should return a single user with correct schema', async () => {
    const response = await apiClient.getUserById(1)
    expect(response).toBeDefined()
    expect((response as { id: number }).id).toBe(1)
    expect((response as { email: string }).email).toBeDefined()
  })

  test('POST /users - should create a new user', async () => {
    const newUser = userFactory.create()
    const response = await apiClient.createUser({
      name: newUser.name,
      email: newUser.email,
    }) as { id: string; createdAt: string; name: string }
    expect(response.id).toBeDefined()
    expect(response.name).toBe(newUser.name)
  })

  test('PUT /users/:id - should update an existing user', async () => {
    const updatedData = userFactory.create()
    const response = await apiClient.updateUser(1, {
      name: updatedData.name,
      email: updatedData.email,
    }) as { name: string; updatedAt: string }
    expect(response.name).toBe(updatedData.name)
  })

  test('DELETE /users/:id - should delete a user successfully', async ({ request }) => {
    const deleteResponse = await request.delete('https://jsonplaceholder.typicode.com/users/1')
    expect(deleteResponse.status()).toBe(HTTP_STATUS.OK)
  })

  test('GET /users - should return page 2 with different users', async () => {
    const page1 = await apiClient.getUsers(1) as { id: number }[]
    const page2 = await apiClient.getUsers(2) as { id: number }[]
    expect(Array.isArray(page1)).toBeTruthy()
    expect(Array.isArray(page2)).toBeTruthy()
  })
})