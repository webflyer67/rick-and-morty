<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

interface ITab {
  name: string
  to: { path: string }
}

let items: Ref<Array<ITab>> = ref([
  {
    name: 'Characters',
    to: { path: '/characters' }
  },
  {
    name: 'Locations',
    to: { path: '/locations' }
  },
  {
    name: 'Episodes',
    to: { path: '/episodes' }
  }
])

let tab = ref(null)
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" title="Application bar">
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab v-for="item in items" :key="item.name" :value="item" :to="item.to">
          {{ item.name }}
        </v-tab>
        <!-- <v-tab value="one">Item One</v-tab> -->
        <!-- <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab> -->
      </v-tabs>
    </v-app-bar>

    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <router-view />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
