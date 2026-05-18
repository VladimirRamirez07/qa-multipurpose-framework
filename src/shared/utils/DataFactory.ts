import type { ITestDataFactory } from '../../core/interfaces'
import type { TestUser, TestProduct } from '../types'

function randomString(length = 8): string {
  return Math.random().toString(36).substring(2, length + 2)
}

function randomPrice(): number {
  return parseFloat((Math.random() * 999 + 1).toFixed(2))
}

const firstNames = ['Alice', 'Bob', 'Carol', 'David', 'Eva', 'Frank', 'Grace', 'Henry']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller']
const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'test.com']
const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Toys']

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateName(): string {
  return randomItem(firstNames) + ' ' + randomItem(lastNames)
}

function generateEmail(name: string): string {
  return name.toLowerCase().replace(' ', '.') + randomString(4) + '@' + randomItem(domains)
}

export class UserFactory implements ITestDataFactory<TestUser> {
  create(overrides?: Partial<TestUser>): TestUser {
    const name = generateName()
    return {
      name,
      email: generateEmail(name),
      password: 'Test@' + randomString(8),
      role: 'user',
      ...overrides,
    }
  }

  createMany(count: number, overrides?: Partial<TestUser>): TestUser[] {
    return Array.from({ length: count }, () => this.create(overrides))
  }

  createAdmin(overrides?: Partial<TestUser>): TestUser {
    return this.create({ role: 'admin', ...overrides })
  }

  createGuest(overrides?: Partial<TestUser>): TestUser {
    return this.create({ role: 'guest', ...overrides })
  }
}

export class ProductFactory implements ITestDataFactory<TestProduct> {
  create(overrides?: Partial<TestProduct>): TestProduct {
    return {
      name: 'Product ' + randomString(6),
      price: randomPrice(),
      category: randomItem(categories),
      description: 'Description for product ' + randomString(4),
      ...overrides,
    }
  }

  createMany(count: number, overrides?: Partial<TestProduct>): TestProduct[] {
    return Array.from({ length: count }, () => this.create(overrides))
  }
}

export const userFactory = new UserFactory()
export const productFactory = new ProductFactory()