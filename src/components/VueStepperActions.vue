<template>
  <div class="buttons-container">
    <button
      v-if="!isLastStep"
      color="primary"
      :disabled="disabled"
      :loading="disabled"
      @click="clickNext"
      class="stepper-button"
    >
      Next
    </button>

    <button
      v-else
      @click="clickSubmit"
      :loading="disabled"
      color="primary"
      class="stepper-button"
    >
      Submit
    </button>

    <button
      v-if="!isFirstStep"
      :disabled="disabled"
      color="primary"
      variant="text"
      @click="clickPrevious"
      outlined
      class="mr-2 stepper-button stepper-button--outlined"
      :loading="disabled"
    >
      Previous
    </button>
  </div>
</template>

<script setup>
defineProps({
  isLastStep: {
    type: Boolean,
    default: false,
  },
  isFirstStep: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click:next", "click:previous", "click:submit"]);

const clickNext = () => emit("click:next");
const clickPrevious = () => emit("click:previous");
const clickSubmit = () => emit("click:submit");
</script>

<style scoped>
.buttons-container {
  display: flex;
  flex-direction: row-reverse;
  gap: 7px;
}
</style>
