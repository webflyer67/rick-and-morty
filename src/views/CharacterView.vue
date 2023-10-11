<script setup lang="ts">
// import { useRouter } from 'vue-router'
// import { computed, type ComputedRef } from 'vue'
// import type { IResult } from '@/types/IResult'
// import type { ICharacter } from '@/types/dataset/ICharacter'
import { useCharacter } from '@/composables/graphql/useCharacter'
import { useRouteHelpers } from '@/composables/useRouteHelpers'

// const router = useRouter()
const { id } = useRouteHelpers()

//: IResult<ICharacter>
const { item, loading } = useCharacter(id)
</script>

<template>
  <v-container v-if="!loading && item !== null">
    <v-row class="justify-center">
      <v-card class="mx-auto elevation-10" width="100%">
        <v-row>
          <v-col>
            <v-img class="elevation-3 align-end text-white" width="400px" :src="item.image" cover>
              <v-card-title> #{{ item.id }}: {{ item.name }}</v-card-title>
            </v-img>
          </v-col>
          <v-col>
            <v-card-subtitle class="pt-4">
              Species: {{ item.species }}
              <span v-if="item.type">({{ item.type }})</span>
            </v-card-subtitle>
            <v-card-subtitle class="pt-4"> Gender: {{ item.gender }} </v-card-subtitle>
            <v-card-subtitle class="pt-4"> Status: {{ item.status }} </v-card-subtitle>
            <!-- <v-card-actions class="justify-end">
          <v-btn color="primary"> More... </v-btn>
        </v-card-actions> -->
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
  <!-- <v-row class="justify-center">{{ id }}</v-row>
  <v-row class="justify-center">
    <pre>{{ item }}</pre>
  </v-row>
  <v-row class="justify-center">{{ loading }}</v-row> -->

  <!-- <v-container v-if="!loading && items">
    <v-row>
      <v-btn @click="prevBtn"> &lt; -- prev page </v-btn>
      <v-btn @click="nextBtn"> next page -- &gt; </v-btn>
    </v-row>

    <v-row class="justify-center">
      <v-col v-for="item in items" :key="item.id" class="v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2">
        <v-card class="mx-auto elevation-10" max-width="100%">
          <v-img class="align-end text-white" height="250" :src="item.image" cover>
            <v-card-title> #{{ item.id }}: {{ item.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Species: {{ item.species }}
            <span v-if="item.type">({{ item.type }})</span>
          </v-card-subtitle>
          <v-card-subtitle class="pt-4"> Gender: {{ item.gender }} </v-card-subtitle>
          <v-card-subtitle class="pt-4"> Status: {{ item.status }} </v-card-subtitle>
          <v-card-actions class="justify-end">
            <v-btn color="primary"> More... </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<style lang="scss" scoped>
.v-card-title {
  text-shadow: 1px 1px 2px black;
}

.v-card-subtitle {
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
