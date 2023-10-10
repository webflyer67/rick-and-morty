import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },

    {
      path: '/characters',
      name: 'charactersFirst',
      component: () => import('@/views/characters/CharactersPage.vue')
    },
    {
      path: '/characters/:page',
      name: 'characters',
      component: () => import('@/views/characters/CharactersPage.vue')
    },

    {
      path: '/locations',
      name: 'locationsFirst',
      component: () => import('@/views/locations/LocationsPage.vue')
    },
    {
      path: '/locations/:page',
      name: 'locations',
      component: () => import('@/views/locations/LocationsPage.vue')
    },

    {
      path: '/episodes',
      name: 'episodesFirst',
      component: () => import('@/views/episodes/EpisodesPage.vue')
    },
    {
      path: '/episodes/:page',
      name: 'episodes',
      component: () => import('@/views/episodes/EpisodesPage.vue')
    }
  ]
})

export { router }
