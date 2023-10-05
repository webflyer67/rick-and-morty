import '@/assets/main.css'

import { createApp, provide, h } from 'vue'
import App from '@/App.vue'
import { router } from '@/router'
import { vuetify } from '@/vuetify'
import { DefaultApolloClient, apolloClient } from '@/apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
app.use(vuetify).use(router).mount('#app')
