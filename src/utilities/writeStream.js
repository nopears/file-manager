import {Writable} from 'node:stream'

export const writeStream = () => {
  return new Writable({
    decodeStrings: false,
    write(chunk, encoding, callback) {
      console.log(chunk)
      callback()
    },
  })
}