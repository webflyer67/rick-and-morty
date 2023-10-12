<script setup lang="ts">
import { useEpisodes } from '@/composables/graphql/useEpisodes'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

import CardEpisode from '@/components/cards/CardEpisode.vue'

const { realPage, pageClick } = useRouteHelpers()
const { info, items, loading } = useEpisodes(realPage)
</script>

<template>
  <v-container>
    <v-row
      ><v-col>Total items: {{ info.count }}</v-col></v-row
    >
    <v-pagination
      @update:modelValue="pageClick($event, 'episodes')"
      color="primary"
      :modelValue="realPage"
      :length="info.pages"
      :total-visible="8"
    ></v-pagination>
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
