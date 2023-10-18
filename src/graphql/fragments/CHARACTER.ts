import gql from 'graphql-tag'

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
