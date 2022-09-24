<script setup lang="ts"></script>
<template>
  <main class="login">
    <div class="logo">
      <img
        src="https://developers.google.com/womentechmakers/images/wtm-logo_96.png"
        alt="logo"
        class="logo__img"
      />
      <h2 class="logo__text">Women<br />Techmakers</h2>
    </div>
    <div class="feature">
      <v-btn color="indigo" variant="outlined" class="feature__btn">
        <template #default>
          <div class="google"></div>
          Sign up with Google</template
        >
      </v-btn>
      <v-btn color="primary"> Sign up</v-btn>
    </div>
  </main>
</template>

<style scoped lang="scss">
.google {
  background-image: url("@/assets/google.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
}
.logo {
  &__img {
    width: 6.4rem;
    height: 6.4rem;
    display: block;
    margin: 0 auto;
  }
  &__text {
    text-align: center;
  }
  margin-bottom: 66px;
}
.feature {
  display: flex;
  flex-wrap: wrap;
  &__btn {
    margin: 0 auto;
  }
  .google {
    position: relative;
    left: -5px;
  }
}
</style>
