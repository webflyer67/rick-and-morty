<script setup lang="ts">
import { useLocationsFilter } from '@/composables/useLocationsFilter'
const { modalValue, filterClick } = useLocationsFilter()
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
      label="Dimension"
      hide-details="auto"
      :model-value="modalValue.dimension"
      @update:model-value="filterClick($event, 'dimension')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Type"
      hide-details="auto"
      :model-value="modalValue.type"
      @update:model-value="filterClick($event, 'type')"
    />
  </v-col>
</template>

<style lang="scss" scoped></style>
