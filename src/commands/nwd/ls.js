import {readdir} from 'node:fs/promises'

export const ls = async (path) => {
  const files = await readdir(path, {withFileTypes: true})

  console.table(
    files
      .map((el) => ({Name: el.name, Type: el.isDirectory() ? 'directory' : 'file'}))
      .sort(a => a.Type === 'file' ? 1 : -1)
  )
}