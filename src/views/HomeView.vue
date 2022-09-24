<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
setTimeout(() => {
  router.push({ name: "loginPage" });
}, 7000);
</script>

<template>
  <header>
    <div class="menu mr-1"></div>
    <div class="logo mr-1">
      <div class="logo__img"></div>
      Woman Techmakers
    </div>
    <div class="search"></div>
  </header>
  <main>
    <div class="text">
      <h2 class="text-h5">
        We're building a world where all women can thrive in tech.
      </h2>
      <p>
        Google’s Women Techmakers program provides visibility, community, and
        resources for women in technology.
      </p>
    </div>
  </main>
  <section>
    <h2>Our Impact</h2>
    <div class="core">
      <div class="core__block">
        <div class="core__amb core__blockImg"></div>
        <p class="text-h3 text-center">1.1k</p>
        <p class="text-center">Ambassadors</p>
      </div>
      <div class="core__block">
        <div class="core__event core__blockImg"></div>
        <p class="text-h3 text-center">605</p>
        <p class="text-center">Events</p>
      </div>
      <div class="core__block">
        <div class="core__key core__blockImg"></div>
        <p class="text-h3 text-center">367</p>
        <p class="text-center">Keynotes</p>
      </div>
      <div class="core__block">
        <div class="core__member core__blockImg"></div>
        <p class="text-h3 text-center">81k</p>
        <p class="text-center">Members</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
header {
  padding: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    width: 2rem;
    height: 2rem;
    background-size: cover;
    background-image: url("@/assets/svg/Frame\ 9.svg");
  }
  .logo {
    flex-grow: 1;
    text-align: center;
    font-size: 1.5rem;
  }
  .search {
    width: 2rem;
    height: 2rem;
    background-size: cover;
    background-image: url("@/assets/svg/Frame\ 10.svg");
  }
}
main {
  padding-bottom: 40vh;
  position: relative;
  background-size: cover;
  background-image: url(https://developers.google.com/womentechmakers/images/home-banner.jpg);
  .text {
    position: absolute;
    width: 75%;
    top: 50px;
    left: 1rem;
    h2 {
      font-size: 22px;

      letter-spacing: 1px;
    }
    p {
      font-size: 10px;
      line-height: 20px;
    }
  }
}
section {
  padding: 1.25rem;

  h2 {
    text-align: center;
    font-weight: 700;
  }
}
.core {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 50vh;
  p {
    font-weight: 900;
  }
  p:first-of-type {
    color: #5086ec;
  }

  &__block {
    width: 48%;
    margin-bottom: 1rem;
  }

  .core__blockImg {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    background-size: cover;
  }
  &__amb {
    background-image: url("@/assets/svg/Frame\ 11.svg");
  }
  &__event {
    background-image: url("@/assets/svg/Frame\ 12.svg");
  }
  &__key {
    background-image: url("@/assets/svg/Frame\ 13.svg");
  }
  &__member {
    background-image: url("@/assets/svg/Frame\ 14.svg");
  }
}
</style>
