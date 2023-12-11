<template>
  <div class="buttons-container">
    <button
      v-if="!isLastStep"
      color="primary"
      @click="clickNext"
      class="vue-simple-stepper-button"
    >
      Next
    </button>

    <button
      v-else
      @click="clickSubmit"
      color="primary"
      class="vue-simple-stepper-button"
    >
      Submit
    </button>

    <button
      v-if="!isFirstStep"
      color="primary"
      variant="text"
      @click="clickPrevious"
      outlined
      class="mr-2 vue-simple-stepper-button vue-simple-stepper-button--outlined"
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
