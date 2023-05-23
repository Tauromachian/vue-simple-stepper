<template>
  <div class="step-header" :class="{ flex: horizontal }">
    <v-avatar :color="color">
      <v-icon v-if="wasActive">mdi-check</v-icon>
      <div v-else class="step-header__circle-content">
        {{ circleContent }}
      </div>
    </v-avatar>
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

.step-header__circle-content {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
