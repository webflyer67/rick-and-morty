<script setup lang="ts">
import { useCharacter } from '@/composables/graphql/useCharacter'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardCharacter from '@/components/cards/CardCharacter.vue'
import CardLocation from '@/components/cards/CardLocation.vue'
import CardEpisode from '@/components/cards/CardEpisode.vue'

const { id } = useRouteHelpers()
const { item, loading } = useCharacter(id)
item.value?.episodes
</script>

<template>
  <v-container v-if="!loading && item !== null">
    <v-row class="justify-center">
      <v-col class="v-col-sm-12 v-col-md-6 v-col-lg-4 v-col-xl-3">
        <card-character :item="item" />
      </v-col>

      <v-col
        class="d-flex flex-column justify-space-around v-col-sm-12 v-col-md-6 v-col-lg-4 v-col-xl-3"
      >
        <div class="text-h2">First seen in:</div>
        <div><card-location :item="item.origin" /></div>
        <div class="text-h2">Last known location:</div>
        <div><card-location :item="item.location" /></div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <div class="text-h2">Seen in episodes:</div>
    </v-row>
    <v-row v-if="item.episodes" class="justify-center">
      <v-col
        v-for="itemEpisode in item.episodes"
        :key="itemEpisode.id"
        class="v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2"
      >
        <card-episode :item="itemEpisode" showMore />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
