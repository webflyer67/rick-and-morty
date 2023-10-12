<script setup lang="ts">
import { useLocation } from '@/composables/graphql/useLocation'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardLocation from '@/components/cards/CardLocation.vue'

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
  </v-container>
</template>

<style lang="scss" scoped></style>
