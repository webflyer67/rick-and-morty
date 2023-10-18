import gql from 'graphql-tag'
import { EPISODE } from '@/graphql/fragments/EPISODE'
import { EPISODE_EXTENDEDS } from '@/graphql/fragments/EPISODE_EXTENDEDS'

export const EPISODE_QUERY = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      ...episode
      ...episodeExtended
    }
  }
  ${EPISODE}
  ${EPISODE_EXTENDEDS}
`
