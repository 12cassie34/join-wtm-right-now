<script setup lang="ts"></script>
<template>
  <main class="login">
    <div class="logo">
      <img
        src="https://developers.google.com/womentechmakers/images/wtm-logo_96.png"
        alt="logo"
        class="logo__img mb-2"
      />
      <h2 class="logo__text text-grey">Women<br />Techmakers</h2>
    </div>
    <div class="feature">
      <v-btn
        size="large"
        variant="outlined"
        color="grey lighten-4"
        class="feature__btn mx-auto mb-3"
        max-width="270px"
      >
        <template #default>
          <div class="google"></div>
          <p class="font-weight-bold grey">Sign up with Google</p>
        </template>
      </v-btn>
      <v-btn
        style="margin-bottom: 18px"
        size="large"
        min-width="253px"
        color="primary"
        class="mx-auto font-weight-bold"
      >
        Sign up</v-btn
      >
      <div class="info">
        <p class="">
          Already have an account ?
          <a href="#" class="red--text">login in here.</a>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.login {
  max-width: 320px;
  margin: 25% auto 0px;
}

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
    width: 8.5rem;
    height: 8.5rem;
    display: block;
    margin: 0 auto;
  }
  &__text {
    text-align: center;
    font-size: 2rem;
    line-height: 125%;
  }
  margin-bottom: 66px;
}
.feature {
  display: flex;
  flex-wrap: wrap;

  &__btn {
    position: relative;
  }
  .google {
    position: absolute;
    left: 0px;
    z-index: -1;
  }
}
.info {
  padding-left: 2rem;
  font-size: 8px;
  @media screen and (min-width: 330px) {
    padding-left: 2rem;
  }
  a {
    color: #5186ec;
  }
}
</style>
