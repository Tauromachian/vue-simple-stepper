<template>
  <div class="step-header">
    <div
      class="step-header__circle"
      :class="{
        'step-header__circle--active': active,
        'step-header__circle--was-active': wasActive,
      }"
    >
      <app-icon
        v-if="wasActive"
        icon="mdiCheck"
        color="white"
        src="../assets/check.svg"
      ></app-icon>
      <div v-else class="step-header__circle-content">
        {{ circleContent }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import AppIcon from "./AppIcon.vue";

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

.step-header__circle {
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  color: var(--secondary-color-contrast);
}

.step-header__circle--active,
.step-header__circle--was-active {
  border-color: #033562;
  background-color: var(--primary-color);
  color: var(--primary-color-contrast);
}

.step-header__circle-content {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
