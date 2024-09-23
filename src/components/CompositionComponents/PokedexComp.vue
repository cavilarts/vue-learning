<script>
import { reactive } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'

export default {
  async setup() {
    const region = ref('Kanto')
    const regionAllCaps = computed(() => {
      return region.value.toUpperCase()
    })
    const types = reactive({
      favoriteType: 'Venom'
    })

    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) =>
      res.json()
    )

    return {
      pokedex,
      region,
      regionAllCaps,
      types
    }
  },
  methods: {
    updateRegion() {
      if (this.region === 'Kanto') {
        this.region = 'Hoenn'
      } else {
        this.region = 'Kanto'
      }
    }
  },
  computed: {
    regionNameLowerCase() {
      return this.region.toLowerCase()
    }
  }
}
</script>
<template>
  <button @click="updateRegion">Update Region</button>
  <h2>{{ region }}</h2>
  <h3>{{ regionAllCaps }}</h3>
  <h3>{{ regionNameLowerCase }}</h3>
  <p>{{ types.favoriteType }}</p>
  <pre>{{ pokedex }}</pre>
</template>
