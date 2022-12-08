import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createBrotliDecompress} from 'node:zlib'
import {basename, sep} from 'node:path'

export const decompress = async (path, destinationPath) => {
  try {
    const rs = createReadStream(path)
    const ws = createWriteStream(destinationPath + sep + basename(path).slice(0,-3))
    const brotli = createBrotliDecompress()
    pipeline(
      rs,
      brotli,
      ws
    )
  } catch {
    console.log('Operation failed')
  }

};

await decompress();