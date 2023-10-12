import type { ILocation } from '@/types/dataset/ILocation'

import { errLog } from '@/assertions/errLog'

/** Проверка данных API Локация */
function assertLocation(obj: unknown): asserts obj is ILocation {
  if (typeof obj === 'object' && !!obj) {
    if (
      !('id' in obj) ||
      !['string', 'number'].includes(typeof obj.id) ||
      obj.id == '' ||
      obj.id == 0
    ) {
      errLog("Поле 'id'('string'|'number') должно быть не пустым", obj)
    }

    if (!('name' in obj) || !['string'].includes(typeof obj.name) || obj.name == '') {
      errLog(`Поле 'name'('string') должно быть не пустым`, obj)
    }

    if (!('type' in obj) || !['string'].includes(typeof obj.type)) {
      errLog(`Поле 'type'('string') должно быть`, obj)
    }

    if (!('dimension' in obj) || !['string'].includes(typeof obj.dimension)) {
      errLog(`Поле 'dimension'('string') должно быть`, obj)
    }
  } else {
    console.error('Location не объект', obj)
  }
}

export { assertLocation }
