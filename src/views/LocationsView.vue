<script setup lang="ts">
import { useLocations } from '@/composables/graphql/useLocations'
import { useRouteHelpers } from '@/composables/useRouteHelpers'
import { useCountString } from '@/composables/useCountString'

import CardLocation from '@/components/cards/CardLocation.vue'

const { realPage, pageClick } = useRouteHelpers()
const { info, items, loading } = useLocations(realPage)
const { countString } = useCountString(info)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-pagination
          @update:modelValue="pageClick($event, 'locations')"
          color="primary"
          :modelValue="realPage"
          :length="info.pages"
          :total-visible="8"
        />
      </v-col>
      <v-col class="d-flex align-center">
        <div>{{ countString }}</div>
      </v-col>
    </v-row>

    <v-row v-if="!loading && items" class="justify-center">
      <v-col
        v-for="item in items"
        :key="item.id"
        class="v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2"
      >
        <card-location :item="item" showMore />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
