<script setup lang="ts">
import { useCharactersFilter } from '@/composables/useCharactersFilter'
const { itemsStatus, itemsGender, modalValue, filterClick } = useCharactersFilter()
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
      label="Species"
      hide-details="auto"
      :model-value="modalValue.species"
      @update:model-value="filterClick($event, 'species')"
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
  <v-col>
    <v-select
      :model-value="modalValue.status"
      @update:model-value="filterClick($event, 'status')"
      :items="itemsStatus"
      density="comfortable"
      label="Status"
    ></v-select>
  </v-col>
  <v-col>
    <v-select
      :model-value="modalValue.gender"
      @update:model-value="filterClick($event, 'gender')"
      :items="itemsGender"
      density="comfortable"
      label="Gender"
    ></v-select>
  </v-col>
</template>

<style lang="scss" scoped></style>
