<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
setTimeout(() => {
  router.push({ name: "loginPage" });
}, 5000);
</script>

<template>
  <main>homePage</main>
</template>
