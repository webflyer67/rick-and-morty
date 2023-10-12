import type { TID } from '@/types/types'
import type { ICharacterExtended } from '@/types/dataset/ICharacterExtended'
import type { ComputedRef } from 'vue'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { CHARACTER_QUERY } from '@/graphql/QUERY'
import { assertCharacterExtended } from '@/assertions/assertCharacterExtended'

/** Логика работы со страницей персонажа */
export function useCharacter(id: ComputedRef<TID>) {
  const { result, loading, error } = useQuery(CHARACTER_QUERY, () => ({ id: id.value }))

  /** Объект с персонажем */
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
