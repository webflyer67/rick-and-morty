import type { ICharacter } from '@/types/dataset/ICharacter'
import type { ILocation } from '@/types/dataset/ILocation'

/** Локация расширенный */
export interface ILocationExtended extends ILocation {
  /** Персонажи на данной локации */
  residents: ICharacter[]
}
