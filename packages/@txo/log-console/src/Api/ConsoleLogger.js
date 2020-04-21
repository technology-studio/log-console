/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2017-12-27T11:05:06+01:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

import {
  type Options,
  type Level,
  type WriteLog,
  levels,
  configManager,
} from '@txo-peer-dep/log'

export const LOGGER_KEY = 'console'

const levelToString = (level: Level): string => (
  {
    [levels.DEBUG]: 'DEBUG',
    [levels.INFO]: 'INFO',
    [levels.WARNING]: 'WARNING',
    [levels.ERROR]: 'ERROR',
  }[level] || (level && level.toString()) || ''
)

export const writeLogFactory = (consoleLogger: Function = console.log): WriteLog =>
  (level: Level, name: string, namespace: string, message: string, payload?: any, options?: Options) => {
    consoleLogger('TSLG', levelToString(level), message, name, configManager.config.payloadProcessor(payload), namespace)
  }

export const writeLog = writeLogFactory()
