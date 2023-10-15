import type { ComputedRef } from 'vue'
import type { TID } from '@/types/types'
import type { ILocationExtended } from '@/types/dataset/ILocationExtended'
import type { IQueryLocationExtended } from '@/types/query/IQueryLocationExtended'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { LOCATION_QUERY } from '@/graphql/QUERY'
import { assertLocationExtended } from '@/assertions/assertLocationExtended'

/** Получение данных для страницы локации */
export function useLocation(id: ComputedRef<TID>) {
  const { result, loading, error } = useQuery<IQueryLocationExtended>(LOCATION_QUERY, () => ({
    id: id.value
  }))

  /** Объект с локацией */
  const item: ComputedRef<ILocationExtended | null> = computed(() => {
    let item = null
    if (result.value?.location) {
      item = result.value?.location
      assertLocationExtended(item)
    }
    return item
  })

  return { item, loading, error }
}
