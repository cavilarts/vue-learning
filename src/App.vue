<script setup lang="ts">
const characters = [
  { name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond' },
  { name: 'C-3PO', height: 167, mass: 75, hair_color: 'n/a' },
  { name: 'R2-D2', height: 96, mass: 32, hair_color: 'n/a' },
  { name: 'Darth Vader', height: 202, mass: 136, hair_color: 'none' },
  { name: 'Leia Organa', height: 150, mass: 49, hair_color: 'brown' },
  { name: 'Owen Lars', height: 178, mass: 120, hair_color: 'brown, grey' },
  { name: 'Beru Whitesun lars', height: 165, mass: 75, hair_color: 'brown' },
  { name: 'R5-D4', height: 97, mass: 32, hair_color: 'n/a' },
  { name: 'Biggs Darklighter', height: 183, mass: 84, hair_color: 'black' },
  { name: 'Obi-Wan Kenobi', height: 182, mass: 77, hair_color: 'auburn, white' }
]
</script>

<template>
  <header>Hello</header>
  <main>
    <h1>Star Wars Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.name">
        <p>Name: {{ character.name }}</p>
        <p>Height: {{ character.height }}</p>
        <p>Mass: {{ character.mass }}</p>
        <p v-if="character.hair_color !== 'n/a'">Hair Color: {{ character.hair_color }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
