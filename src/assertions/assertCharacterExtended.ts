import type { ICharacterExtended } from '@/types/dataset/ICharacterExtended'
import { errLog } from '@/assertions/errLog'
import { assertCharacter } from '@/assertions/assertCharacter'
import { assertEpisode } from '@/assertions/assertEpisode'
import { assertLocation } from '@/assertions/assertLocation'

function assertCharacterExtended(character: unknown): asserts character is ICharacterExtended {
  if (typeof character === 'object' && !!character) {
    assertCharacter(character)

    if (!('location' in character)) {
      errLog("Поле 'location'(ILocation) должно быть", character)
    } else {
      assertLocation(character.location)
    }

    if (!('origin' in character)) {
      errLog("Поле 'origin'(ILocation) должно быть", character)
    } else {
      assertLocation(character.origin)
    }

    if (!('episodes' in character) || !Array.isArray(character.episodes)) {
      errLog("Поле 'episodes'(IEpisode[]) должно быть массивом", character)
    } else {
      for (const episode of character.episodes) {
        assertEpisode(episode)
      }
    }
  }
}

export { assertCharacterExtended }
