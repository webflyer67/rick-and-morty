// mouse.js
import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { CHARACTER_QUERY } from '@/graphql/CHARACTER_QUERY'

import type { IResult } from '@/types/IResult'
import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IResultInfo } from '@/types/IResultInfo'
import { assertCharacter } from '@/asserts/assertCharacter'

export function useCharacters(page: ComputedRef<number>): IResult<ICharacter> {
  const { result, loading, error } = useQuery(CHARACTER_QUERY, () => ({ page: page.value }))

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
