<script>
import PokedexFullComp from '@/components/CompositionComponents/PokedexFullComp.vue'

export default {
  data() {
    return {
      favPokemon: 'Ekans'
    }
  },
  components: {
    PokedexFullComp
  },
  methods: {
    changeFavPokemon(name) {
      this.favPokemon = name
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
