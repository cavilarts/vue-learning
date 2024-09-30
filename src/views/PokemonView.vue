<script setup>
import PokemonDetails from '@/components/Pokemon/PokemonDetails.vue'
</script>
<template>
  <Suspense>
    <PokemonDetails />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
