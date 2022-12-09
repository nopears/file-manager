import {rm as remove} from 'node:fs/promises'

export const rm = async (path) => {
  try {
    await remove(path)
  } catch {
    console.log('Operation failed. File doesn\'t exist')
  }
}