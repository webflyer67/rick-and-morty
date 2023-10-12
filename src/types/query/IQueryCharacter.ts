import type { IInfo } from '@/types/IInfo'
import type { ICharacter } from '@/types/dataset/ICharacter'

/** Персонаж - данные от API */
export interface IQueryCharacter {
  /** Блок данных от API */
  characters: {
    /** Служебная информация */
    info: IInfo
    /** Массив персонажей */
    results: ICharacter[]
  }
}
