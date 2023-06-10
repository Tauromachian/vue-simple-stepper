<template>
  <div class="container">
    <div class="card">
      <vue-stepper
        :steps="state.steps"
        :step="state.step"
        @click:next="nextStep"
        @click:previous="previousStep"
        @click:submit="submitStep"
      >
        <div class="content first"></div>
        <div class="content second"></div>
        <div class="content third"></div>
      </vue-stepper>
    </div>
    <div class="card">
      <vue-stepper
        :steps="state.steps"
        :step="state.step"
        @click:next="nextStep"
        @click:previous="previousStep"
        @click:submit="submitStep"
      >
        <div class="content first"></div>
        <div class="content second"></div>
        <div class="content third"></div>

        <template
          #actions="{
            clickNext,
            clickPrevious,
            clickSubmit,
            isFirstStep,
            isLastStep,
          }"
        >
          <div>
            <button @click="clickPrevious" v-if="!isFirstStep">Previous</button>
            <button @click="clickNext" v-if="!isLastStep">Next</button>
            <button @click="clickSubmit" v-if="isLastStep">Submit</button>
          </div>
        </template>
      </vue-stepper>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import VueStepper from "./components/VueStepper.vue";

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
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #f9f2f8;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

#app {
  width: 100%;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 3em;

  max-width: 600px;
  width: 600px;
}

.content {
  height: 200px;
  border-radius: 4px;
}

.card {
  border-radius: 4px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 2em;
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
