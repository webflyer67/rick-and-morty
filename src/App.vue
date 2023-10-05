<script setup lang="ts">
import { RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watch } from 'vue'
// import { ref } from 'vue';

// const name = "morty"
// characters(filter: {name: "${name}"}) {
const query = gql`
  {
    characters {
      info {
        count
      }
      results {
        id
        name
        gender
      }
    }
  }
`

// let uuu =    ref('')
const { result, loading } = useQuery(query)
// console.log(999, result, loading)

watch(loading, (newValue) => {
  console.log(111, newValue, result.value)
  // let query = reassignQuery(newValue.query)
  // if (!isEqual(newValue.query, query)) {
  //   console.log(222, 'router.replace', { query })
  //   // History.replaceState()
  //   // router.push({ path: '/', query })
  // }
})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <!-- <template v-if="!loading">
    <div class="container" v-for="character in result.characters.results" :key="character.id">
      <div>{{ character.id }}</div>
      <div>{{ character.name }}</div>
      <div>{{ character.gender }}</div>

    </div>
  </template> 

  <div>
    --- {{ loading }} ---
    *** {{ result }} ***
  </div>-->
</template>

<style scoped>
.container {
  display: flex;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
