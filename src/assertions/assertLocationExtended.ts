import type { ILocationExtended } from '@/types/dataset/ILocationExtended'
import { errLog } from '@/assertions/errLog'
import { assertLocation } from '@/assertions/assertLocation'
import { assertCharacter } from '@/assertions/assertCharacter'

function assertLocationExtended(location: unknown): asserts location is ILocationExtended {
  assertLocation(location)
  if (!('residents' in location) || !Array.isArray(location.residents)) {
    errLog("Поле 'residents'(ILocation) должно быть", location)
  } else {
    for (const character of location.residents) {
      assertCharacter(character)
    }
  }
}

export { assertLocationExtended }
