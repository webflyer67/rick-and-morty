<script setup lang="ts">
import type { PropType } from 'vue'
import type { IEpisode } from '@/types/dataset/IEpisode'

import { useRouteHelpers } from '@/composables/useRouteHelpers'

const { moreClick } = useRouteHelpers()

defineProps({
  item: {
    type: Object as PropType<IEpisode>,
    required: true
  },
  showMore: {
    type: Boolean as PropType<Boolean>,
    default: () => false
  }
})
</script>

<template>
  <v-card class="mx-auto elevation-10" max-width="100%">
    <v-card-title class="text-h5 text-primary"> #{{ item.id }}: {{ item.name }}</v-card-title>
    <v-card-subtitle class="pt-2">Episode: {{ item.episode }}</v-card-subtitle>
    <v-card-subtitle class="pt-2">Air Date: {{ item.airDate }}</v-card-subtitle>
    <v-card-actions class="justify-end">
      <v-btn v-if="showMore" @click="moreClick(item.id, 'episode')" color="primary">
        More...
      </v-btn>
    </v-card-actions>
  </v-card>
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
