import {changeCurrentDir} from '../../index.js'
import {stat} from 'node:fs/promises'

export const cd = async (path) => {
  try {
    const stats = await stat(path)

    if (stats.isDirectory()) {
      changeCurrentDir(path)
    } else {
      console.log('Operation failed. It\'s a path to file')
    }
  } catch {
    console.log('Operation failed. Path doesn\'t exist')
  }
}