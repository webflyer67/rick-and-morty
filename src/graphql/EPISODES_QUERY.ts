import gql from 'graphql-tag'
import { INFO } from '@/graphql/fragments/INFO'
import { EPISODE } from '@/graphql/fragments/EPISODE'

export const EPISODES_QUERY = gql`
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        ...info
      }

      results {
        ...episode
      }
    }
  }
  ${INFO}
  ${EPISODE}
`
