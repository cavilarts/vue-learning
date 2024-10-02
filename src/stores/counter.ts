import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  return { count, doubleCount, increment }
})

export const useFavoritePokemon = defineStore('favPokemon', () => {
  const favorites = reactive([])

  function addToFavorites(name: string) {
    if (favorites.includes(name)) {
      const index = favorites.indexOf(name)

      favorites.splice(index, 1)
    } else {
      favorites.push(name)
    }
  }

  return { favorites, addToFavorites }
})
