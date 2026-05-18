import { Page, APIRequestContext } from '@playwright/test'

type Constructor<T> = new (...args: unknown[]) => T

export class Container {
  private static instance: Container
  private registry = new Map<string, unknown>()

  private constructor() {}

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container()
    }
    return Container.instance
  }

  register<T>(token: string, instance: T): void {
    this.registry.set(token, instance)
  }

  resolve<T>(token: string): T {
    const instance = this.registry.get(token)
    if (!instance) {
      throw new Error(No instance registered for token: )
    }
    return instance as T
  }

  has(token: string): boolean {
    return this.registry.has(token)
  }

  clear(): void {
    this.registry.clear()
  }
}

export class PageFactory {
  static create<T>(
    PageClass: Constructor<T>,
    page: Page,
    baseUrl: string
  ): T {
    return new PageClass(page, baseUrl)
  }
}

export class ApiClientFactory {
  static create<T>(
    ClientClass: Constructor<T>,
    request: APIRequestContext,
    apiUrl: string
  ): T {
    return new ClientClass(request, apiUrl)
  }
}

export const container = Container.getInstance()
