import type { ComputedRef } from 'vue'
import type { IInfo } from '@/types/IInfo'
import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IQueryCharacter } from '@/types/query/IQueryCharacter'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { CHARACTERS_QUERY } from '@/graphql/QUERY'
import { assertInfo } from '@/assertions/assertInfo'
import { assertCharacter } from '@/assertions/assertCharacter'

/** Получение данных для страницы персонажей */
export function useCharacters(
  page: ComputedRef<number>,
  modalValue: ComputedRef<IRouteQueryFilters>
) {
  const { result, loading, error } = useQuery<IQueryCharacter>(CHARACTERS_QUERY, () => {
    const filter: IRouteQueryFilters = {}
    if (modalValue.value.name != '') {
      filter.name = modalValue.value.name
    }
    if (modalValue.value.species != '') {
      filter.species = modalValue.value.species
    }
    if (modalValue.value.type != '') {
      filter.type = modalValue.value.type
    }
    if (modalValue.value.status != 'Any') {
      filter.status = modalValue.value.status
    }
    if (modalValue.value.gender != 'Any') {
      filter.gender = modalValue.value.gender
    }
    return {
      page: page.value,
      filter
    }
  })

  const info: ComputedRef<IInfo> = computed(() => {
    let info: IInfo = { count: 0, pages: 0 }
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
