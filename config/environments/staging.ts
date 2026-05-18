export const config = {
  baseUrl: process.env.BASE_URL || 'https://staging.example.com',
  apiUrl: process.env.API_URL || 'https://api-staging.example.com',
  timeout: 45000,
  retries: 3,
}
