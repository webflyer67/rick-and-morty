import type { TStatusFilter, TGenderFilter, TGender, TStatus } from '@/types/types'

/** Статусы персонажа */
export const status: TStatus[] = ['Alive', 'Dead', 'unknown']

/** Пол персонажа */
export const gender: TGender[] = ['Female', 'Male', 'Genderless', 'unknown']

/** Статусы персонажа */
export const statusFilter: TStatusFilter[] = ['Any', ...status]

/** Пол персонажа */
export const genderFilter: TGenderFilter[] = ['Any', 'Female', 'Male', 'Genderless', 'unknown']
