import {createReadStream, createWriteStream} from 'node:fs'
import {stat} from 'node:fs/promises'
import {pipeline} from 'node:stream/promises'
import {basename, sep} from 'node:path'

export const cp = async (path, newPath) => {
  newPath += sep + basename(path)

  try {
    await stat(path)

    await pipeline(
      createReadStream(path),
      createWriteStream(newPath)
    )
  } catch {
    console.log('Operation failed. An error occurred while copying')
  }

}