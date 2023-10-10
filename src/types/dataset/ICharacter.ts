import type { TID, TStatus, TGender } from '@/types/types'

export interface ICharacter {
  id: TID
  name: string
  gender: TGender
  status: TStatus
  species: string
  type: string
  image: string
}
