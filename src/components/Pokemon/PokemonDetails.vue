<script setup>
import { useRoute } from 'vue-router'

const router = useRoute()

const pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${router.params.name}`).then(
  (res) => res.json()
)
</script>
<template>
  <h2>{{ pokemonDetails.name }}</h2>
  <img
    :src="pokemonDetails.sprites.front_default"
    :alt="pokemonDetails.name"
    width="200"
    height="auto"
  />
</template>
