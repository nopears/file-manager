import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createBrotliCompress} from 'node:zlib'
import {basename, sep} from 'node:path'
import {stat} from 'node:fs/promises'

export const compress = async (path, destinationPath) => {
  try {
    await stat(path)

    await pipeline(
      createReadStream(path),
      createBrotliCompress(),
      createWriteStream(destinationPath + sep + basename(path) + '.br')
    )
  } catch {
    console.log('Operation failed')
  }

}