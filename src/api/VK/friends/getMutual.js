import getQueryString from '../getQueryString'
import convertMutuals from '@/api/VK/converters/mutuals'

export default async function getMutual(ids) {
  const preparedIds = [[]]

  ids.forEach(id => {
    const lastArray = preparedIds[preparedIds.length - 1]
    if (lastArray.length < 25) lastArray.push(`'${id}'`)
    else preparedIds.push(`'${id}'`)
  })

  console.log(preparedIds)

  // ids.forEach((id, index) => {
  //   const target_uids = ids.slice(index + 1).join(',')
  //   if (target_uids.length) {
  //     const queryString = getQueryString('friends.getMutual', {
  //       source_uid: id,
  //       target_uids
  //     })

  //     const request = fetch(queryString).then(res => res.json())

  //     requests.push(request)
  //     urls.push(queryString)
  //   }
  // })

  // const response = convertMutuals(await Promise.all(requests))

  return []
}
