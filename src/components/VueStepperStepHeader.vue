<template>
  <div class="step-header" :class="{ flex: horizontal }">
    <v-avatar :color="color">
      <v-icon v-if="wasActive">mdi-check</v-icon>
      <div v-else class="w-100 d-flex justify-center">
        {{ circleContent }}
      </div>
    </v-avatar>
    <div
      v-if="!small"
      :class="{
        '-ml-10': !horizontal,
        'mt-16': !horizontal,
        absolute: !horizontal,
        'ml-2': horizontal,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  wasActive: {
    type: Boolean,
    default: false,
  },
  circleContent: {
    type: [String, Number],
    default: "",
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const color = computed(() => {
  if (props.active || props.wasActive) return "primary";

  return "grey";
});
</script>

<style scoped>
.step-header {
  position: relative;
}
</style>
