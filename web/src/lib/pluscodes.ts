import { encode as encode_from_google, decode as decode_from_google } from './openlocationcode'

const encode  = ({ latitude, longitude, codeLength }, callback) => {
  // ?? if (callback) callback(false, result)
  try {
    return encode_from_google(latitude, longitude, codeLength)
  } catch (error) {
    console.log(`error`, error)
    return false // { error }
  }
}

const decode = (plusCode) => {
  try {
    return decode_from_google(plusCode)
  } catch (error) {
    console.log(`error`, error)
    return false // { error }
  }
}

const decodePromise = (plusCode) => new Promise((resolve, reject) => {
  try {
    const result = decode_from_google(plusCode)
    resolve(result)
  } catch (error) {
    reject(error)
  }
})
const encodePromise = ({ latitude, longitude, codeLength }) => new Promise((resolve, reject) => {
  try {
    const result = encode_from_google(latitude, longitude, codeLength)
    resolve(result)
  } catch (error) {
    reject(error)
  }
})
export {
  // OpenLocationCode,
  encode,
  decode,
  decodePromise,
  encodePromise,
}