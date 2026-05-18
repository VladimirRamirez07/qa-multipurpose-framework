export type Environment = 'dev' | 'qa' | 'staging' | 'browserstack'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type TestStatus = 'passed' | 'failed' | 'skipped' | 'pending'

export interface ApiResponse<T = unknown> {
  data: T
  status: number
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

export interface TestUser {
  id?: string
  name: string
  email: string
  password: string
  role?: 'admin' | 'user' | 'guest'
}

export interface TestProduct {
  id?: string
  name: string
  price: number
  category: string
  description?: string
}

export interface Coordinates {
  x: number
  y: number
}

export interface ViewportSize {
  width: number
  height: number
}
