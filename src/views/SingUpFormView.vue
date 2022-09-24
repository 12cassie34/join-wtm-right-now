<script setup lang="ts">
import { ref } from "vue";

const currentStep = ref(1);
const moveNextStep = () => currentStep.value++;

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const inputs = [
  {
    label: "Email",
    isRequired: true,
    isHiddenText: false,
    inputValue: email,
    placeholder: "example@gmail.com",
  },
  {
    label: "Password",
    isRequired: true,
    isHiddenText: true,
    isShowPassword: false,
    inputValue: password,
    placeholder: "10 ~ 12 numbers",
  },
  {
    label: "Confirm Password",
    isRequired: true,
    isHiddenText: true,
    isShowPassword: false,
    inputValue: confirmPassword,
    placeholder: "as same as password",
  },
];
</script>

<template>
  <main>
    <v-btn variant="text" color="primary">
      <span>&#x3c;</span>
      Back
    </v-btn>
    <div class="step-indicator">
      <div class="step" :class="currentStep === 1 && 'active'">1</div>
      <div class="link"></div>
      <div class="step">2</div>
      <div class="link"></div>
      <div class="step">3</div>
    </div>
    <form>
      <div v-if="currentStep === 1" class="step-1">
        <div v-for="(input, index) in inputs" :key="index">
          <label
            >{{ input.label }}
            <span v-if="input.isRequired" class="required-star">*</span></label
          >
          <v-text-field
            v-model="input.inputValue.value"
            color="primary"
            variant="outlined"
            density="compact"
            :placeholder="input.placeholder"
          ></v-text-field>
          <div>
            <v-icon>mdi-eye</v-icon>
            <v-icon large color="primary"> mdi-domain </v-icon>
          </div>
        </div>
      </div>
      <v-btn @click="moveNextStep" block color="primary"> Next </v-btn>
    </form>
  </main>
</template>

<style scoped>
.step-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
}

.step {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #d6d6d6;
  font-weight: 900;
  font-size: 1rem;
  color: white;
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
  color: #fc7070;
}
</style>
