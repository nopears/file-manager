import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createBrotliDecompress} from 'node:zlib'
import {basename, sep} from 'node:path'

export const decompress = async (path, destinationPath) => {
  try {
    await pipeline(
      createReadStream(path),
      createBrotliDecompress(),
      createWriteStream(destinationPath + sep + basename(path).slice(0,-3))
    )
  } catch {
    console.log('Operation failed')
  }

};

await decompress()