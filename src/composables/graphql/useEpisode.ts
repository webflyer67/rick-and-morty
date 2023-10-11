import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { EPISODE_QUERY } from '@/graphql/QUERY'

import type { IResult } from '@/types/IResult'
import type { IEpisodeExtended } from '@/types/dataset/IEpisodeExtended'
import { assertEpisodeExtended } from '@/assertions/assertEpisodeExtended'
import type { TID } from '@/types/types'

export function useEpisode(id: ComputedRef<TID>): IResult<IEpisodeExtended> {
  const { result, loading, error } = useQuery(EPISODE_QUERY, () => ({ id: id.value }))

  const item: ComputedRef<IEpisodeExtended | null> = computed(() => {
    let item = null
    if (result.value?.episode) {
      item = result.value?.episode
      assertEpisodeExtended(item)
    }
    return item
  })

  return { item, loading, error }
}
