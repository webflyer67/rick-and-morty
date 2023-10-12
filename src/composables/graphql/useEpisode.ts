import type { TID } from '@/types/types'
import type { IEpisodeExtended } from '@/types/dataset/IEpisodeExtended'
import type { ComputedRef } from 'vue'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { EPISODE_QUERY } from '@/graphql/QUERY'
import { assertEpisodeExtended } from '@/assertions/assertEpisodeExtended'

/** Логика работы со страницей серии */
export function useEpisode(id: ComputedRef<TID>) {
  const { result, loading, error } = useQuery(EPISODE_QUERY, () => ({ id: id.value }))

  /** Объект с серией */
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
