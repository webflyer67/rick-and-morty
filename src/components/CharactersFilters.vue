<script setup lang="ts">
import { useCharactersFilter } from '@/composables/useCharactersFilter'
const { itemsStatus, itemsGender, modalValue, filterClick, cancelClick } = useCharactersFilter()
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
      label="Species"
      hide-details="auto"
      :model-value="modalValue.species"
      density="comfortable"
      @update:model-value="filterClick($event, 'species')"
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
  <v-col>
    <v-select
      :model-value="modalValue.status"
      @update:model-value="filterClick($event, 'status')"
      :items="itemsStatus"
      density="comfortable"
      label="Status"
    />
  </v-col>
  <v-col>
    <v-select
      :model-value="modalValue.gender"
      @update:model-value="filterClick($event, 'gender')"
      :items="itemsGender"
      density="comfortable"
      label="Gender"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="cancelClick()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
