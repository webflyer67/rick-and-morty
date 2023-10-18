import gql from 'graphql-tag'
import { CHARACTER } from '@/graphql/fragments/CHARACTER'
import { CHARACTER_EXTENDEDS } from '@/graphql/fragments/CHARACTER_EXTENDEDS'

export const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      ...character
      ...characterExtended
    }
  }
  ${CHARACTER}
  ${CHARACTER_EXTENDEDS}
`
