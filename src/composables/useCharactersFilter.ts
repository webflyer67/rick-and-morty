import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertCharacterFilter } from '@/assertions/assertCharacterFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы персонажей */
export function useCharactersFilter() {
  const router = useRouter()
  const route = useRoute()

  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters

    assertCharacterFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.species === 'undefined') modalValue.species = ''
    if (typeof modalValue.type === 'undefined') modalValue.type = ''
    if (typeof modalValue.status === 'undefined' || !statusFilter.includes(modalValue.status))
      modalValue.status = 'Any'
    if (typeof modalValue.gender === 'undefined' || !genderFilter.includes(modalValue.gender))
      modalValue.gender = 'Any'

    return modalValue
  })

  function filterClick(val: any, filterId: TFilterFields) {
    console.log(4444, route)
    router.push({ name: 'charactersFirst', query: { ...route.query, [filterId]: val } })
  }
  return { itemsStatus, itemsGender, modalValue, filterClick }
}
