import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import _ from 'lodash'
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertCharacterFilter } from '@/assertions/assertCharacterFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы персонажей */
export function useCharactersFilter() {
  const router = useRouter()
  const route = useRoute()

  /** Массив статусов персонажей */
  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  /** Массив полов персонажей */
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  /** Объект с состоянием фильтров страницы персонажей */
  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters
    assertCharacterFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.species === 'undefined') modalValue.species = ''
    if (typeof modalValue.type === 'undefined') modalValue.type = ''
    if (typeof modalValue.status === 'undefined' || !statusFilter.includes(modalValue.status))
      modalValue.status = 'Any'
    if (typeof modalValue.gender === 'undefined' || !genderFilter.includes(modalValue.gender))
      modalValue.gender = 'Any'
    return modalValue
  })

  /**
   * Изменение состояния фильтров страницы персонажей, происходит через роутер
   * @param val значение изменяемого фильтра
   * @param filterId название изменяемого фильтра
   */
  function changeModalValueRun(val: any, filterId: TFilterFields) {
    const query = { ...route.query, [filterId]: val }
    if (
      query[filterId] === '' ||
      (['status', 'gender'].includes(filterId) && query[filterId] === 'Any')
    ) {
      delete query[filterId]
    }
    router.push({ name: 'charactersFirst', query })
  }
  const changeModalValue = _.debounce(changeModalValueRun, 600, { maxWait: 2000 })

  /**
   * Очистка состояния фильтров страницы персонажей, происходит через роутер
   */
  function clearModalValue(): void {
    router.push({ name: 'charactersFirst' })
  }

  return { itemsStatus, itemsGender, modalValue, changeModalValue, clearModalValue }
}
