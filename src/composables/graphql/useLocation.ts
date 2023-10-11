import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { LOCATION_QUERY } from '@/graphql/QUERY'

import type { IResult } from '@/types/IResult'
import type { ILocationExtended } from '@/types/dataset/ILocationExtended'
import { assertLocationExtended } from '@/assertions/assertLocationExtended'
import type { TID } from '@/types/types'

export function useLocation(id: ComputedRef<TID>): IResult<ILocationExtended> {
  const { result, loading, error } = useQuery(LOCATION_QUERY, () => ({ id: id.value }))

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
