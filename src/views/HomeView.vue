<script>
import PokedexComp from '@/components/CompositionComponents/PokedexComp.vue'

export default {
  components: {
    PokedexComp
  }
}
</script>
<template>
  <Suspense>
    <PokedexComp />
    <template #fallback> Loading ... </template>
  </Suspense>
</template>
