import type { Ref, ComputedRef } from 'vue'
import type { TStatusFilter, TGenderFilter, TFilterFields } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { assertEpisodeFilter } from '@/assertions/assertEpisodeFilter'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Фильтры для страницы персонажей */
export function useEpisodesFilter() {
  const router = useRouter()
  const route = useRoute()

  const itemsStatus: Ref<TStatusFilter[]> = ref(statusFilter)
  const itemsGender: Ref<TGenderFilter[]> = ref(genderFilter)

  const modalValue: ComputedRef<IRouteQueryFilters> = computed(() => {
    const modalValue = { ...route.query } as unknown as IRouteQueryFilters

    assertEpisodeFilter(modalValue)
    if (typeof modalValue.name === 'undefined') modalValue.name = ''
    if (typeof modalValue.episode === 'undefined') modalValue.episode = ''

    return modalValue
  })

  function filterClick(val: any, filterId: TFilterFields) {
    const query = { ...route.query, [filterId]: val }
    if (
      query[filterId] === '' ||
      (['status', 'gender'].includes(filterId) && query[filterId] === 'Any')
    ) {
      delete query[filterId]
    }
    router.push({ name: 'episodesFirst', query })
  }

  function cancelClick() {
    router.push({ name: 'episodesFirst' })
  }

  return { itemsStatus, itemsGender, modalValue, filterClick, cancelClick }
}
