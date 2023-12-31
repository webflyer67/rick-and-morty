import type { ComputedRef } from 'vue'
import type { TID } from '@/types/types'
import type { IEpisodeExtended } from '@/types/dataset/IEpisodeExtended'
import type { IQueryEpisodeExtended } from '@/types/query/IQueryEpisodeExtended'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { EPISODE_QUERY } from '@/graphql/EPISODE_QUERY'
import { assertEpisodeExtended } from '@/assertions/assertEpisodeExtended'

/** Получение данных для страницы серии */
export function useEpisode(id: ComputedRef<TID>) {
  const { result, loading, error } = useQuery<IQueryEpisodeExtended>(EPISODE_QUERY, () => ({
    id: id.value
  }))

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
