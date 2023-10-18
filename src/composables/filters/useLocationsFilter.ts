import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertLocationFilter } from '@/assertions/assertLocationFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы локаций */
export function useLocationsFilter() {
  const router = useRouter()
  const route = useRoute()

  /** Массив статусов локаций */
  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  /** Массив полов локаций */
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  /** Объект с состоянием фильтров страницы локаций */
  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters
    assertLocationFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.dimension === 'undefined') modalValue.dimension = ''
    if (typeof modalValue.type === 'undefined') modalValue.type = ''
    return modalValue
  })

  /**
   * Изменение состояния фильтров страницы локаций, происходит через роутер
   * @param val значение изменяемого фильтра
   * @param filterId название изменяемого фильтра
   */
  function changeModalValue(val: any, filterId: TFilterFields): void {
    const query = { ...route.query, [filterId]: val }
    if (
      query[filterId] === '' ||
      (['status', 'gender'].includes(filterId) && query[filterId] === 'Any')
    ) {
      delete query[filterId]
    }
    router.push({ name: 'locationsFirst', query })
  }

  /**
   * Очистка состояния фильтров страницы локаций, происходит через роутер
   */
  function clearModalValue(): void {
    router.push({ name: 'locationsFirst' })
  }

  return { itemsStatus, itemsGender, modalValue, changeModalValue, clearModalValue }
}
