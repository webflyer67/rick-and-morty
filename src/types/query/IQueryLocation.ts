import type { IInfo } from '@/types/IInfo'
import type { ILocation } from '@/types/dataset/ILocation'

/** Локация - ответ от сервера */
export interface IQueryLocation {
  /** Служебная информация */
  locations: {
    /** Служебная информация */
    info: IInfo
    /** Массив локаций */
    results: ILocation[]
  }
}
