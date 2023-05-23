<template>
  <div class="py-4">
    <div class="w-100 d-flex justify-center mb-8">
      <vue-stepper-step-header
        class="d-flex justify-center"
        :circle-content="step"
        active
        horizontal
      >
        {{ steps[step - 1] }}
      </vue-stepper-step-header>
    </div>
    <div class="d-flex align-center">
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
