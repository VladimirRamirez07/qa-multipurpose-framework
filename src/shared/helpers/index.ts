export const wait = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms))

export const retry = async <T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> => {
  try {
    return await fn()
  } catch (error) {
    if (retries <= 0) throw error
    await wait(delay)
    return retry(fn, retries - 1, delay)
  }
}

export const formatDate = (date: Date = new Date()): string =>
  date.toISOString().split('T')[0]

export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const randomString = (length = 8): string =>
  Math.random().toString(36).substring(2, length + 2)

export const slugify = (text: string): string =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

export const parseEnv = <T>(key: string, fallback: T): T => {
  const value = process.env[key]
  if (value === undefined) return fallback
  if (typeof fallback === 'number') return Number(value) as T
  if (typeof fallback === 'boolean') return (value === 'true') as T
  return value as T
}
