import gql from 'graphql-tag'

export const EPISODE = gql`
  fragment episode on Episode {
    id
    name
    airDate: air_date
    episode
  }
`
