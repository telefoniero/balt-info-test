import { toRefs } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export default function () {
  onBeforeRouteUpdate((to, from) => {
    
  })
  return toRefs(useRoute().query)
}
