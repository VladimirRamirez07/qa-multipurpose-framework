# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spec.ts >> @api @smoke Users API >> POST /users - should create a new user
- Location: tests\api\users.spec.ts:34:7

# Error details

```
Error: API Error: 401 Unauthorized
```

# Test source

```ts
  1  | ﻿import { APIRequestContext, APIResponse } from '@playwright/test'
  2  | import { IApiClient } from '../interfaces'
  3  | 
  4  | export abstract class BaseApiClient implements IApiClient {
  5  |   protected readonly request: APIRequestContext
  6  |   protected readonly baseUrl: string
  7  | 
  8  |   constructor(request: APIRequestContext, baseUrl: string) {
  9  |     this.request = request
  10 |     this.baseUrl = baseUrl
  11 |   }
  12 | 
  13 |   protected buildUrl(endpoint: string): string {
  14 |    return this.baseUrl + endpoint
  15 |   }
  16 | 
  17 |   protected async handleResponse<T>(response: APIResponse): Promise<T> {
  18 |     if (!response.ok()) {
> 19 |       throw new Error('API Error: ' + response.status() + ' ' + response.statusText())
     |             ^ Error: API Error: 401 Unauthorized
  20 |     }
  21 |     return response.json() as Promise<T>
  22 |   }
  23 | 
  24 |   async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  25 |     const response = await this.request.get(this.buildUrl(endpoint), { params })
  26 |     return this.handleResponse<T>(response)
  27 |   }
  28 | 
  29 |   async post<T>(endpoint: string, body: unknown): Promise<T> {
  30 |     const response = await this.request.post(this.buildUrl(endpoint), { data: body })
  31 |     return this.handleResponse<T>(response)
  32 |   }
  33 | 
  34 |   async put<T>(endpoint: string, body: unknown): Promise<T> {
  35 |     const response = await this.request.put(this.buildUrl(endpoint), { data: body })
  36 |     return this.handleResponse<T>(response)
  37 |   }
  38 | 
  39 |   async delete<T>(endpoint: string): Promise<T> {
  40 |     const response = await this.request.delete(this.buildUrl(endpoint))
  41 |     return this.handleResponse<T>(response)
  42 |   }
  43 | }
  44 | 
```