<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { computed, type ComputedRef } from 'vue'
import type { IResults } from '@/types/IResults'
import type { ILocation } from '@/types/dataset/ILocation'
import { useLocations } from '@/composables/graphql/useLocations'
import { useRouteHelpers } from '@/composables/useRouteHelpers'
import type { TID } from '@/types/types'

const router = useRouter()
const { realPage } = useRouteHelpers()

function moreClick(id: TID) {
  router.push({ name: 'location', params: { id } })
}

function pageClick(page: number) {
  if (page == 1) {
    router.push({ name: 'locationsFirst' })
  } else {
    router.push({ name: 'locations', params: { page } })
  }
}

const { info, items, loading }: IResults<ILocation> = useLocations(realPage)
</script>

<template>
  <v-container>
    <v-row
      ><v-col>Total items: {{ info.count }}</v-col></v-row
    >
    <v-pagination
      @update:modelValue="pageClick($event)"
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
        <v-card class="mx-auto elevation-10" max-width="100%">
          <v-card-title> #{{ item.id }}: {{ item.name }}</v-card-title>
          <v-card-subtitle class="pt-4">Dimension: {{ item.dimension }}</v-card-subtitle>
          <v-card-subtitle class="pt-4">Type: {{ item.type }}</v-card-subtitle>
          <v-card-actions class="justify-end">
            <v-btn @click="moreClick(item.id)" color="primary"> More... </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.v-card-title {
  text-shadow: 1px 1px 2px black;
}

.v-card-subtitle {
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
