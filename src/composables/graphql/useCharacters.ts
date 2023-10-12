import type { ComputedRef } from 'vue'
import type { IInfo } from '@/types/IInfo'
import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IQueryCharacter } from '@/types/query/IQueryCharacter'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { CHARACTERS_QUERY } from '@/graphql/QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertCharacter } from '@/assertions/assertCharacter'

/** Логика работы с выборкой персонажей */
export function useCharacters(page: ComputedRef<number>) {
  const { result, loading, error } = useQuery<IQueryCharacter>(CHARACTERS_QUERY, () => ({
    page: page.value
  }))

  const info: ComputedRef<IInfo> = computed(() => {
    let info = { count: 0, pages: 0 }
    if (result.value?.characters?.info) {
      info = result.value?.characters?.info
      assertInfo(info)
    }
    return info
  })

  /** Массив объектов с персонажами */
  const items: ComputedRef<Array<ICharacter>> = computed(() => {
    const characters = result.value?.characters?.results ?? []
    for (const character of characters) {
      assertCharacter(character)
    }
    return characters
  })

  return { info, items, loading, error }
}
