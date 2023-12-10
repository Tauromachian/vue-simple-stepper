<template>
  <div>
    <vue-simple-stepper
      :steps="state.steps"
      :step="state.step"
      @click:next="nextStep"
      @click:previous="previousStep"
      @click:submit="submitStep"
    >
      <div class="content first"></div>
      <div class="content second"></div>
      <div class="content third"></div>
    </vue-simple-stepper>
  </div>
</template>

<script setup>
import VueSimpleStepper from "vue-simple-stepper";

import "vue-simple-stepper/dist/style.css";

import { reactive } from "vue";

import "vue-simple-stepper/dist/style.css";

const state = reactive({
  steps: ["Step 1", "Step 2", "Step 3"],
  step: 1,
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

<style>
.card {
  border-radius: 4px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 2em;
}

.content {
  height: 200px;
  border-radius: 4px;
}

.content.first {
  background: #bdbdbd;
}
.content.second {
  background: #ef5350;
}
.content.third {
  background: #42a5f5;
}
</style>
