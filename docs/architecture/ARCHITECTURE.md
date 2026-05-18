# 🏛️ Framework Architecture

## Overview

This framework follows a **layered architecture** based on SOLID principles, designed to scale across Web, API, and Mobile testing from a single codebase.

## Architectural Layers

### 1. Test Suites Layer (`tests/`)
The outermost layer. Contains all test specs organized by type:
- `tests/web/` — Playwright browser automation tests
- `tests/api/` — REST API tests
- `tests/mobile/` — Appium mobile tests
- `tests/e2e/` — Cross-layer end-to-end flows

**Rule:** Test files only contain assertions and orchestration logic. Zero implementation details.

### 2. Page/Screen Object Layer (`src/web/`, `src/mobile/`)
Encapsulates all UI interactions behind clean interfaces:
- `src/web/pages/` — Page Object classes for web
- `src/web/components/` — Reusable UI component abstractions
- `src/mobile/screens/` — Screen Objects for mobile

**Rule:** No assertions here. Only actions and state queries.

### 3. API Client Layer (`src/api/`)
Abstracts all HTTP communication:
- `src/api/clients/` — Typed API clients extending BaseApiClient
- `src/api/schemas/` — JSON schema definitions for validation
- `src/api/interceptors/` — Request/response interceptors

**Rule:** Returns typed responses. Handles errors centrally.

### 4. Core Framework (`src/core/`)
The foundation everything else builds on:
- `src/core/interfaces/` — TypeScript contracts (IPage, IApiClient, etc.)
- `src/core/base/` — Abstract base classes (BasePage, BaseApiClient)
- `src/core/di/` — Dependency injection container

**Rule:** No test logic here. Pure framework infrastructure.

### 5. Shared Utilities (`src/shared/`)
Cross-cutting concerns:
- `src/shared/types/` — Global TypeScript types
- `src/shared/constants/` — Timeouts, HTTP status codes, tags
- `src/shared/helpers/` — Pure utility functions
- `src/shared/utils/` — Data factories

**Rule:** No dependencies on other layers.

### 6. Config Layer (`config/`)
Environment-aware configuration:
- `config/environments/` — Per-environment settings
- `config/browserstack/` — BrowserStack capabilities

**Rule:** No hardcoded values anywhere else in the codebase.

---

## SOLID Principles Applied

| Principle | Application |
|-----------|-------------|
| **S** — Single Responsibility | Each class has one job (LoginPage only handles login UI) |
| **O** — Open/Closed | BasePage is open for extension, closed for modification |
| **L** — Liskov Substitution | Any Page can replace BasePage without breaking tests |
| **I** — Interface Segregation | IPage, IApiClient, ITestDataFactory are focused interfaces |
| **D** — Dependency Inversion | Tests depend on abstractions, not concrete implementations |

---

## Data Flow
```
Test Spec
│
▼
Page Object / API Client        ← uses factories for test data
│
▼
Base Class (BasePage / BaseApiClient)
│
▼
Playwright (browser / request)
│
▼
Application Under Test
```
---

## Key Design Decisions

### Why Playwright for API testing?
Playwright's `APIRequestContext` shares the same session as the browser, enabling seamless auth token reuse between web and API layers in E2E tests.

### Why a custom DI Container?
Keeps page objects and API clients decoupled from test setup, making it trivial to swap implementations for different environments.

### Why per-environment config files?
Allows running the exact same test suite against dev, qa, or staging by simply changing the `ENV` variable — no code changes needed.