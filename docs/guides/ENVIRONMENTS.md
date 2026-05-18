# 🌍 Environment Configuration Guide

## Available Environments

| Environment | Purpose | Stability |
|-------------|---------|-----------|
| `dev` | Active development | Low — frequent changes |
| `qa` | Quality assurance | Medium — stable for testing |
| `staging` | Pre-production | High — mirrors production |
| `browserstack` | Cloud cross-browser | N/A — external service |

---

## How to Switch Environments

### Via npm scripts
```bash
npm run test:dev      # ENV=dev
npm run test:all      # ENV=qa (default)
npm run test:staging  # ENV=staging
```

### Via environment variable
```bash
# Windows PowerShell
$env:ENV="staging"; npx playwright test

# Linux/Mac
ENV=staging npx playwright test
```

### Via .env file
```env
ENV=qa
BASE_URL=https://qa.example.com
API_URL=https://api-qa.example.com
```

---

## Adding a New Environment

1. Create `config/environments/production.ts`:
```typescript
export const config = {
  baseUrl: 'https://example.com',
  apiUrl: 'https://api.example.com',
  timeout: 60000,
  retries: 3,
}
```

2. Register it in `config/environments/index.ts`:
```typescript
import { config as production } from './production'
const configs = { dev, qa, staging, production }
```

---

## Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `ENV` | Target environment | `qa` |
| `BASE_URL` | Override base URL | From config |
| `API_URL` | Override API URL | From config |
| `BROWSERSTACK_USERNAME` | BrowserStack user | — |
| `BROWSERSTACK_ACCESS_KEY` | BrowserStack key | — |
| `CI` | Set to `true` in CI/CD | — |