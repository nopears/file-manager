import {createReadStream} from 'node:fs'
import {pipeline} from 'node:stream/promises'
import {writeStream} from '../../utilities/writeStream.js'

export const cat = async (path) => {
  try {
    const rs = createReadStream(path, {encoding:'utf-8'})

    await pipeline(rs, writeStream())
  } catch {
    console.log('Operation failed. An error occurred')
  }

}