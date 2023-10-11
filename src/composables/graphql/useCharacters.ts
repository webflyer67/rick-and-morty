// mouse.js
import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { CHARACTERS_QUERY } from '@/graphql/QUERY'

import type { IResults } from '@/types/IResults'
import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IResultInfo } from '@/types/IResultInfo'
import { assertCharacter } from '@/assertions/assertCharacter'

export function useCharacters(page: ComputedRef<number>): IResults<ICharacter> {
  const { result, loading, error } = useQuery(CHARACTERS_QUERY, () => ({ page: page.value }))

  const info: ComputedRef<IResultInfo> = computed(() => {
    return result.value?.characters?.info ?? { count: 0, pages: 0 }
  })

  const items: ComputedRef<Array<ICharacter>> = computed(() => {
    const characters = result.value?.characters?.results ?? []
    for (const character of characters) {
      assertCharacter(character)
    }

    return characters
  })

  return { info, items, loading, error }
}
