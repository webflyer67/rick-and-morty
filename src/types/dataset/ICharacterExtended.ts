import type { ICharacter } from '@/types/dataset/ICharacter'
import type { ILocation } from '@/types/dataset/ILocation'
import type { IEpisode } from '@/types/dataset/IEpisode'

/** Персонаж расширенный */
export interface ICharacterExtended extends ICharacter {
  /** Где персонаж встретился впервые */
  location: ILocation
  /** Где персонаж встретился последний раз */
  origin: ILocation
  /** В каких сериях встречается персонаж */
  episodes: IEpisode[]
}
