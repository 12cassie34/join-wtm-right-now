<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
</script>

<template>
  <main>
    <v-btn variant="outlined" color="primary">
      <span>&#x3c;</span>
      Back
    </v-btn>
    <div class="step-indicator">
      <div class="step">1</div>
      <div class="link"></div>
      <div class="step">2</div>
      <div class="link"></div>
      <div class="step">3</div>
    </div>
    <form>
      <div class="step-1">
        <div>
          <label>Email <span class="required-star">*</span></label>
          <v-text-field
            v-model="email"
            color="primary"
            variant="outlined"
            class="rounded-sm"
            density="compact"
            placeholder="example@gmail.com"
          ></v-text-field>
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
.step-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #d6d6d6;
}

.step.active {
  background-color: #5186ec;
}

.link {
  height: 7px;
  width: 20vw;
  border-radius: 1rem;
  background-color: #d6d6d6;
}

label {
    color: #5186ec;
    font-weight: 700;
    font-size: 1.25rem;
}
.required-star {
    color: #FC7070;
}
</style>
