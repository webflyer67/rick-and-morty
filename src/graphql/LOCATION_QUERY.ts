import gql from 'graphql-tag'
import { LOCATION } from '@/graphql/fragments/LOCATION'
import { LOCATION_EXTENDEDS } from '@/graphql/fragments/LOCATION_EXTENDEDS'

export const LOCATION_QUERY = gql`
  query Location($id: ID!) {
    location(id: $id) {
      ...location
      ...locationExtended
    }
  }
  ${LOCATION}
  ${LOCATION_EXTENDEDS}
`
