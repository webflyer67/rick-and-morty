import type { DocumentNode } from 'graphql'
import gql from 'graphql-tag'

export const CHARACTER_INFO: DocumentNode = gql`
  fragment characterInfo on Info {
    count
    pages
  }
`
export const CHARACTER_RESULT: DocumentNode = gql`
  fragment characterResult on Character {
    id
    name
    gender
  }
`

export const CHARACTER_QUERY: DocumentNode = gql`
  query Character($page: Int) {
    characters(page: $page) {
      info {
        ...characterInfo
      }

      results {
        ...characterResult
      }
    }
  }
  ${CHARACTER_RESULT}
  ${CHARACTER_INFO}
`
