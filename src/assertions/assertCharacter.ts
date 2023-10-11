import type { ICharacter } from '@/types/dataset/ICharacter'
// import { errLog } from '@/src/assertions/errLog'
import { errLog } from './errLog'
import { Status, Gender } from '@/types/types'

function assertCharacter(character: unknown): asserts character is ICharacter {
  if (typeof character === 'object' && !!character) {
    if (
      !('id' in character) ||
      !['string', 'number'].includes(typeof character.id) ||
      character.id == '' ||
      character.id == 0
    ) {
      errLog("Поле 'id'('string'|'number') должно быть не пустым", character)
    }

    if (
      !('name' in character) ||
      !['string'].includes(typeof character.name) ||
      character.name == ''
    ) {
      errLog(`Поле 'name'('string') должно быть не пустым`, character)
    }

    if (
      !('status' in character) ||
      typeof character.status !== 'string' ||
      !Object.keys(Status).includes(character.status)
    ) {
      errLog(`Поле 'status'('string') должно быть ${Object.keys(Status).join(' | ')}`, character)
    }

    if (
      !('gender' in character) ||
      typeof character.gender !== 'string' ||
      !Object.keys(Gender).includes(character.gender)
    ) {
      errLog(`Поле 'gender'('string') должно быть ${Object.keys(Gender).join(' | ')}`, character)
    }

    if (
      !('species' in character) ||
      !['string'].includes(typeof character.species) ||
      character.species == ''
    ) {
      errLog(`Поле 'species'('string') должно быть не пустым`, character)
    }

    if (!('type' in character) || !['string'].includes(typeof character.type)) {
      errLog(`Поле 'type'('string') должно быть`, character)
    }

    if (!('image' in character) || !['string'].includes(typeof character.image)) {
      errLog(`Поле 'image'('string') должно быть`, character)
    }
  } else {
    console.error('Character не объект', 'character:', character)
  }
}

export { assertCharacter }
