import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/characters'
    },

    {
      path: '/characters',
      name: 'charactersFirst',
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/characters/:page',
      name: 'characters',
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('@/views/CharacterView.vue')
    },

    {
      path: '/locations',
      name: 'locationsFirst',
      component: () => import('@/views/LocationsView.vue')
    },
    {
      path: '/locations/:page',
      name: 'locations',
      component: () => import('@/views/LocationsView.vue')
    },
    {
      path: '/location/:id',
      name: 'location',
      component: () => import('@/views/LocationView.vue')
    },

    {
      path: '/episodes',
      name: 'episodesFirst',
      component: () => import('@/views/EpisodesView.vue')
    },
    {
      path: '/episodes/:page',
      name: 'episodes',
      component: () => import('@/views/EpisodesView.vue')
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: () => import('@/views/EpisodeView.vue')
    }
  ]
})

export { router }
