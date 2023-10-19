<script setup lang="ts">
import { useEpisodesFilter } from '@/composables/filters/useEpisodesFilter'
const { modalValue, changeModalValue, clearModalValue } = useEpisodesFilter()
</script>

<template>
  <v-col>
    <v-text-field
      color="primary"
      label="Name"
      hide-details="auto"
      :model-value="modalValue.name"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'name')"
    />
  </v-col>
  <v-col>
    <v-text-field
      color="primary"
      label="Episode"
      hide-details="auto"
      :model-value="modalValue.episode"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'episode')"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="clearModalValue()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
