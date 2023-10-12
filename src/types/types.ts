import type { Status, Gender } from '@/assets/enums'

/** Id элемента */
type TID = string | number

/** Статусы персонажа */
type TStatus = Status.Alive | Status.Dead | Status.unknown

/** Пол персонажа */
type TGender = Gender.Female | Gender.Male | Gender.Genderless | Gender.unknown

export type { TID, TStatus, TGender }
