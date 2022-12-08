import {ls} from './commands/nwd/ls.js'
import {up} from './commands/nwd/up.js'
import {cd} from './commands/nwd/cd.js'
import {cat} from './commands/files/cat.js'
import {add} from './commands/files/add.js'
import {rn} from './commands/files/rn.js'
import {cp} from './commands/files/cp.js'
import {mv} from './commands/files/mv.js'
import {rm} from './commands/files/rm.js'
import {os} from './commands/os/os.js'
import {hash} from './commands/hash/hash.js'
import {compress} from './commands/zip/compress.js'
import {decompress} from './commands/zip/decompress.js'

import {currentDir} from './index.js'
import {getAbsolutePath} from './utilities/getPath.js'

import process from 'node:process'

export const handler = async (command) => {
  const action = command.split(' ')[0]

  switch (action) {
    case 'ls': {
      await ls(currentDir)
      break
    }
    case 'up': {
      up()
      break
    }
    case 'cd': {
      await cd(getAbsolutePath(command.split(' ')[1]))
      break
    }
    case 'cat': {
      await cat(getAbsolutePath(command.split(' ')[1]))
      break
    }
    case 'cp': {
      await cp(getAbsolutePath(command.split(' ')[1]), getAbsolutePath(command.split(' ')[2]))
      break
    }
    case 'add': {
      await add(command.split(' ')[1])
      break
    }
    case 'rn': {
      await rn(getAbsolutePath(command.split(' ')[1]), command.split(' ')[2])
      break
    }
    case 'mv': {
      await mv(getAbsolutePath(command.split(' ')[1]), getAbsolutePath(command.split(' ')[2]))
      break
    }
    case 'rm': {
      await rm(getAbsolutePath(command.split(' ')[1]))
      break
    }
    case 'os': {
      os(command.split(' ')[1])
      break
    }
    case 'hash': {
      await hash(getAbsolutePath(command.split(' ')[1]))
      break
    }
    case 'compress': {
      await compress(getAbsolutePath(command.split(' ')[1]), getAbsolutePath(command.split(' ')[2]))
      break
    }
    case 'decompress': {
      await decompress(getAbsolutePath(command.split(' ')[1]), getAbsolutePath(command.split(' ')[2]))
      break
    }
    case '.exit': {
      process.exit(0)
      break
    }
    default: {
      console.log('Operation failed')
      break
    }
  }
}