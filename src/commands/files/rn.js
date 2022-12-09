import {rename} from 'node:fs/promises'
import {sep} from 'node:path'

export const rn = async (path, newFilename) => {
  try {
    await rename(path, `${path.split(sep).slice(0, -1).join(sep)}${sep}${newFilename}`)
  } catch {
    console.log('Operation failed. An error occurred while renaming')
  }
}