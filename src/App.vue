<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">About</RouterLink>
  </nav>
  <v-btn color="secondary">
      Primary
    </v-btn>
  <RouterView />
</template>
