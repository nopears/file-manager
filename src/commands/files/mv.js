import {createReadStream, createWriteStream} from 'node:fs'
import {rm, stat} from 'node:fs/promises'
import {pipeline} from 'node:stream/promises'
import {basename, sep} from 'node:path'

export const mv = async (path, newPath) => {
  newPath += sep + basename(path)

  try {
    await stat(path)

    await pipeline(
      createReadStream(path),
      createWriteStream(newPath)
    )

    await rm(path)
  } catch {
    console.log('Operation failed. An error occurred while moving')
  }

}