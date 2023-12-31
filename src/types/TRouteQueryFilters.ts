import type { TGenderFilter, TStatusFilter } from '@/types/types'

/** Возможные поля для фильтров */
export interface IRouteQueryFilters {
  name?: string
  species?: string
  type?: string
  gender?: TGenderFilter
  status?: TStatusFilter
  dimension?: string
  episode?: string
}
