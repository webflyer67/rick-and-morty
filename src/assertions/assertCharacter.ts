import type { ICharacter } from '@/types/dataset/ICharacter'

import { Status, Gender } from '@/assets/enums'
import { errLog } from '@/assertions/errLog'

/** Проверка данных API Персонаж */
function assertCharacter(obj: unknown): asserts obj is ICharacter {
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

    if (
      !('status' in obj) ||
      typeof obj.status !== 'string' ||
      !Object.keys(Status).includes(obj.status)
    ) {
      errLog(`Поле 'status'('string') должно быть ${Object.keys(Status).join(' | ')}`, obj)
    }

    if (
      !('gender' in obj) ||
      typeof obj.gender !== 'string' ||
      !Object.keys(Gender).includes(obj.gender)
    ) {
      errLog(`Поле 'gender'('string') должно быть ${Object.keys(Gender).join(' | ')}`, obj)
    }

    if (!('species' in obj) || !['string'].includes(typeof obj.species) || obj.species == '') {
      errLog(`Поле 'species'('string') должно быть не пустым`, obj)
    }

    if (!('type' in obj) || !['string'].includes(typeof obj.type)) {
      errLog(`Поле 'type'('string') должно быть`, obj)
    }

    if (!('image' in obj) || !['string'].includes(typeof obj.image)) {
      errLog(`Поле 'image'('string') должно быть`, obj)
    }
  } else {
    console.error('Character не объект', obj)
  }
}

export { assertCharacter }
