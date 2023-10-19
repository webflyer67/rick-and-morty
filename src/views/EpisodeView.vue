<script setup lang="ts">
import { useEpisode } from '@/composables/graphql/useEpisode'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardEpisode from '@/components/cards/CardEpisode.vue'
import CardCharacter from '@/components/cards/CardCharacter.vue'

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

    <v-row class="d-flex justify-center">
      <div class="text-h4 text-primary">Characters in episode:</div>
    </v-row>
    <v-row v-if="item.characters" class="justify-center">
      <v-col
        v-for="itemCharacter in item.characters"
        :key="itemCharacter.id"
        class="v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2"
      >
        <card-character :item="itemCharacter" showMore />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
