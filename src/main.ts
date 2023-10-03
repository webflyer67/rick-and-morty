// import '@/assets/main.css'

// import { createApp } from 'vue'
// import App from '@/App.vue'
// import router from '@/router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

import '@/assets/main.css'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from '@/App.vue'
import router from '@/router'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(router)

app.mount('#app')

// import { createApp, provide, h } from 'vue'
// import { DefaultApolloClient } from '@vue/apollo-composable'

// const app = createApp({
//   setup () {
//     provide(DefaultApolloClient, apolloClient)
//   },

//   render: () => h(App),
// })
