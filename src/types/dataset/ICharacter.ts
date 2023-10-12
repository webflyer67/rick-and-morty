import type { TID, TStatus, TGender } from '@/types/types'

/** Персонаж */
export interface ICharacter {
  /** Id персонажа */
  id: TID
  /** Имя персонажа */
  name: string
  /** Пол персонажа */
  gender: TGender
  /** Статус(жив/мертв) персонажа */
  status: TStatus
  /** Вид персонажа */
  species: string
  /** Подвид персонажа */
  type: string
  /** Изображение персонажа */
  image: string
}
