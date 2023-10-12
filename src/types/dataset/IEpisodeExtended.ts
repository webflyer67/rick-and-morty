import type { ICharacter } from '@/types/dataset/ICharacter'
import type { IEpisode } from '@/types/dataset/IEpisode'

/** Серия расширенный */
export interface IEpisodeExtended extends IEpisode {
  /** Персонажи в данной серии */
  characters: ICharacter[]
}
