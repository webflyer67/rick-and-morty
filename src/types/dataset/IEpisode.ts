import type { TID } from '@/types/types'

/** Серия */
export interface IEpisode {
  /** Id серии */
  id: TID
  /** Название серии */
  name: string
  /** Дата выхода серии */
  airDate: string
  /** Код серии */
  episode: string
}
