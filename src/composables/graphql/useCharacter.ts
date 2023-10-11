// mouse.js
import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { CHARACTER_QUERY } from '@/graphql/QUERY'

import type { IResult } from '@/types/IResult'
import type { ICharacter } from '@/types/dataset/ICharacter'
import { assertCharacter } from '@/assertions/assertCharacter'
import type { TID } from '@/types/types'

export function useCharacter(id: ComputedRef<TID>): IResult<ICharacter> {
  const { result, loading, error } = useQuery(CHARACTER_QUERY, () => ({ id: id.value }))

  const item: ComputedRef<ICharacter | null> = computed(() => {
    let item = null
    if (result.value?.character) {
      item = result.value?.character
      assertCharacter(item)
    }

    return item
  })

  return { item, loading, error }
}
