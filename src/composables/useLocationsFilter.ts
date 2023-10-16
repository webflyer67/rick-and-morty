import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertLocationFilter } from '@/assertions/assertLocationFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы персонажей */
export function useLocationsFilter() {
  const router = useRouter()
  const route = useRoute()

  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters

    assertLocationFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.dimension === 'undefined') modalValue.dimension = ''
    if (typeof modalValue.type === 'undefined') modalValue.type = ''

    return modalValue
  })

  function filterClick(val: any, filterId: TFilterFields) {
    const query = { ...route.query, [filterId]: val }
    if (
      query[filterId] === '' ||
      (['status', 'gender'].includes(filterId) && query[filterId] === 'Any')
    ) {
      delete query[filterId]
    }
    router.push({ name: 'locationsFirst', query })
  }

  function cancelClick() {
    router.push({ name: 'locationsFirst' })
  }

  return { itemsStatus, itemsGender, modalValue, filterClick, cancelClick }
}
