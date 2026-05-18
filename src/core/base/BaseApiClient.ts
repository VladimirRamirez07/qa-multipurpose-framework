import { APIRequestContext, APIResponse } from '@playwright/test'
import { IApiClient } from '../interfaces'

export abstract class BaseApiClient implements IApiClient {
  protected readonly request: APIRequestContext
  protected readonly baseUrl: string

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request
    this.baseUrl = baseUrl
  }

  protected buildUrl(endpoint: string): string {
   return this.baseUrl + endpoint
  }

  protected async handleResponse<T>(response: APIResponse): Promise<T> {
    if (!response.ok()) {
      throw new Error('API Error: ' + response.status() + ' ' + response.statusText())
    }
    return response.json() as Promise<T>
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const response = await this.request.get(this.buildUrl(endpoint), { params })
    return this.handleResponse<T>(response)
  }

  async post<T>(endpoint: string, body: unknown): Promise<T> {
    const response = await this.request.post(this.buildUrl(endpoint), { data: body })
    return this.handleResponse<T>(response)
  }

  async put<T>(endpoint: string, body: unknown): Promise<T> {
    const response = await this.request.put(this.buildUrl(endpoint), { data: body })
    return this.handleResponse<T>(response)
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.request.delete(this.buildUrl(endpoint))
    return this.handleResponse<T>(response)
  }
}
