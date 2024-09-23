<template>
  <div>
    <h1>{{ counterTitle }}</h1>
    <p :data-increment-by="incrementAmount">{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <h1>{{ incrementAmount }}</h1>
    <p>{{ optimizedIncrementAmount }}</p>
    <div>
      <label for="incrementAmount">Increment by</label>
      <input type="text" v-model="incrementAmount" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Component',
      incrementAmount: 1
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 10) {
        return 'Counter is greater than 10'
      } else {
        return 'Counter is less than or equal to 10'
      }
    },
    optimizedIncrementAmount(): number {
      return this.displayTitle.length * this.incrementAmount
    }
  },
  methods: {
    increment() {
      this.count += this.optimizedIncrementAmount
    },
    decrement() {
      this.count -= this.optimizedIncrementAmount
    }
  }
}
</script>
