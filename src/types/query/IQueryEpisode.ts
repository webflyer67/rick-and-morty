import type { IInfo } from '@/types/IInfo'
import type { IEpisode } from '@/types/dataset/IEpisode'

/** Серия - данные от API */
export interface IQueryEpisode {
  /** Блок данных от API */
  episodes: {
    /** Служебная информация */
    info: IInfo
    /** Массив серий */
    results: IEpisode[]
  }
}
