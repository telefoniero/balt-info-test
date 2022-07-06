import { token, url, v } from './meta'

export default function (method, paramsObj) {
  const paramsEntries = Object.entries(paramsObj)
  const paramsString = paramsEntries.map(entry => entry.join('=')).join('&')
  return `${url}/${method}?${paramsString}&access_token=${token}&v=${v}`
}
