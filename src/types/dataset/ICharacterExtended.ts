import type { ICharacter } from '@/types/dataset/ICharacter'
import type { ILocation } from '@/types/dataset/ILocation'
import type { IEpisode } from '@/types/dataset/IEpisode'

export interface ICharacterExtended extends ICharacter {
  location: ILocation
  origin: ILocation
  episodes: IEpisode[]
}
