import gql from 'graphql-tag'
import { LOCATION } from '@/graphql/fragments/LOCATION'
import { EPISODE } from '@/graphql/fragments/EPISODE'

export const CHARACTER_EXTENDEDS = gql`
  fragment characterExtended on Character {
    location {
      ...location
    }
    origin {
      ...location
    }
    episodes: episode {
      ...episode
    }
  }
  ${LOCATION}
  ${EPISODE}
`
