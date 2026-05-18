import { faker } from '@faker-js/faker'
import { TestUser, TestProduct } from '../types'
import { ITestDataFactory } from '../../core/interfaces'

export class UserFactory implements ITestDataFactory<TestUser> {
  create(overrides?: Partial<TestUser>): TestUser {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: 'Test@' + faker.internet.password({ length: 8 }),
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
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price({ min: 1, max: 1000 })),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      ...overrides,
    }
  }

  createMany(count: number, overrides?: Partial<TestProduct>): TestProduct[] {
    return Array.from({ length: count }, () => this.create(overrides))
  }
}

export const userFactory = new UserFactory()
export const productFactory = new ProductFactory()