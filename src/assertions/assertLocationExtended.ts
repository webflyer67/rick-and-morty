import type { ILocationExtended } from '@/types/dataset/ILocationExtended'

import { errLog } from '@/assertions/errLog'
import { assertLocation } from '@/assertions/assertLocation'
import { assertCharacter } from '@/assertions/assertCharacter'

/** Проверка данных от сервера Локация расширенный */
function assertLocationExtended(obj: unknown): asserts obj is ILocationExtended {
  assertLocation(obj)
  if (!('residents' in obj) || !Array.isArray(obj.residents)) {
    errLog("Поле 'residents'(ILocation[]) должно быть", obj)
  } else {
    for (const character of obj.residents) {
      assertCharacter(character)
    }
  }
}

export { assertLocationExtended }
