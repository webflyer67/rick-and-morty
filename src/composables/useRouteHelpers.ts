import type { TID } from '@/types/types'

import { computed, type ComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/** Хелперы роутера */
export function useRouteHelpers() {
  const route = useRoute()

  /** Реальная страница из route.params.page, либо 1 */
  const realPage: ComputedRef<number> = computed(() => {
    let page = Number(route?.params?.page)
    if (!(page > 0)) {
      page = 1
    }
    return page
  })

  /** id сущности из route.params.id либо 0 */
  const id: ComputedRef<number> = computed(() => {
    return Number(route?.params?.id) ?? 0
  })

  const router = useRouter()
  /**
   * Универсальный переход по страницам пагинации
   * @param page Номер страницы
   * @param menuId Id меню
   */
  function pageClick(page: number, menuId: 'characters' | 'locations' | 'episodes'): void {
    if (page == 1) {
      router.push({ name: `${menuId}First`, query: route.query })
    } else {
      router.push({ name: menuId, params: { page }, query: route.query })
    }
  }

  /**
   * Обработчик нажатия на кнопку Подробнее...
   * @param id id сущности(персожа/локации/серии)
   * @param menuId название этой сущности
   */
  function moreClick(id: TID, menuId: 'character' | 'location' | 'episode'): void {
    router.push({ name: menuId, params: { id } })
  }

  return {
    realPage,
    id,
    pageClick,
    moreClick
  }
}
