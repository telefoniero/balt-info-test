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

function getAge(year, month, day) {
  var now = new Date()
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  var dob = new Date(year, month, day)
  var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
  var age

  age = today.getFullYear() - dob.getFullYear()
  if (today < dobnow) {
    age = age - 1
  }
  return age
}

function copyFunc(func, ...args) {
  return func.bind(this, ...args)
}

export { timeout, arrayIntersection, getAge, copyFunc }
