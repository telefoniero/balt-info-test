import { onMounted, onUnmounted, ref } from 'vue'

const selector = '.page'

export default function (callback, offsetValue, ...refs) {
  let element,
    loading = false,
    offset = 5

  function scrollHandler() {
    if (loading === false) {
      if (element.getBoundingClientRect().bottom - 30 < window.innerHeight) {
        loading = true
        offset += offsetValue
        const params = [...refs].map(r => r.value)
        callback(...params, offset).then(() => (loading = false))
      }
    }
  }

  onMounted(() => {
    element = document.querySelector(selector)
    window.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })
}
