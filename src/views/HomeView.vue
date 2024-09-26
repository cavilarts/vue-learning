<script>
import PokedexFullComp from '@/components/CompositionComponents/PokedexFullComp.vue'
import { favPokemon } from '../composables/countStore'

export default {
  setup() {
    return { favPokemon }
  },
  data() {},
  components: {
    PokedexFullComp
  },
  methods: {
    changeFavPokemon(name) {
      favPokemon.value = name
    }
  }
}
</script>
<template>
  <Suspense>
    <PokedexFullComp :favoritePokemon="favPokemon" @change-fav-pokemon="changeFavPokemon" />
    <template #fallback> Loading ... </template>
  </Suspense>
</template>

<style>
button {
  background-color: #020202;
  color: #fff;
  padding: 1rem;
  border-radius: 0.2rem;
  font-weight: 600;
}
</style>
