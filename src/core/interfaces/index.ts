export interface IPage {
  navigate(url?: string): Promise<void>
  waitForLoad(): Promise<void>
  getTitle(): Promise<string>
  getUrl(): string
}

export interface IComponent {
  isVisible(): Promise<boolean>
  waitForVisible(timeout?: number): Promise<void>
}

export interface IApiClient {
  get<T>(endpoint: string, params?: Record<string, string>): Promise<T>
  post<T>(endpoint: string, body: unknown): Promise<T>
  put<T>(endpoint: string, body: unknown): Promise<T>
  delete<T>(endpoint: string): Promise<T>
}

export interface ITestDataFactory<T> {
  create(overrides?: Partial<T>): T
  createMany(count: number, overrides?: Partial<T>): T[]
}

export interface IEnvironmentConfig {
  baseUrl: string
  apiUrl: string
  timeout: number
  retries: number
}
