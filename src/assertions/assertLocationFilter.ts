import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { errLog } from '@/assertions/errLog'

/** Проверка данных API Персонаж */
function assertLocationFilter(obj: unknown): asserts obj is IRouteQueryFilters {
  if (typeof obj === 'object' && !!obj) {
    if ('name' in obj && !['string'].includes(typeof obj.name)) {
      errLog(`Поле 'name'(string) должно быть string}`, obj)
    }

    if ('dimension' in obj && !['string'].includes(typeof obj.dimension)) {
      errLog(`Поле 'dimension'(string) должно быть string}`, obj)
    }

    if ('type' in obj && !['string'].includes(typeof obj.type)) {
      errLog(`Поле 'type'(string) должно быть string}`, obj)
    }
  } else {
    console.error('modalValue(route.query) не объект', obj)
  }
}

export { assertLocationFilter }
