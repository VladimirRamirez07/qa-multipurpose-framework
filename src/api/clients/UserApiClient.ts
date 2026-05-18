import { APIRequestContext } from '@playwright/test'
import { BaseApiClient } from '../../core/base'
import { ApiResponse, TestUser } from '../../shared/types'

export interface ReqresUser {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface ReqresResponse<T> {
  data: T
  support?: {
    url: string
    text: string
  }
}

export interface ReqresListResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

export class UserApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request, 'https://jsonplaceholder.typicode.com')
  }

  async getUsers(page = 1): Promise<unknown> {
  return this.get('/users')
}

async getUserById(id: number): Promise<unknown> {
  return this.get('/users/' + id)
}

  async createUser(data: Partial<TestUser>): Promise<{ id: string; createdAt: string } & Partial<TestUser>> {
    return this.post('/users', data)
  }

  async updateUser(id: number, data: Partial<TestUser>): Promise<Partial<TestUser> & { updatedAt: string }> {
    return this.put(`/users/${id}`, data)
  }

  async deleteUser(id: number): Promise<void> {
    return this.delete(`/users/${id}`)
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    return this.post('/login', { email, password })
  }
}