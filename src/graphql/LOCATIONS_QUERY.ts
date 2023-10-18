import gql from 'graphql-tag'
import { INFO } from '@/graphql/fragments/INFO'
import { LOCATION } from '@/graphql/fragments/LOCATION'

export const LOCATIONS_QUERY = gql`
  query Locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        ...info
      }

      results {
        ...location
      }
    }
  }
  ${INFO}
  ${LOCATION}
`
