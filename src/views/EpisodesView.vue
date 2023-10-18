<script setup lang="ts">
import { useEpisodes } from '@/composables/graphql/useEpisodes'
import { useRouteHelpers } from '@/composables/useRouteHelpers'
import { useEpisodesFilter } from '@/composables/filters/useEpisodesFilter'
import { useCountString } from '@/composables/useCountString'

import EpisodesFilters from '@/components/filters/EpisodesFilters.vue'
import CardEpisode from '@/components/cards/CardEpisode.vue'

const { realPage, pageClick } = useRouteHelpers()
const { modalValue } = useEpisodesFilter()
const { info, items, loading } = useEpisodes(realPage, modalValue)
const { countString } = useCountString(info)
</script>

<template>
  <v-container>
    <v-row>
      <episodes-filters />
    </v-row>
    <v-row v-if="info.pages != null && info.pages > 0">
      <v-col>
        <v-pagination
          @update:modelValue="pageClick($event, 'episodes')"
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
        <card-episode :item="item" showMore />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
