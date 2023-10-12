<script setup lang="ts">
import { useLocation } from '@/composables/graphql/useLocation'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardLocation from '@/components/cards/CardLocation.vue'
import CardCharacter from '@/components/cards/CardCharacter.vue'

const { id } = useRouteHelpers()
const { item, loading } = useLocation(id)
</script>

<template>
  <v-container v-if="!loading && item !== null">
    <v-row class="justify-center">
      <v-col class="v-col-md-6 v-col-lg-4 v-col-xl-3">
        <card-location :item="item" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <div class="text-h2">Characters in location:</div>
    </v-row>
    <v-row v-if="item.residents" class="justify-center">
      <v-col
        v-for="itemCharacter in item.residents"
        :key="itemCharacter.id"
        class="v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2"
      >
        <card-character :item="itemCharacter" showMore />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
