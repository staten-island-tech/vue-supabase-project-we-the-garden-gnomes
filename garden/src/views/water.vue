<template>
  <div class="page">
    <div class="container">
      <Water />
    </div>
  </div>
</template>

<script setup>
import Water from '../components/water.vue'
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
}
</style>
