import type { IEpisode } from '@/types/dataset/IEpisode'
import type { IInfo } from '@/types/IInfo'
import type { ComputedRef } from 'vue'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { EPISODES_QUERY } from '@/graphql/QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertEpisode } from '@/assertions/assertEpisode'

/** Логика работы с выборкой серий */
export function useEpisodes(page: ComputedRef<number>) {
  const { result, loading, error } = useQuery(EPISODES_QUERY, () => ({ page: page.value }))

  const info: ComputedRef<IInfo> = computed(() => {
    let info = { count: 0, pages: 0 }
    if (result.value?.episodes?.info) {
      info = result.value?.episodes?.info
      assertInfo(info)
    }
    return info
  })

  /** Массив объектов с сериями */
  const items: ComputedRef<Array<IEpisode>> = computed(() => {
    const episodes = result.value?.episodes?.results ?? []
    for (const episode of episodes) {
      assertEpisode(episode)
    }
    return episodes
  })

  return { info, items, loading, error }
}
