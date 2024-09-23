<script>
export default {
  data: () => ({
    pokedex: []
  }),
  methods: {
    fetchPokemon() {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.pokedex = data.results
        })
    }
  },
  beforeCreate() {
    console.log('Before create')
    console.log(this.pokedex)
  },
  created() {
    this.fetchPokemon()
  }
}
</script>
<template>
  <div>Hello</div>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Load Pokemon</button>
</template>
