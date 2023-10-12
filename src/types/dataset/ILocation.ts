import type { TID } from '@/types/types'

/** Локация */
export interface ILocation {
  /** Id локации */
  id: TID
  /** Название локации */
  name: string
  /** Тип локации */
  type: string
  /** Измерение локации */
  dimension: string
}
