<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMenu } from '@/composables/useMenu'

const { menu, currentMenuItem } = useMenu()
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" title="Rick and Morty">
      <v-tabs :model-value="currentMenuItem" bg-color="primary" :mandatory="false">
        <v-tab v-for="item in menu" :key="item.id" :value="item" :to="item.to">
          {{ item.id }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <router-view />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
