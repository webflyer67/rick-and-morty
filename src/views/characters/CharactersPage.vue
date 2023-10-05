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

const { info, results, loading, error }: IResult<ICharacter> = useCharacters(page)

</script>

<template>
  <div v-if="!loading && results" class="container">
    <div class="row" v-for="character in results" :key="character.id">
      <div>{{ character.id }}</div>
      <div>{{ character.name }}</div>
      <div>{{ character.gender }}</div>
    </div>
    <button @click="router.push({ params: { page: page + 1 } })">next</button>
  </div>

  <div>
    hello -{{ route.params.page }}- hello -{{ loading }}- hello -{{ error }}- hello -{{ info }}-
    hello -{{ results }}-
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
