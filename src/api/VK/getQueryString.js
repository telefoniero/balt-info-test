import { access_token, url, v } from './meta'

const count = 5

export default function (method, paramsObj, offset = 0) {
  paramsObj = { ...paramsObj, count, offset, access_token, v }
  const paramsEntries = Object.entries(paramsObj)
  const paramsString = paramsEntries.map(entry => entry.join('=')).join('&')
  return `${url}/${method}?${paramsString}`
}
