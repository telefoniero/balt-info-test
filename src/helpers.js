function timeout(f, ms) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => f.apply(this, arguments), ms)
  }
}

function arrayIntersection(...arrays) {
  return arrays.reduce((intersection, iterable) =>
    intersection.filter(a => iterable.includes(a))
  )
}

export { timeout, arrayIntersection }
