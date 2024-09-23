<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  emits: ['change-name'],
  methods: {
    changeName() {
      this.$emit('change-name', 'Carlos')
    }
  }
}
</script>

<template>
  <h1>User : {{ user.name }}</h1>
  <p>Favorite food: {{ user.food }}</p>
  <button @click="changeName">Change Name</button>
</template>
