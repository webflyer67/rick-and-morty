import { useQuery } from '@vue/apollo-composable'
import { computed, type ComputedRef } from 'vue'
import { CHARACTER_QUERY } from '@/graphql/QUERY'

import type { IResult } from '@/types/IResult'
import type { ICharacterExtended } from '@/types/dataset/ICharacterExtended'
import { assertCharacterExtended } from '@/assertions/assertCharacterExtended'
import type { TID } from '@/types/types'

export function useCharacter(id: ComputedRef<TID>): IResult<ICharacterExtended> {
  const { result, loading, error } = useQuery(CHARACTER_QUERY, () => ({ id: id.value }))

  const item: ComputedRef<ICharacterExtended | null> = computed(() => {
    let item = null
    if (result.value?.character) {
      item = result.value?.character
      assertCharacterExtended(item)
    }
    return item
  })

  return { item, loading, error }
}
