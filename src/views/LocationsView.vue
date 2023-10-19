<script setup lang="ts">
import { useLocations } from '@/composables/graphql/useLocations'
import { useRouteHelpers } from '@/composables/useRouteHelpers'
import { useLocationsFilter } from '@/composables/filters/useLocationsFilter'
import { useCountString } from '@/composables/useCountString'

import LocationsFilters from '@/components/filters/LocationsFilters.vue'
import CardLocation from '@/components/cards/CardLocation.vue'

const { realPage, pageClick } = useRouteHelpers()
const { modalValue } = useLocationsFilter()
const { info, items, loading } = useLocations(realPage, modalValue)
const { countString } = useCountString(info)
</script>

<template>
  <v-container>
    <v-row>
      <locations-filters />
    </v-row>

    <v-row class="justify-center align-center" v-if="info.pages != null && info.pages > 0">
      <v-pagination
        @update:modelValue="pageClick($event, 'locations')"
        color="primary"
        :modelValue="realPage"
        :length="info.pages"
        :total-visible="8"
      />
      <div class="text-h5 text-primary flex-nowrap">{{ countString }}</div>
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

    <v-row class="justify-center align-center" v-if="info.pages != null && info.pages > 0">
      <v-pagination
        @update:modelValue="pageClick($event, 'locations')"
        color="primary"
        :modelValue="realPage"
        :length="info.pages"
        :total-visible="8"
      />
      <div class="text-h5 text-primary flex-nowrap">{{ countString }}</div>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
