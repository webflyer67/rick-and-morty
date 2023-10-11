import type { ILocation } from '@/types/dataset/ILocation'
// import { errLog } from '@/src/assertions/errLog'
import { errLog } from '@/assertions/errLog'

function assertLocation(location: unknown): asserts location is ILocation {
  if (typeof location === 'object' && !!location) {
    if (
      !('id' in location) ||
      !['string', 'number'].includes(typeof location.id) ||
      location.id == '' ||
      location.id == 0
    ) {
      errLog("Поле 'id'('string'|'number') должно быть не пустым", location)
    }

    if (
      !('name' in location) ||
      !['string'].includes(typeof location.name) ||
      location.name == ''
    ) {
      errLog(`Поле 'name'('string') должно быть не пустым`, location)
    }

    if (!('type' in location) || !['string'].includes(typeof location.type)) {
      errLog(`Поле 'type'('string') должно быть`, location)
    }

    if (!('dimension' in location) || !['string'].includes(typeof location.dimension)) {
      errLog(`Поле 'dimension'('string') должно быть`, location)
    }
  } else {
    console.error('Location не объект', 'location:', location)
  }
}

export { assertLocation }
