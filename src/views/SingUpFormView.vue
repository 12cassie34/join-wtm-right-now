<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

import isSuccessRegisterd from "../assets/is-success.svg";

const genderOptions = ["Male", "Female", "Other"];

const currentStep = ref(1);
const moveToNextStep = () => currentStep.value++;
const moveToPrevStep = () => {
  currentStep.value === 1
    ? router.push({ path: "/" })
    : currentStep.value--;
};
const backToHome = () => router.push({ path: "/" });

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const name = ref("");
const phone = ref("");
const gender = ref("Male");
const isAgreeTerm = ref(true);
const isAgreeEmailPromo = ref(true);

const changeGender = (option: string) => (gender.value = option);

const step1Inputs = [
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
    placeholder: "As same as password",
  },
];

const step2Inputs = [
  {
    label: "Name",
    inputValue: name,
    placeholder: "Your name",
  },
  {
    label: "Phone",
    inputValue: phone,
    placeholder: "+886 91919119",
  },
];

const step2Checkbox = [
  {
    id: "isAgreeTerm",
    checkboxValue: isAgreeTerm,
    label:
      "I have read and agreed to be bound by the above terms and conditions",
  },
  {
    id: "isAgreeEmailPromo",
    checkboxValue: isAgreeEmailPromo,
    label: "I agree to receive information by email",
  },
];
</script>

<template>
  <main>
    <v-btn @click="moveToPrevStep" variant="text" color="primary">
      <span>&#x3c;</span>
      Back
    </v-btn>
    <div class="step-indicator">
      <div class="step" :class="currentStep === 1 && 'active'">1</div>
      <div class="link"></div>
      <div class="step" :class="currentStep === 2 && 'active'">2</div>
      <div class="link"></div>
      <div class="step" :class="currentStep === 3 && 'active'">3</div>
    </div>
    <form>
      <div v-if="currentStep === 1">
        <div v-for="(input, index) in step1Inputs" :key="index">
          <label
            >{{ input.label }}
            <span v-if="input.isRequired" class="required-star">*</span></label
          >
          <v-text-field
            v-model="input.inputValue.value"
            color="primary"
            variant="outlined"
            density="compact"
            single-line
            :label="input.placeholder"
            class="text-input"
          ></v-text-field>
        </div>
      </div>
      <div v-if="currentStep === 2">
        <div v-for="(input, index) in step2Inputs" :key="index">
          <label>{{ input.label }}</label>
          <v-text-field
            v-model="input.inputValue.value"
            color="primary"
            variant="outlined"
            density="compact"
            :placeholder="input.placeholder"
          ></v-text-field>
        </div>
        <div>
          <label>Gender</label>
          <div class="gender-options">
            <v-btn
              @click="changeGender(option)"
              v-for="option in genderOptions"
              :key="option"
              :variant="gender === option ? 'contained' : 'outlined'"
              color="primary"
              >{{ option }}</v-btn
            >
          </div>
        </div>
        <div class="terms-checkbox">
          <div v-for="(checkbox, index) in step2Checkbox" :key="index">
            <input
              v-model="checkbox.checkboxValue.value"
              type="checkbox"
              :id="checkbox.id"
              :name="checkbox.id"
            />
            <label class="checkbox-label" :for="checkbox.id">{{
              checkbox.label
            }}</label>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 3" class="step-3">
        <img :src="isSuccessRegisterd" alt="Registration completed!" />
        <h2>Registration completed!</h2>
      </div>
      <v-btn
        @click="moveToNextStep"
        v-if="currentStep < 3"
        block
        color="primary"
      >
        Next
      </v-btn>
      <v-btn @click="backToHome" v-if="currentStep === 3" block color="primary">
        Back to Home
      </v-btn>
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

.gender-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}

.checkbox-label {
  font-weight: 300;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.terms-checkbox {
  margin-bottom: 2.5rem;
}

.step-3 h2 {
  display: flex;
  justify-content: center;
  color: #696d72;
  font-weight: 700;
  margin-bottom: 2.5rem;
}
</style>
