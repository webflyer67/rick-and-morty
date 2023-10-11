import gql from 'graphql-tag'

export const INFO = gql`
  fragment info on Info {
    count
    pages
  }
`

export const CHARACTER = gql`
  fragment character on Character {
    id
    name
    gender
    status
    species
    type
    image
  }
`

export const CHARACTER_REF = gql`
  fragment characterRef on Character {
    location {
      id
      name
      type
      dimension
    }
    origin {
      id
      name
      type
      dimension
    }
    episode {
      id
      name
      air_date
      episode
    }
  }
`

export const CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
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
export const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      ...character
      ...characterRef
    }
  }
  ${CHARACTER}
  ${CHARACTER_REF}
`
