// mouse.js
import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { EPISODES_QUERY } from '@/graphql/QUERY'

import type { IResults } from '@/types/IResults'
import type { IEpisode } from '@/types/dataset/IEpisode'
import type { IResultInfo } from '@/types/IResultInfo'
import { assertEpisode } from '@/assertions/assertEpisode'

export function useEpisodes(page: ComputedRef<number>): IResults<IEpisode> {
  const { result, loading, error } = useQuery(EPISODES_QUERY, () => ({ page: page.value }))

  const info: ComputedRef<IResultInfo> = computed(() => {
    return result.value?.episodes?.info ?? { count: 0, pages: 0 }
  })

  const items: ComputedRef<Array<IEpisode>> = computed(() => {
    const episodes = result.value?.episodes?.results ?? []
    for (const episode of episodes) {
      assertEpisode(episode)
    }

    return episodes
  })

  return { info, items, loading, error }
}
