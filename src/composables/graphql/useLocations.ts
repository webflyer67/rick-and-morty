// mouse.js
import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { LOCATIONS_QUERY } from '@/graphql/QUERY'

import type { IResults } from '@/types/IResults'
import type { ILocation } from '@/types/dataset/ILocation'
import type { IResultInfo } from '@/types/IResultInfo'
import { assertLocation } from '@/assertions/assertLocation'

export function useLocations(page: ComputedRef<number>): IResults<ILocation> {
  const { result, loading, error } = useQuery(LOCATIONS_QUERY, () => ({ page: page.value }))

  const info: ComputedRef<IResultInfo> = computed(() => {
    return result.value?.locations?.info ?? { count: 0, pages: 0 }
  })

  const items: ComputedRef<Array<ILocation>> = computed(() => {
    const locations = result.value?.locations?.results ?? []
    for (const location of locations) {
      assertLocation(location)
    }

    return locations
  })

  return { info, items, loading, error }
}
