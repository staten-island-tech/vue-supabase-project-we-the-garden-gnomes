<template>
  <div class="page">
    <div class="container">
      <Water />
      <Flowers />
    </div>
  </div>
</template>

<script setup>
import Water from '../components/water.vue'
import Flowers from '../components/flowers.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  width: 100%;
  max-width: 1200px;
  display: grid;
  gap: 2rem;
}
</style>
