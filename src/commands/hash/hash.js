import {createHash} from 'node:crypto'
import {readFile} from 'node:fs/promises'

export const hash = async (path) => {
  try {
    const data = await readFile(path)

    const hash = createHash('sha256')

    hash.update(data)

    console.log(hash.digest('hex'))
  } catch {
    console.log('Operation failed')
  }

}