<template>
  <div class="py-4">
    <div class="stepper-header__active">
      <stepper-step-header
        class="d-flex justify-center"
        :circle-content="step"
        active
        horizontal
        show-text
      >
        {{ steps[step - 1] }}
      </stepper-step-header>
    </div>
    <div class="stepper-header__content">
      <template v-for="(stepHeader, index) in steps" :key="`step-${index}`">
        <stepper-step-header
          :active="step === index + 1"
          :was-active="step > index + 1"
          :circle-content="index + 1"
          :small="true"
        >
          {{ stepHeader }}
        </stepper-step-header>
        <base-divider
          v-if="index !== steps.length - 1"
          :thickness="2"
          class="border-opacity-75"
          :active="step > index + 1"
        ></base-divider>
      </template>
    </div>
  </div>
</template>

<script setup>
import StepperStepHeader from "./StepperStepHeader.vue";
import BaseDivider from "./BaseDivider.vue";

defineProps({
  step: {
    type: Number,
    default: 0
  },
  steps: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.stepper-header__active {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
}

.stepper-header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
