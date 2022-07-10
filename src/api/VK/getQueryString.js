import { access_token, url, v } from './meta'

const count = 5

export default function (method, paramsObj) {
  paramsObj = { ...paramsObj, count, access_token, v }
  const paramsEntries = Object.entries(paramsObj)
  const paramsString = paramsEntries.map(entry => entry.join('=')).join('&')
  return `${url}/${method}?${paramsString}`
}
