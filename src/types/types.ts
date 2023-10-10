type TID = string | number

enum Status {
  'Alive' = 'Alive',
  'Dead' = 'Dead',
  'unknown' = 'unknown'
}
type TStatus = Status.Alive | Status.Dead | Status.unknown

enum Gender {
  'Female' = 'Female',
  'Male' = 'Male',
  'Genderless' = 'Genderless',
  'unknown' = 'unknown'
}
type TGender = Gender.Female | Gender.Male | Gender.Genderless | Gender.unknown

export { Status, Gender }
export type { TID, TStatus, TGender }
