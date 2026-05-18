import { config as dev } from './dev'
import { config as qa } from './qa'
import { config as staging } from './staging'

const env = process.env.ENV || 'qa'

const configs: Record<string, typeof qa> = { dev, qa, staging }

export const getConfig = () => {
  if (!configs[env]) throw new Error('Unknown environment: ' + env)
  return configs[env]
}