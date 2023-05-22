<template>
  <div class="d-flex flex-row-reverse">
    <v-btn
      v-if="!isLastStep"
      color="primary"
      :disabled="disabled"
      :loading="disabled"
      @click="clickNext"
    >
      Next
    </v-btn>

    <v-btn v-else @click="clickSubmit" :loading="disabled" color="primary">
      Submit
    </v-btn>

    <v-btn
      v-if="!isFirstStep"
      :disabled="disabled"
      color="primary"
      variant="text"
      @click="clickPrevious"
      outlined
      class="mr-2"
      :loading="disabled"
    >
      Previous
    </v-btn>
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

<style></style>
