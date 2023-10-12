import type { ComputedRef } from 'vue'
import type { IMenuItem } from '@/types/IMenuItem'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useMenu() {
  /** Данные для формирования меню */
  const menu: IMenuItem[] = [
    {
      id: 'characters',
      to: { path: '/characters' }
    },
    {
      id: 'locations',
      to: { path: '/locations' }
    },
    {
      id: 'episodes',
      to: { path: '/episodes' }
    }
  ]

  const route = useRoute()

  /** Текущий пункт меню */
  const currentMenuItem: ComputedRef<IMenuItem | null> = computed(() => {
    const found = menu.find((n) => n.id == route?.name || n.to.path == route?.path)
    return found ?? null
  })

  return { currentMenuItem, menu }
}
