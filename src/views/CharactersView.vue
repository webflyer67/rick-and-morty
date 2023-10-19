<script setup lang="ts">
import { useCharacters } from '@/composables/graphql/useCharacters'
import { useRouteHelpers } from '@/composables/useRouteHelpers'
import { useCharactersFilter } from '@/composables/filters/useCharactersFilter'
import { useCountString } from '@/composables/useCountString'

import CharactersFilters from '@/components/filters/CharactersFilters.vue'
import CardCharacter from '@/components/cards/CardCharacter.vue'

const { realPage, pageClick } = useRouteHelpers()
const { modalValue } = useCharactersFilter()
const { info, items, loading } = useCharacters(realPage, modalValue)
const { countString } = useCountString(info)
</script>

<template>
  <v-container>
    <v-row>
      <characters-filters />
    </v-row>

    <v-row class="justify-center align-center" v-if="info.pages != null && info.pages > 0">
      <v-pagination
        @update:modelValue="pageClick($event, 'characters')"
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
        <card-character :item="item" showMore />
      </v-col>
    </v-row>

    <v-row class="justify-center align-center" v-if="info.pages != null && info.pages > 0">
      <v-pagination
        @update:modelValue="pageClick($event, 'characters')"
        color="primary"
        :modelValue="realPage"
        :length="info.pages"
        :total-visible="8"
      />
      <div class="text-h5 text-primary flex-nowrap">{{ countString }}</div>
    </v-row>

    <v-row class="justify-center align-center" v-if="loading">
      <div class="text-h5 text-primary flex-nowrap">Loading data ...</div>
    </v-row>

    <v-row
      class="justify-center align-center"
      v-if="!(info.pages != null && info.pages > 0) && !loading"
    >
      <div class="text-h5 text-primary flex-nowrap">Nothing found</div>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
