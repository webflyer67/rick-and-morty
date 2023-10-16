<script setup lang="ts">
import { useLocationsFilter } from '@/composables/useLocationsFilter'
const { modalValue, filterClick, cancelClick } = useLocationsFilter()
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
      label="Dimension"
      hide-details="auto"
      :model-value="modalValue.dimension"
      density="comfortable"
      @update:model-value="filterClick($event, 'dimension')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Type"
      hide-details="auto"
      :model-value="modalValue.type"
      density="comfortable"
      @update:model-value="filterClick($event, 'type')"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="cancelClick()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
