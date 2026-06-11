<template>
  <div class="sign">
    <Signup />
  </div>
  <div class="log">
    <Login />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Signup from '@/components/Signup.vue'
import Login from '@/components/Login.vue'
</script>

<style lang="scss" scoped></style>
