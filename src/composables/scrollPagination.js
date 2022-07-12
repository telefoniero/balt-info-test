import { onMounted, onUnmounted, ref } from 'vue'

const selector = '.page'

export default function (callback, controls, ...args) {
  let element
  const { isLoading, step } = controls,
    offset = ref(5),
    count = ref(0)

  function scrollHandler() {
    if (isLoading.value === false) {
      const elOffset = Math.floor(element.getBoundingClientRect().bottom)

      if (elOffset <= window.innerHeight) {
        isLoading.value = true
        offset.value += step

        const params = [...args, offset].map(arg => arg?.value ?? arg)
        callback(...params).then(res => {
          count.value = res.count
          isLoading.value = false
        })
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

  return { offset, count }
}
