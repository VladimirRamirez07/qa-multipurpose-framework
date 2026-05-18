export const TIMEOUTS = {
  short: 5000,
  medium: 15000,
  long: 30000,
  extraLong: 60000,
  pageLoad: 45000,
} as const

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  SERVER_ERROR: 500,
} as const

export const TEST_TAGS = {
  smoke: '@smoke',
  regression: '@regression',
  critical: '@critical',
  api: '@api',
  web: '@web',
  mobile: '@mobile',
  e2e: '@e2e',
} as const

export const ENVIRONMENTS = {
  dev: 'dev',
  qa: 'qa',
  staging: 'staging',
  browserstack: 'browserstack',
} as const
