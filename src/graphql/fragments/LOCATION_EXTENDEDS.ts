import gql from 'graphql-tag'
import { CHARACTER } from '@/graphql/fragments/CHARACTER'

export const LOCATION_EXTENDEDS = gql`
  fragment locationExtended on Location {
    residents {
      ...character
    }
  }
  ${CHARACTER}
`
