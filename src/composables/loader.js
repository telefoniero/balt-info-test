import { ref } from 'vue'

export default function (trigger) {
  const isLoading = ref(false)
  // hooks
  const onBeforeLoad = () => (isLoading.value = true)
  const onLoad = () => (isLoading.value = false)
  return { isLoading, onLoad, onBeforeLoad }
}
