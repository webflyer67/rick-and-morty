import type { TGenderFilter, TStatusFilter } from '@/types/types'
import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { errLog } from '@/assertions/errLog'
import { statusFilter, genderFilter } from '@/assets/constants'

/** Проверка данных API Персонаж */
function assertCharacterFilter(obj: unknown): asserts obj is IRouteQueryFilters {
  if (typeof obj === 'object' && !!obj) {
    if ('name' in obj && !['string'].includes(typeof obj.name)) {
      errLog(`Поле 'name'(string) должно быть string}`, obj)
    }

    if ('species' in obj && !['string'].includes(typeof obj.species)) {
      errLog(`Поле 'species'(string) должно быть string}`, obj)
    }

    if ('type' in obj && !['string'].includes(typeof obj.type)) {
      errLog(`Поле 'type'(string) должно быть string}`, obj)
    }

    if (
      'status' in obj &&
      (!['string'].includes(typeof obj.status) ||
        !statusFilter.includes(obj.status as TStatusFilter))
    ) {
      errLog(`Поле 'status'(TStatusFilter) должно быть ${statusFilter.join(', ')}`, obj)
    }

    if (
      'gender' in obj &&
      (!['string'].includes(typeof obj.gender) ||
        !genderFilter.includes(obj.gender as TGenderFilter))
    ) {
      errLog(`Поле 'gender'(TGenderFilter) должно быть ${genderFilter.join(', ')}`, obj)
    }
  } else {
    console.error('modalValue(route.query) не объект', obj)
  }
}

export { assertCharacterFilter }
