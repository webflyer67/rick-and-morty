<script setup lang="ts">
import { useEpisode } from '@/composables/graphql/useEpisode'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardEpisode from '@/components/cards/CardEpisode.vue'

const { id } = useRouteHelpers()
const { item, loading } = useEpisode(id)
</script>

<template>
  <v-container v-if="!loading && item !== null">
    <v-row class="justify-center">
      <v-col class="v-col-md-6 v-col-lg-4 v-col-xl-3">
        <card-episode :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
