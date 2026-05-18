export const config = {
  baseUrl: process.env.BASE_URL || 'https://qa.example.com',
  apiUrl: process.env.API_URL || 'https://api-qa.example.com',
  timeout: 30000,
  retries: 2,
}
