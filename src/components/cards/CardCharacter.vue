<script setup lang="ts">
import type { PropType } from 'vue'
import type { ICharacter } from '@/types/dataset/ICharacter'

import { useRouteHelpers } from '@/composables/useRouteHelpers'

const { moreClick } = useRouteHelpers()

defineProps({
  item: {
    type: Object as PropType<ICharacter>,
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
    <v-img class="align-end text-white" :src="item?.image" cover>
      <v-card-title> #{{ item.id }}: {{ item.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Species: {{ item.species }} </v-card-subtitle>
    <v-card-subtitle class="pt-4"> Type: {{ item.type ? item.type : '-' }} </v-card-subtitle>
    <v-card-subtitle class="pt-4"> Gender: {{ item.gender }} </v-card-subtitle>
    <v-card-subtitle class="pt-4"> Status: {{ item.status }} </v-card-subtitle>
    <v-card-actions class="justify-end">
      <v-btn v-if="showMore" @click="moreClick(item.id, 'character')" color="primary">
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
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
