<script setup lang="ts">
import { useEpisodesFilter } from '@/composables/useEpisodesFilter'
const { modalValue, filterClick, cancelClick } = useEpisodesFilter()
</script>

<template>
  <v-col>
    <v-text-field
      label="Name"
      hide-details="auto"
      :model-value="modalValue.name"
      density="comfortable"
      @update:model-value="filterClick($event, 'name')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Episode"
      hide-details="auto"
      :model-value="modalValue.episode"
      density="comfortable"
      @update:model-value="filterClick($event, 'episode')"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="cancelClick()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
