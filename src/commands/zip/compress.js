import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {createBrotliCompress} from 'node:zlib'
import {basename, sep} from 'node:path'

export const compress = async (path, destinationPath) => {
  try {
    const rs = createReadStream(path)
    const ws = createWriteStream(destinationPath + sep + basename(path) + '.br')
    const brotli = createBrotliCompress()
    pipeline(
      rs,
      brotli,
      ws
    )
  } catch {
    console.log('Operation failed')
  }

};

await compress();