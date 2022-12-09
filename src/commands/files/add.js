import {writeFile} from 'node:fs/promises'
import {currentDir} from '../../index.js'
import {sep} from 'node:path'

export const add = async (fileName) => {
  try {
    await writeFile(`${currentDir}${sep}${fileName}`, '', {flag:'wx'})
  } catch {
    console.log('Operation failed. File already exists!')
  }
}