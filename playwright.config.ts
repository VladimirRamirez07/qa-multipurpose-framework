import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

const ENV = process.env.ENV || 'qa'
const BASE_URL = process.env.BASE_URL || 'https://qa.example.com'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 4 : 2,
  timeout: 45000,
  expect: {
    timeout: 10000,
  },

  reporter: [
    ['list'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'reports/allure',
      suiteTitle: true,
    }],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
  ],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'tests/web/**/*.spec.ts',
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: 'tests/web/**/*.spec.ts',
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testMatch: 'tests/web/**/*.spec.ts',
    },
    {
      name: 'api',
      testMatch: 'tests/api/**/*.spec.ts',
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
      testMatch: 'tests/mobile/**/*.spec.ts',
    },
    {
      name: 'e2e',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'tests/e2e/**/*.spec.ts',
    },
  ],
})
