import { dev } from './dev'
import { qa } from './qa'
import { staging } from './staging'

const env = process.env.ENV || 'qa'

const configs: Record<string, typeof qa> = { dev, qa, staging }

export const getConfig = () => {
  if (!configs[env]) throw new Error(Unknown environment: )
  return configs[env]
}
