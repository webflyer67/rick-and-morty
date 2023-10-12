<script setup lang="ts">
import { useCharacter } from '@/composables/graphql/useCharacter'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardCharacter from '@/components/cards/CardCharacter.vue'

const { id } = useRouteHelpers()
const { item, loading } = useCharacter(id)
item.value?.episodes
</script>

<template>
  <v-container v-if="!loading && item !== null">
    <v-row class="justify-center">
      <v-col class="v-col-md-6 v-col-lg-4 v-col-xl-3">
        <card-character :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
