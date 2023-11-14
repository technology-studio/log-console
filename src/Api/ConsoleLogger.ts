/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-12-27T11:05:06+01:00
 * @Copyright: Technology Studio
**/

import {
  type Options,
  Level,
  type WriteLog,
  configManager,
  type Payload,
} from '@txo-peer-dep/log'

export const LOGGER_KEY = 'console'

const levelToString = (level: Level): string => {
  const levelString = {
    [Level.NONE]: 'NONE',
    [Level.DEBUG]: 'DEBUG',
    [Level.INFO]: 'INFO',
    [Level.WARNING]: 'WARNING',
    [Level.ERROR]: 'ERROR',
  }[level]
  return (
    level != null
      ? levelString ?? level.toString()
      : ''
  )
}

// eslint-disable-next-line no-console
export const writeLogFactory = (consoleLogger = console.log): WriteLog => (
  level: Level,
  name: string,
  namespace: string,
  message: string,
  payload?: Payload,
  _options?: Options,
) => {
  consoleLogger('TSLG', levelToString(level), message, name, configManager.config.payloadProcessor(payload), namespace)
}

export const writeLog = writeLogFactory()
