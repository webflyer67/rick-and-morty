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
export const LOCATION = gql`
  fragment location on Location {
    id
    name
    type
    dimension
  }
`
export const EPISODE = gql`
  fragment episode on Episode {
    id
    name
    airDate: air_date
    episode
  }
`

export const CHARACTER_EXTENDEDS = gql`
  fragment characterExtended on Character {
    location {
      ...location
    }
    origin {
      ...location
    }
    episodes: episode {
      ...episode
    }
  }
  ${LOCATION}
  ${EPISODE}
`

export const LOCATION_EXTENDEDS = gql`
  fragment locationExtended on Location {
    residents {
      ...character
    }
  }
  ${CHARACTER}
`

export const EPISODE_EXTENDEDS = gql`
  fragment episodeExtended on Episode {
    characters {
      ...character
    }
  }
  ${CHARACTER}
`

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

export const LOCATIONS_QUERY = gql`
  query Locations($page: Int) {
    locations(page: $page) {
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

export const EPISODES_QUERY = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
      info {
        ...info
      }

      results {
        ...episode
      }
    }
  }
  ${INFO}
  ${EPISODE}
`
export const EPISODE_QUERY = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      ...episode
      ...episodeExtended
    }
  }
  ${EPISODE}
  ${EPISODE_EXTENDEDS}
`
