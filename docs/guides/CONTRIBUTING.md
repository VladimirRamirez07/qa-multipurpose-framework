# 🤝 Contributing Guide

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Git
- VS Code (recommended)

### Setup
```bash
git clone https://github.com/VladimirRamirez07/qa-multipurpose-framework.git
cd qa-multipurpose-framework
npm install
npx playwright install
cp .env.example .env
```

---

## 📁 Where to Add Things

### New Web Page Object
1. Create `src/web/pages/YourPage.ts`
2. Extend `BasePage`
3. Export from `src/web/pages/index.ts`

```typescript
import { Page } from '@playwright/test'
import { BasePage } from '../../core/base'

export class YourPage extends BasePage {
  private readonly someSelector = '[data-qa="some-element"]'

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl)
  }

  async doSomething(): Promise<void> {
    await this.page.click(this.someSelector)
  }
}
```

### New API Client
1. Create `src/api/clients/YourApiClient.ts`
2. Extend `BaseApiClient`
3. Export from `src/api/clients/index.ts`

```typescript
import { APIRequestContext } from '@playwright/test'
import { BaseApiClient } from '../../core/base'

export class YourApiClient extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request, 'https://your-api.com')
  }

  async getItems(): Promise<unknown> {
    return this.get('/items')
  }
}
```

### New Test
1. Create spec file in the right folder:
   - Web: `tests/web/your-feature.spec.ts`
   - API: `tests/api/your-resource.spec.ts`
   - E2E: `tests/e2e/your-flow.spec.ts`
2. Always use `test.describe` with tags
3. Always use `test.beforeEach` for setup

```typescript
import { test, expect } from '@playwright/test'

test.describe('@web @smoke Your Feature', () => {
  test.beforeEach(async ({ page }) => {
    // setup
  })

  test('should do something', async ({ page }) => {
    // test
  })
})
```

---

## 🏷️ Tagging Strategy

Always tag your tests with the appropriate tags from `src/shared/constants`:

| Tag | When to use |
|-----|-------------|
| `@smoke` | Critical happy path tests |
| `@regression` | Full regression suite |
| `@web` | Browser UI tests |
| `@api` | REST API tests |
| `@mobile` | Mobile app tests |
| `@e2e` | Cross-layer flows |
| `@critical` | Business-critical scenarios |

---

## ✅ Test Writing Guidelines

- **One assertion concept per test** — keep tests focused
- **Use data factories** — never hardcode test data
- **Descriptive test names** — `should display error when email is invalid`
- **No sleeping** — use `waitForSelector` or `waitForResponse`
- **Clean up after tests** — restore state in `afterEach` if needed

---

## 🔀 Git Workflow

### Branch naming
feat/add-checkout-page
fix/login-timeout-issue
test/add-payment-api-tests
docs/update-architecture
### Commit messages (Conventional Commits)
feat: add checkout page object
fix: increase timeout for slow network tests
test: add payment API test suite
docs: update contributing guide
ci: add webkit to test matrix
refactor: extract common selectors to base component
### Pull Request checklist
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] No hardcoded URLs or credentials
- [ ] TypeScript compiles without errors (`npm run compile`)
- [ ] Follows existing naming conventions

---

## 🚀 Running Tests Locally

```bash
# All tests
npm run test:all

# By type
npm run test:web
npm run test:api

# By environment
npm run test:dev
npm run test:staging

# Headed mode (see the browser)
npx playwright test tests/web --headed

# Specific test file
npx playwright test tests/web/login.spec.ts
```