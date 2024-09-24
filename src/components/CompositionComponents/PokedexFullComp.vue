<script setup>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

defineProps({
  favoritePokemon: {
    type: String,
    default: 'Pikachu'
  }
})

const emits = defineEmits(['change-fav-pokemon'])

const region = ref('Kanto')
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
</script>
<template>
  <button @click="updateRegion">Update Region</button>
  <h2>{{ region }}</h2>
  <h3>{{ regionAllCaps }}</h3>
  <h3>{{ regionNameLowerCase() }}</h3>
  <p>{{ types.favoriteType }}</p>
  <span>{{ favoritePokemon }}</span>
  <button @click="changeFavPokemon">change fav</button>
  <pre>{{ pokedex }}</pre>
</template>
