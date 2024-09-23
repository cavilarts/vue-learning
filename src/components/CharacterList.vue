<script lang="ts">
export default {
  data() {
    return {
      characterList: [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' },
        { name: 'Leia Organa' },
        { name: 'Han Solo' },
        { name: 'Chewbacca' },
        { name: 'Yoda' },
        { name: 'R2-D2' },
        { name: 'C-3PO' }
      ],
      favoriteList: []
    }
  },
  methods: {
    favoriteCharacter(character) {
      this.favoriteList.push(character)
    }
  }
}
</script>
<template>
  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There's no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li v-for="(character, index) in characterList" :key="`event-character-${index}`">
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter">Favorite</button>
    </li>
  </ul>
  <p v-else>There are odd characters</p>
</template>
