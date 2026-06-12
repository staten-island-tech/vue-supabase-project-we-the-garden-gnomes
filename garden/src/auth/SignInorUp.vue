<template>
  <div class="sign">
    <SignUp />
  </div>
  <div class="log">
    <SignIn />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'
</script>

<style lang="scss" scoped></style>
