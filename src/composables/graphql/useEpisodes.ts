import type { ComputedRef } from 'vue'
import type { IInfo } from '@/types/IInfo'
import type { IEpisode } from '@/types/dataset/IEpisode'
import type { IQueryEpisode } from '@/types/query/IQueryEpisode'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { EPISODES_QUERY } from '@/graphql/EPISODES_QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertEpisode } from '@/assertions/assertEpisode'

/** Получение данных для страницы серий */
export function useEpisodes(
  page: ComputedRef<number>,
  modalValue: ComputedRef<IRouteQueryFilters>
) {
  const { result, loading, error } = useQuery<IQueryEpisode>(EPISODES_QUERY, () => {
    const filter: IRouteQueryFilters = {}
    if (modalValue.value.name != '') {
      filter.name = modalValue.value.name
    }
    if (modalValue.value.episode != '') {
      filter.episode = modalValue.value.episode
    }
    return {
      page: page.value,
      filter
    }
  })

  const info: ComputedRef<IInfo> = computed(() => {
    let info: IInfo = { count: 0, pages: 0 }
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
