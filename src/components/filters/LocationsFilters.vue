<script setup lang="ts">
import { useLocationsFilter } from '@/composables/filters/useLocationsFilter'
const { modalValue, changeModalValue, clearModalValue } = useLocationsFilter()
</script>

<template>
  <v-col>
    <v-text-field
      label="Name"
      hide-details="auto"
      :model-value="modalValue.name"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'name')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Dimension"
      hide-details="auto"
      :model-value="modalValue.dimension"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'dimension')"
    />
  </v-col>
  <v-col>
    <v-text-field
      label="Type"
      hide-details="auto"
      :model-value="modalValue.type"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'type')"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="clearModalValue()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
