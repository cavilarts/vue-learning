<script lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import CharacterList from '@/components/CharacterList.vue'
import CounterComponent from '@/components/CounterComponent.vue'
import UserCard from '@/components/user-card.vue'

export default {
  components: {
    BaseLayout,
    CharacterList,
    CounterComponent,
    UserCard
  },
  data() {
    return {
      userData: {
        name: 'Ben',
        preferredFramework: 'vue',
        preferredFood: 'sushi',
        favoriteNumbers: [1, 3, 5, 7, 9]
      }
    }
  },
  computed: {
    refinedUserData() {
      return {
        name: this.userData.name,
        food: this.userData.preferredFood
      }
    }
  },
  methods: {
    changeName(newName: string) {
      this.userData.name = newName
    }
  }
}
</script>

<template>
  <BaseLayout>
    <template v-slot:navigation>
      <UserCard :user="refinedUserData" @change-name="changeName" />
    </template>
    <template v-slot:content>
      <CounterComponent />
    </template>
    <template v-slot:footer>
      <CharacterList />
    </template>
  </BaseLayout>
</template>
