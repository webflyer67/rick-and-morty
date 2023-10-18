import type { ComputedRef } from 'vue'
import type { TID } from '@/types/types'
import type { ICharacterExtended } from '@/types/dataset/ICharacterExtended'
import type { IQueryCharacterExtended } from '@/types/query/IQueryCharacterExtended'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { CHARACTER_QUERY } from '@/graphql/CHARACTER_QUERY'
import { assertCharacterExtended } from '@/assertions/assertCharacterExtended'

/** Получение данных для страницы персонажа */
export function useCharacter(id: ComputedRef<TID>) {
  const { result, loading, error } = useQuery<IQueryCharacterExtended>(CHARACTER_QUERY, () => ({
    id: id.value
  }))

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
