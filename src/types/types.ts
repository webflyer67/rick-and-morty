/** Id элемента */
export type TID = string | number

/** Статусы персонажа */
export type TStatus = 'Alive' | 'Dead' | 'unknown'

/** Пол персонажа */
export type TGender = 'Female' | 'Male' | 'Genderless' | 'unknown'

/** Статусы персонажа */
export type TStatusFilter = TStatus | 'Any'

/** Пол персонажа */
export type TGenderFilter = TGender | 'Any'

/** Возможные поля для фильтров */
export type TFilterFields =
  | 'name'
  | 'species'
  | 'type'
  | 'gender'
  | 'status'
  | 'dimension'
  | 'episode'
