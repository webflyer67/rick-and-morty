<script setup lang="ts">
import { useCharactersFilter } from '@/composables/filters/useCharactersFilter'
const { itemsStatus, itemsGender, modalValue, changeModalValue, clearModalValue } =
  useCharactersFilter()
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
      label="Species"
      hide-details="auto"
      :model-value="modalValue.species"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'species')"
    />
  </v-col>
  <v-col>
    <v-text-field
      color="primary"
      label="Type"
      hide-details="auto"
      :model-value="modalValue.type"
      density="comfortable"
      @update:model-value="changeModalValue($event, 'type')"
    />
  </v-col>
  <v-col>
    <v-select
      color="primary"
      :model-value="modalValue.status"
      @update:model-value="changeModalValue($event, 'status')"
      :items="itemsStatus"
      density="comfortable"
      label="Status"
    />
  </v-col>
  <v-col>
    <v-select
      color="primary"
      :model-value="modalValue.gender"
      @update:model-value="changeModalValue($event, 'gender')"
      :items="itemsGender"
      density="comfortable"
      label="Gender"
    />
  </v-col>
  <v-col class="d-flex align-center flex-grow-0">
    <v-icon @click="clearModalValue()" size="large" color="primary" icon="mdi-cancel" />
  </v-col>
</template>

<style lang="scss" scoped></style>
