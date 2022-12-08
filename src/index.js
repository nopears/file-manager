import process, {argv, stdin as input, stdout as output} from 'node:process'
import {homedir} from 'node:os'
import {createInterface} from 'node:readline/promises'
import {handler} from './commandHandler.js'

const username = argv.slice(2)[0].split('=')[1]

const home = homedir()
let currentDir = home

const changeCurrentDir = (path) => {
  currentDir = path
}

process.on('SIGINT', () => {
  process.exit(0)
})

process.on('exit', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
})

const start = async () => {
  console.log(`Welcome to the File Manager, ${username}!`)
  console.log(`You are currently in ${currentDir}`)

  const rl = createInterface({ input, output })

  while (1) {
    await handler(await rl.question(''))

    console.log(`You are currently in ${currentDir}`)
  }
}

start()

export {currentDir, changeCurrentDir, home}