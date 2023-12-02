<template>
  <vue-simple-stepper
    :steps="state.steps"
    :step="state.step"
    @click:next="nextStep"
    @click:previous="previousStep"
    @click:submit="submitStep"
  >
    <div class="content first">asdfasd</div>
    <div class="content second">asdfasd</div>
    <div class="content third">asdfasd</div>
  </vue-simple-stepper>
</template>

<script setup>
import { reactive } from "vue";

import "vue-simple-stepper/dist/style.css";

import VueSimpleStepper from "vue-simple-stepper";

const state = reactive({
  steps: ["Step 1", "Step 2", "Step 3"],
  step: 1
});

const nextStep = () => {
  state.step++;
};

const previousStep = () => {
  state.step--;
};

const submitStep = () => {
  console.log("Step submitted");
};
</script>
