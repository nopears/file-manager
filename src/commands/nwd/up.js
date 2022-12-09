import {changeCurrentDir, currentDir, home} from '../../index.js'
import {sep} from 'node:path'

const regex = /^.*?:\/$/

export const up = () => {
  if (currentDir !== home.split(sep).slice(0, -1).join(sep) && !(regex.test(currentDir.toUpperCase()))) {
    changeCurrentDir(currentDir.split(sep).slice(0, -1).join(sep)+sep)
  }
}