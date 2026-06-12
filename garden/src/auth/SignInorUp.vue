<template>
  <div class="sign">
    <SignUp />
  </div>
  <div class="log">
    <LogIn />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
</script>

<style lang="scss" scoped></style>
