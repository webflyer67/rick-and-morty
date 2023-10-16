<script setup lang="ts">
import { useEpisodesFilter } from '@/composables/useEpisodesFilter'
const { modalValue, filterClick } = useEpisodesFilter()
</script>

<template>
  <v-col>
    <v-text-field
      label="Name"
      hide-details="auto"
      :model-value="modalValue.name"
      @update:model-value="filterClick($event, 'name')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Episode"
      hide-details="auto"
      :model-value="modalValue.episode"
      @update:model-value="filterClick($event, 'episode')"
    />
  </v-col>
</template>

<style lang="scss" scoped></style>
