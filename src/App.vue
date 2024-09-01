<script setup lang="ts">
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>Hello</header>
  <main>
    <HomeView />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
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
