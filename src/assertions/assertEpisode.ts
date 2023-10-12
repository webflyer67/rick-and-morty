import type { IEpisode } from '@/types/dataset/IEpisode'

import { errLog } from '@/assertions/errLog'

/** Проверка данных API Серия */
function assertEpisode(obj: unknown): asserts obj is IEpisode {
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

    if (!('airDate' in obj) || !['string'].includes(typeof obj.airDate) || obj.airDate == '') {
      errLog(`Поле 'airDate'('string') должно быть не пустым`, obj)
    }

    if (!('episode' in obj) || !['string'].includes(typeof obj.episode)) {
      errLog(`Поле 'episode'('string') должно быть`, obj)
    }
  } else {
    console.error('Episode не объект', obj)
  }
}

export { assertEpisode }
