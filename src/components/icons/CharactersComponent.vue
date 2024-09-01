<script setup lang="ts">
import { ref } from 'vue'

const characters = ref([
  { name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', like: false },
  { name: 'C-3PO', height: 167, mass: 75, hair_color: 'n/a', like: false },
  { name: 'R2-D2', height: 96, mass: 32, hair_color: 'n/a', like: false },
  { name: 'Darth Vader', height: 202, mass: 136, hair_color: 'none', like: false },
  { name: 'Leia Organa', height: 150, mass: 49, hair_color: 'brown', like: false },
  { name: 'Owen Lars', height: 178, mass: 120, hair_color: 'brown, grey', like: false },
  { name: 'Beru Whitesun lars', height: 165, mass: 75, hair_color: 'brown', like: false },
  { name: 'R5-D4', height: 97, mass: 32, hair_color: 'n/a', like: false },
  { name: 'Biggs Darklighter', height: 183, mass: 84, hair_color: 'black', like: false },
  { name: 'Obi-Wan Kenobi', height: 182, mass: 77, hair_color: 'auburn, white', like: false }
])

interface Character {
  name: string
  height: number
  mass: number
  hair_color: string
  like: boolean
}

const likeCharacter = (character: Character) => {
  console.log(character)
  character.like = !character.like
}

const handleSubmit = (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const newCharacter: Character = {
    name: (form.querySelector('#name') as HTMLInputElement).value,
    height: parseInt((form.querySelector('#height') as HTMLInputElement).value),
    mass: parseInt((form.querySelector('#mass') as HTMLInputElement).value),
    hair_color: (form.querySelector('#hair_color') as HTMLInputElement).value,
    like: false
  }
  addCharacter(newCharacter)
}

const addCharacter = (character: Character) => {
  characters.value.push(character)
}
</script>
<template>
  <section>
    <h1>Star Wars Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <p>Name: {{ character.name }}</p>
        <p>Height: {{ character.height }}</p>
        <p>Mass: {{ character.mass }}</p>
        <p v-if="character.hair_color !== 'n/a'">Hair Color: {{ character.hair_color }}</p>
        <button @click="() => likeCharacter(character)">
          {{ character.like ? 'Unlike' : 'Like' }}
        </button>
      </li>
    </ul>
    <form @submit.prevent="handleSubmit">
      <h2>Add character</h2>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="height">Height</label>
        <input type="number" id="height" />
      </div>
      <div>
        <label for="mass">Mass</label>
        <input type="number" id="mass" />
      </div>
      <div>
        <label for="hair_color">Hair Color</label>
        <input type="text" id="hair_color" />
      </div>
      <button type="submit">Add</button>
    </form>
  </section>
</template>
