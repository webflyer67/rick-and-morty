import type { ComputedRef } from 'vue'
import type { IInfo } from '@/types/IInfo'
import type { ILocation } from '@/types/dataset/ILocation'
import type { IQueryLocation } from '@/types/query/IQueryLocation'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { LOCATIONS_QUERY } from '@/graphql/QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertLocation } from '@/assertions/assertLocation'

/** Логика работы с выборкой локаций */
export function useLocations(page: ComputedRef<number>) {
  const { result, loading, error } = useQuery<IQueryLocation>(LOCATIONS_QUERY, () => ({
    page: page.value
  }))

  const info: ComputedRef<IInfo> = computed(() => {
    let info = { count: 0, pages: 0 }
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
