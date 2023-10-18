import type { ComputedRef } from 'vue'
import type { IInfo } from '@/types/IInfo'
import type { ILocation } from '@/types/dataset/ILocation'
import type { IQueryLocation } from '@/types/query/IQueryLocation'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { LOCATIONS_QUERY } from '@/graphql/LOCATIONS_QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertLocation } from '@/assertions/assertLocation'

/** Получение данных для страницы локаций */
export function useLocations(
  page: ComputedRef<number>,
  modalValue: ComputedRef<IRouteQueryFilters>
) {
  const { result, loading, error } = useQuery<IQueryLocation>(LOCATIONS_QUERY, () => {
    const filter: IRouteQueryFilters = {}
    if (modalValue.value.name != '') {
      filter.name = modalValue.value.name
    }
    if (modalValue.value.type != '') {
      filter.type = modalValue.value.type
    }
    if (modalValue.value.dimension != '') {
      filter.dimension = modalValue.value.dimension
    }
    return {
      page: page.value,
      filter
    }
  })

  const info: ComputedRef<IInfo> = computed(() => {
    let info: IInfo = { count: 0, pages: 0 }
    if (result.value?.locations?.info) {
      info = result.value?.locations?.info
      assertInfo(info)
    }
    return info
  })

  /** Массив объектов с локациями */
  const items: ComputedRef<Array<ILocation>> = computed(() => {
    const locations = result.value?.locations?.results ?? []
    for (const location of locations) {
      assertLocation(location)
    }
    return locations
  })

  return { info, items, loading, error }
}
