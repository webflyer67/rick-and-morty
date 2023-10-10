// mouse.js
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

export function useRouteHelpers() {
  const route = useRoute()

  const realPage: ComputedRef<number> = computed(() => {
    let page = Number(route?.params?.page)
    if (!(page > 0)) {
      page = 1
    }
    return page
  })

  return { realPage }
}
