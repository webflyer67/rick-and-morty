import type { IEpisodeExtended } from '@/types/dataset/IEpisodeExtended'

import { errLog } from '@/assertions/errLog'
import { assertEpisode } from '@/assertions/assertEpisode'
import { assertCharacter } from '@/assertions/assertCharacter'

/** Проверка данных API Серия расширенный */
function assertEpisodeExtended(obj: unknown): asserts obj is IEpisodeExtended {
  assertEpisode(obj)
  if (!('characters' in obj) || !Array.isArray(obj.characters)) {
    errLog("Поле 'characters'(ILocation) должно быть", obj)
  } else {
    for (const character of obj.characters) {
      assertCharacter(character)
    }
  }
}

export { assertEpisodeExtended }
