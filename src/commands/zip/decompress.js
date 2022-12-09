import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createBrotliDecompress} from 'node:zlib'
import {basename, sep} from 'node:path'
import {stat} from 'node:fs/promises'

export const decompress = async (path, destinationPath) => {
  try {
    await stat(path)

    if (path.endsWith('.br')) {
      await pipeline(
        createReadStream(path),
        createBrotliDecompress(),
        createWriteStream(destinationPath + sep + basename(path).slice(0,-3))
      )
    } else {
      throw new Error
    }
  } catch {
    console.log('Operation failed')
  }

}