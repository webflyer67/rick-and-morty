import type { IEpisodeExtended } from '@/types/dataset/IEpisodeExtended'
import { errLog } from '@/assertions/errLog'
import { assertEpisode } from '@/assertions/assertEpisode'
import { assertCharacter } from '@/assertions/assertCharacter'

function assertEpisodeExtended(episode: unknown): asserts episode is IEpisodeExtended {
  assertEpisode(episode)
  if (!('characters' in episode) || !Array.isArray(episode.characters)) {
    errLog("Поле 'characters'(ILocation) должно быть", episode)
  } else {
    for (const character of episode.characters) {
      assertCharacter(character)
    }
  }
}

export { assertEpisodeExtended }
