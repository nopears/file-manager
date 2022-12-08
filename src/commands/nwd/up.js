import {changeCurrentDir, currentDir, home} from '../../index.js'
import {sep} from 'node:path'

export const up = () => {
  if (currentDir !== home.split(sep).slice(0, -1).join(sep)) {
    changeCurrentDir(currentDir.split(sep).slice(0, -1).join(sep))
  }
}