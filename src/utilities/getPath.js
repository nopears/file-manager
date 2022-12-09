import {currentDir} from '../index.js'
import {isAbsolute, join} from 'node:path'

export const getAbsolutePath = (path) => {
  return isAbsolute(path) ? path : join(currentDir, path)
}
