# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spec.ts >> @api @smoke Users API >> DELETE /users/:id - should delete a user successfully
- Location: tests\api\users.spec.ts:57:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { UserApiClient } from '../../src/api/clients'
  3  | import { userFactory } from '../../src/shared/utils'
  4  | import { HTTP_STATUS } from '../../src/shared/constants'
  5  | 
  6  | test.describe('@api @smoke Users API', () => {
  7  |   let apiClient: UserApiClient
  8  | 
  9  |   test.beforeEach(async ({ request }) => {
  10 |     apiClient = new UserApiClient(request)
  11 |   })
  12 | 
  13 |   test('GET /users - should return paginated list of users', async () => {
  14 |     const response = await apiClient.getUsers(1)
  15 | 
  16 |     expect(response.page).toBe(1)
  17 |     expect(response.data).toBeInstanceOf(Array)
  18 |     expect(response.data.length).toBeGreaterThan(0)
  19 |     expect(response.total).toBeGreaterThan(0)
  20 |     expect(response.total_pages).toBeGreaterThan(0)
  21 |   })
  22 | 
  23 |   test('GET /users/:id - should return a single user with correct schema', async () => {
  24 |     const response = await apiClient.getUserById(1)
  25 | 
  26 |     expect(response.data).toBeDefined()
  27 |     expect(response.data.id).toBe(1)
  28 |     expect(response.data.email).toContain('@')
  29 |     expect(response.data.first_name).toBeTruthy()
  30 |     expect(response.data.last_name).toBeTruthy()
  31 |     expect(response.data.avatar).toContain('https')
  32 |   })
  33 | 
  34 |   test('POST /users - should create a new user', async () => {
  35 |     const newUser = userFactory.create()
  36 |     const response = await apiClient.createUser({
  37 |       name: newUser.name,
  38 |       email: newUser.email,
  39 |     })
  40 | 
  41 |     expect(response.id).toBeDefined()
  42 |     expect(response.createdAt).toBeDefined()
  43 |     expect(response.name).toBe(newUser.name)
  44 |   })
  45 | 
  46 |   test('PUT /users/:id - should update an existing user', async () => {
  47 |     const updatedData = userFactory.create()
  48 |     const response = await apiClient.updateUser(1, {
  49 |       name: updatedData.name,
  50 |       email: updatedData.email,
  51 |     })
  52 | 
  53 |     expect(response.updatedAt).toBeDefined()
  54 |     expect(response.name).toBe(updatedData.name)
  55 |   })
  56 | 
  57 |   test('DELETE /users/:id - should delete a user successfully', async ({ request }) => {
  58 |     const deleteResponse = await request.delete('https://reqres.in/api/users/1')
> 59 |     expect(deleteResponse.status()).toBe(HTTP_STATUS.NO_CONTENT)
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  60 |   })
  61 | 
  62 |   test('POST /login - should return auth token with valid credentials', async () => {
  63 |     const response = await apiClient.login('eve.holt@reqres.in', 'cityslicka')
  64 | 
  65 |     expect(response.token).toBeDefined()
  66 |     expect(typeof response.token).toBe('string')
  67 |     expect(response.token.length).toBeGreaterThan(0)
  68 |   })
  69 | 
  70 |   test('GET /users - should return page 2 with different users', async () => {
  71 |     const page1 = await apiClient.getUsers(1)
  72 |     const page2 = await apiClient.getUsers(2)
  73 | 
  74 |     expect(page2.page).toBe(2)
  75 |     expect(page1.data[0].id).not.toBe(page2.data[0].id)
  76 |   })
  77 | })
```