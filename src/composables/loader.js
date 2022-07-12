import { ref } from 'vue'

export default function (flag) {
  const isLoading = flag ?? ref(false)
  // hooks
  const onBeforeLoad = () => (isLoading.value = true)
  const onLoad = () => (isLoading.value = false)
  return { isLoading, onLoad, onBeforeLoad }
}
