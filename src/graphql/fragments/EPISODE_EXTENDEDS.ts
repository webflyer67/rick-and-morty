import gql from 'graphql-tag'
import { CHARACTER } from '@/graphql/fragments/CHARACTER'

export const EPISODE_EXTENDEDS = gql`
  fragment episodeExtended on Episode {
    characters {
      ...character
    }
  }
  ${CHARACTER}
`
