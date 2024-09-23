<script>
export default {
  async setup() {
    const region = 'Kanto'

    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) =>
      res.json()
    )

    return {
      pokedex,
      region
    }
  }
}
</script>
<template>
  <pre>{{ pokedex }}</pre>
</template>
