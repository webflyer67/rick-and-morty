import type { IInfo } from '@/types/IInfo'

import { errLog } from '@/assertions/errLog'

/** Проверка данных API Персонаж расширенный */
function assertInfo(obj: unknown): asserts obj is IInfo {
  if (typeof obj === 'object' && !!obj) {
    if (!('count' in obj) || !(typeof obj.count === 'number' || obj.count === null)) {
      errLog(`Поле 'count'('number') должно быть`, obj)
    }

    if (!('pages' in obj) || !(typeof obj.pages === 'number' || obj.pages === null)) {
      errLog(`Поле 'pages'('number') должно быть`, obj)
    }
  } else {
    console.error('Info не объект', obj)
  }
}

export { assertInfo }
