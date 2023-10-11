import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IEpisode } from '@/types/dataset/IEpisode'

export interface IEpisodeExtended extends IEpisode {
  characters: ICharacter[]
}
