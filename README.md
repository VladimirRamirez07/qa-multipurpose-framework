@"
# 🧪 QA Multipurpose Framework

> Enterprise-grade test automation ecosystem covering **Web**, **API** and **Mobile** from a single repository, applying SOLID principles and clean architecture.

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.60-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-2.x-662d91?style=for-the-badge&logo=appium&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-Reports-orange?style=for-the-badge&logo=qase&logoColor=white)
![BrowserStack](https://img.shields.io/badge/BrowserStack-Integrated-f48024?style=for-the-badge&logo=browserstack&logoColor=white)
![CI/CD](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Reporting](#-reporting)
- [Environments](#-environments)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Design Patterns](#-design-patterns)

---

## 🎯 Overview

This framework demonstrates how a single repository can serve as the backbone for an entire QA organization. It provides a unified, scalable, and maintainable test automation solution across three testing layers:

| Layer | Tool | Coverage |
|-------|------|----------|
| 🌐 **Web** | Playwright + POM | UI regression, cross-browser, visual |
| 🔌 **API** | Playwright APIRequestContext | REST, schema validation, contract |
| 📱 **Mobile** | Appium 2.x | iOS & Android native/hybrid apps |
| ☁️ **Cloud** | BrowserStack | Real devices & browsers at scale |

---

## 🏛️ Architecture
```
┌─────────────────────────────────────────────────┐
│              TEST SUITES LAYER                  │
│     Web Tests │ API Tests │ Mobile Tests        │
├─────────────────────────────────────────────────┤
│              PAGE OBJECT MODEL                  │
│   Pages │ Components │ Screens │ API Clients    │
├─────────────────────────────────────────────────┤
│              CORE FRAMEWORK                     │
│  Base Classes │ DI Container │ Interfaces       │
├─────────────────────────────────────────────────┤
│              SHARED UTILITIES                   │
│   Helpers │ Constants │ Types │ Faker Data      │
├─────────────────────────────────────────────────┤
│              CONFIG LAYER                       │
│    Dev │ QA │ Staging │ BrowserStack            │
└─────────────────────────────────────────────────┘
```
---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Language | TypeScript 5.x | Type-safe test development |
| Web Testing | Playwright 1.60 | Cross-browser automation |
| Mobile Testing | Appium 2.x | iOS & Android automation |
| Reporting | Allure Reports | Visual test reporting |
| Cloud Testing | BrowserStack | Real device testing |
| Data Generation | Faker.js | Dynamic test data |
| CI/CD | GitHub Actions | Automated pipelines |
| Pattern | Page Object Model | Maintainable test structure |
| Architecture | SOLID Principles | Scalable framework design |

---

## 📁 Project Structure

\`\`\`
qa-multipurpose-framework/
├── 📁 src/
│   ├── 📁 web/
│   │   ├── pages/          # Page Object classes
│   │   ├── components/     # Reusable UI components
│   │   └── fixtures/       # Web test fixtures
│   ├── 📁 api/
│   │   ├── clients/        # API client classes
│   │   ├── schemas/        # JSON schema validators
│   │   └── interceptors/   # Request/response interceptors
│   ├── 📁 mobile/
│   │   ├── screens/        # Screen Object classes
│   │   ├── gestures/       # Mobile gesture helpers
│   │   └── fixtures/       # Mobile test fixtures
│   ├── 📁 core/
│   │   ├── base/           # Base test classes
│   │   ├── di/             # Dependency injection
│   │   └── interfaces/     # TypeScript interfaces
│   └── 📁 shared/
│       ├── utils/          # Utility functions
│       ├── helpers/        # Test helpers
│       ├── constants/      # Global constants
│       └── types/          # Shared TypeScript types
├── 📁 config/
│   ├── environments/       # dev / qa / staging configs
│   └── browserstack/       # BrowserStack capabilities
├── 📁 tests/
│   ├── web/                # Web test specs
│   ├── api/                # API test specs
│   ├── mobile/             # Mobile test specs
│   └── e2e/                # End-to-end flows
├── 📁 .github/workflows/   # CI/CD pipelines
├── 📁 docs/                # Technical documentation
├── 📁 reports/             # Allure output
├── playwright.config.ts    # Main Playwright config
├── tsconfig.json           # TypeScript config
└── package.json            # Scripts & dependencies
\`\`\`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Java 11+ (for Appium)
- Android Studio / Xcode (for mobile)

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/VladimirRamirez07/qa-multipurpose-framework.git
cd qa-multipurpose-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Configure environment
cp .env.example .env
\`\`\`

---

## ▶️ Running Tests

\`\`\`bash
# Web tests (all browsers)
npm run test:web

# API tests
npm run test:api

# Mobile tests
npm run test:mobile

# Full E2E suite
npm run test:e2e

# All tests
npm run test:all

# Parallel execution (4 workers)
npm run test:parallel

# By environment
npm run test:dev
npm run test:staging

# Cloud (BrowserStack)
npm run test:browserstack
\`\`\`

---

## 📊 Reporting

This framework uses **Allure Reports** for rich, interactive test reporting with screenshots, videos, and step-by-step logs.

\`\`\`bash
# Generate report
npm run allure:generate

# Open report in browser
npm run allure:open

# Live serve
npm run allure:serve
\`\`\`

---

## 🌍 Environments

| Environment | Base URL | API URL | Retries |
|-------------|----------|---------|---------|
| dev | dev.example.com | api-dev.example.com | 1 |
| qa | qa.example.com | api-qa.example.com | 2 |
| staging | staging.example.com | api-staging.example.com | 3 |

---

## ⚙️ CI/CD Pipeline

GitHub Actions pipelines run automatically on every push and pull request:

- ✅ TypeScript compilation check
- ✅ Web tests on Chromium, Firefox & WebKit
- ✅ API tests
- ✅ Allure report generation
- ✅ Test results published as artifacts

---

## 🎨 Design Patterns

| Pattern | Application |
|---------|-------------|
| **Page Object Model** | Every UI screen has its own class |
| **Factory Pattern** | Dynamic test data generation |
| **Singleton** | Driver/browser instance management |
| **Dependency Injection** | Decoupled service layer |
| **Strategy Pattern** | Environment-based configuration |
| **Builder Pattern** | API request construction |

---

## 👨‍💻 Author

**Vladimir Ramirez**
> QA Automation Engineer passionate about building scalable test frameworks that deliver real business value.

[![GitHub](https://img.shields.io/badge/GitHub-VladimirRamirez07-181717?style=for-the-badge&logo=github)](https://github.com/VladimirRamirez07)

---

*Built with ❤️ and a lot of ☕*
"@ | Set-Content README.md -Encoding UTF8