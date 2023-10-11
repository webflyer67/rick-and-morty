import type { IEpisode } from '@/types/dataset/IEpisode'
// import { errLog } from '@/src/assertions/errLog'
import { errLog } from '@/assertions/errLog'

function assertEpisode(episode: unknown): asserts episode is IEpisode {
  if (typeof episode === 'object' && !!episode) {
    if (
      !('id' in episode) ||
      !['string', 'number'].includes(typeof episode.id) ||
      episode.id == '' ||
      episode.id == 0
    ) {
      errLog("Поле 'id'('string'|'number') должно быть не пустым", episode)
    }

    if (!('name' in episode) || !['string'].includes(typeof episode.name) || episode.name == '') {
      errLog(`Поле 'name'('string') должно быть не пустым`, episode)
    }

    if (
      !('airDate' in episode) ||
      !['string'].includes(typeof episode.airDate) ||
      episode.airDate == ''
    ) {
      errLog(`Поле 'airDate'('string') должно быть не пустым`, episode)
    }

    if (!('episode' in episode) || !['string'].includes(typeof episode.episode)) {
      errLog(`Поле 'episode'('string') должно быть`, episode)
    }
  } else {
    console.error('Episode не объект', 'episode:', episode)
  }
}

export { assertEpisode }
