import {EOL, cpus, homedir, userInfo, arch} from 'node:os'

export const os = (parameter) => {
  switch(parameter) {
    case '--EOL': {
      console.log(JSON.stringify(EOL))
      break
    }
    case '--cpus': {
      console.log(`Overall amount is: ${cpus().length}\n`, cpus().map(core => ({model: core.model, speed: core.speed/1000})))
      break
    }
    case '--homedir': {
      console.log(homedir())
      break
    }
    case '--username': {
      console.log(userInfo().username)
      break
    }
    case '--architecture': {
      console.log(arch())
      break
    }
    default: {
      console.log('Operation failed')
      break
    }
  }
}