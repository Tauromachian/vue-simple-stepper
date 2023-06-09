<template>
  <div class="py-4">
    <div class="stepper-header__active">
      <vue-stepper-step-header
        class="d-flex justify-center"
        :circle-content="step"
        active
        horizontal
      >
        {{ steps[step - 1] }}
      </vue-stepper-step-header>
    </div>
    <div class="stepper-header__content">
      <template v-for="(stepHeader, index) in steps" :key="`step-${index}`">
        <vue-stepper-step-header
          :active="step === index + 1"
          :was-active="step > index + 1"
          :circle-content="index + 1"
          :small="true"
        >
          {{ stepHeader }}
        </vue-stepper-step-header>
        <v-divider
          v-if="index !== steps.length - 1"
          :thickness="2"
          class="border-opacity-75"
          :color="step > index + 1 ? 'primary' : 'grey'"
        ></v-divider>
      </template>
    </div>
  </div>
</template>

<script setup>
import VueStepperStepHeader from "./VueStepperStepHeader.vue";

defineProps({
  step: {
    type: Number,
    default: 0,
  },
  steps: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.stepper-header__active {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 8px;
}

.stepper-header__content {
  display: flex;
  justify-content: space-evenly;
}

.was-active {
  color: #033562;
  border-color: #033562;
}

.active {
  background-color: #033562;
  border-color: #033562;
  color: white;
}

.active__text {
  color: #033562;
}
</style>
