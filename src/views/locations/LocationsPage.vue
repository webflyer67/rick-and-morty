<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, type ComputedRef } from 'vue'
import type { IResult } from '@/types/IResult'
import type { ICharacter } from '@/types/dataset/ICharacter'
import { useCharacters } from '@/composables/graphql/useCharacters'

const router = useRouter()
const route = useRoute()

let page: ComputedRef<number> = computed(() => {
  let page = Number(route?.params?.page)
  if (!(page > 0)) {
    page = 1
  }

  return page
})

function nextBtn() {
  if (page.value < info.value.pages) {
    // router.push({ name: 'characters', params: { page: page.value + 1 } })
    router.push({ path: `/characters/${page.value + 1}` })
  }
}

function prevBtn() {
  if (page.value >= 3) {
    // router.push({ name: 'characters', params: { page: page.value - 1 } })
    router.push({ path: `/characters/${page.value - 1}` })
  } else {
    // router.push({ name: 'charactersFirst' })
    router.push({ path: '/characters' })
  }
}

const { info, items, loading, error }: IResult<ICharacter> = useCharacters(page)
</script>

<template>
  <div v-if="!loading && items" class="container">
    <div>
      <div>page of pages [{{ route.params.page }} of {{ info.pages }}]</div>
      <div>loading = [{{ loading }}]</div>
      <div>error [{{ error }}]</div>

      <!-- hello -{{ results }}- -->
    </div>
    <v-btn @click="prevBtn"> prev page </v-btn>
    <v-btn @click="nextBtn"> next page !! </v-btn>
    <div class="row" v-for="item in items" :key="item.id">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
      <div>{{ item.gender }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .row {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }
}
</style>
