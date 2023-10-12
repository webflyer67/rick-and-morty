import { createApp, provide, h } from 'vue'
import App from '@/App.vue'
import { router } from '@/plugins/router'
import { vuetify } from '@/plugins/vuetify'
import { DefaultApolloClient, apolloClient } from '@/plugins/apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
app.use(vuetify).use(router).mount('#app')
