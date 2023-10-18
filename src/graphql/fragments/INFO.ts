import gql from 'graphql-tag'

export const INFO = gql`
  fragment info on Info {
    count
    pages
  }
`
