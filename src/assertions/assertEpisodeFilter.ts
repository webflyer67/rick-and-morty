import type { IRouteQueryFilters } from '@/types/TRouteQueryFilters'

import { errLog } from '@/assertions/errLog'

/** Проверка данных от сервера Серия - фильтры */
function assertEpisodeFilter(obj: unknown): asserts obj is IRouteQueryFilters {
  if (typeof obj === 'object' && !!obj) {
    if ('name' in obj && !['string'].includes(typeof obj.name)) {
      errLog(`Поле 'name'(string) должно быть string}`, obj)
    }

    if ('episode' in obj && !['string'].includes(typeof obj.episode)) {
      errLog(`Поле 'episode'(string) должно быть string}`, obj)
    }
  } else {
    console.error('modalValue(route.query) не объект', obj)
  }
}

export { assertEpisodeFilter }
