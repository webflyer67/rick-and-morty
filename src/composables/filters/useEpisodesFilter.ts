import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertEpisodeFilter } from '@/assertions/assertEpisodeFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы серий */
export function useEpisodesFilter() {
  const router = useRouter()
  const route = useRoute()

  /** Массив статусов серий */
  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  /** Массив полов серий */
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  /** Объект с состоянием фильтров страницы серии */
  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters
    assertEpisodeFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.episode === 'undefined') modalValue.episode = ''
    return modalValue
  })

  /**
   * Изменение состояния фильтров страницы серий, происходит через роутер
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
    router.push({ name: 'episodesFirst', query })
  }

  /**
   * Очистка состояния фильтров страницы серий, происходит через роутер
   */
  function clearModalValue(): void {
    router.push({ name: 'episodesFirst' })
  }

  return { itemsStatus, itemsGender, modalValue, changeModalValue, clearModalValue }
}
