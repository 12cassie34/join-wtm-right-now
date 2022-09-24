<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/login">About</RouterLink>
    <RouterLink to="/signUpForm">Sign Up Form</RouterLink>
  </nav>
  <RouterView />
</template>
