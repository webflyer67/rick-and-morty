import gql from 'graphql-tag'
import { INFO } from '@/graphql/fragments/INFO'
import { CHARACTER } from '@/graphql/fragments/CHARACTER'

export const CHARACTERS_QUERY = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        ...info
      }

      results {
        ...character
      }
    }
  }
  ${INFO}
  ${CHARACTER}
`
