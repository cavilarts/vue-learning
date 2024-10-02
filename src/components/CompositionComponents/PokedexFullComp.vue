<script setup>
import { useFavoritePokemon } from '@/stores/counter'
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  favoritePokemon: {
    type: String,
    default: 'Pikachu'
  }
})

const { favorites, addToFavorites } = useFavoritePokemon()
const emits = defineEmits(['change-fav-pokemon'])
const router = useRouter()
const region = ref('Kanto')
const customButton = ref('blue')
const regionAllCaps = computed(() => {
  return region.value.toUpperCase()
})
const types = reactive({
  favoriteType: 'Venom'
})

const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => res.json())

function updateRegion() {
  if (region.value === 'Kanto') {
    region.value = 'Hoenn'
  } else {
    region.value = 'Kanto'
  }
}

function regionNameLowerCase() {
  return region.value.toLowerCase()
}

function changeFavPokemon() {
  emits('change-fav-pokemon', 'Raichu')
}

function navigateToDetails() {
  router.push('/about')
}

function clickFavButton(name) {
  addToFavorites(name)
}
</script>
<template>
  <button @click="updateRegion" :class="customButton">Update Region</button>
  <h2>{{ region }}</h2>
  <h3>{{ regionAllCaps }}</h3>
  <h3>{{ regionNameLowerCase() }}</h3>
  <p>{{ types.favoriteType }}</p>
  <span>{{ favoritePokemon }}</span>
  <button @click="changeFavPokemon">change fav</button>
  <button @click="navigateToDetails">Details</button>
  <ul>
    <li v-for="pokemon in pokedex.results" :key="pokemon.name">
      <router-link :to="'/pokemon/' + pokemon.name">{{ pokemon.name }}</router-link>
      <button @click="clickFavButton(pokemon.name)">
        Favorite {{ favorites.includes(pokemon.name) ? '⭐️' : '' }}
      </button>
    </li>
  </ul>
</template>
<style scoped>
button {
  background-color: #8f2;
  color: #1069f7;
}

.customButton {
  background-color: #ff22aa;
  color: #fff;
}
</style>
