import type { ICharacterExtended } from '@/types/dataset/ICharacterExtended'

import { errLog } from '@/assertions/errLog'
import { assertCharacter } from '@/assertions/assertCharacter'
import { assertEpisode } from '@/assertions/assertEpisode'
import { assertLocation } from '@/assertions/assertLocation'

/** Проверка данных API Персонаж расширенный */
function assertCharacterExtended(obj: unknown): asserts obj is ICharacterExtended {
  if (typeof obj === 'object' && !!obj) {
    assertCharacter(obj)

    if (!('location' in obj)) {
      errLog("Поле 'location'(ILocation) должно быть", obj)
    } else {
      assertLocation(obj.location)
    }

    if (!('origin' in obj)) {
      errLog("Поле 'origin'(ILocation) должно быть", obj)
    } else {
      assertLocation(obj.origin)
    }

    if (!('episodes' in obj) || !Array.isArray(obj.episodes)) {
      errLog("Поле 'episodes'(IEpisode[]) должно быть массивом", obj)
    } else {
      for (const episode of obj.episodes) {
        assertEpisode(episode)
      }
    }
  }
}

export { assertCharacterExtended }
