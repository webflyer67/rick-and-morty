import type { ICharacter } from '@/types/dataset/ICharacter'
import type { ILocation } from '@/types/dataset/ILocation'

export interface ILocationExtended extends ILocation {
  residents: ICharacter[]
}
