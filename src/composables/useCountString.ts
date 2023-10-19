import type { IInfo } from '@/types/IInfo'

import { computed, type ComputedRef } from 'vue'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

export function useCountString(info: ComputedRef<IInfo>) {
  const { realPage } = useRouteHelpers()

  /** Строка для отображения информации и количестве страниц(возле пагинатора) */
  const countString: ComputedRef<string> = computed(() => {
    const from = (realPage.value - 1) * 20 + 1
    let to = realPage.value * 20
    if (info.value.count != null && info.value.count < realPage.value * 20) {
      to = info.value.count
    }
    return `${from} - ${to} of ${info.value.count}`
  })
  return {
    countString
  }
}
