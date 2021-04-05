/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2017-12-27T11:05:06+01:00
 * @Copyright: Technology Studio
**/

import {
  Options,
  Level,
  WriteLog,
  configManager,
  Payload,
} from '@txo-peer-dep/log'

export const LOGGER_KEY = 'console'

const levelToString = (level: Level): string => (
  {
    [Level.NONE]: 'NONE',
    [Level.DEBUG]: 'DEBUG',
    [Level.INFO]: 'INFO',
    [Level.WARNING]: 'WARNING',
    [Level.ERROR]: 'ERROR',
  }[level] || (level?.toString()) || ''
)

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
