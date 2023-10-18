<template>
  <hr class="divider" :style="{ 'background-color': color }" />
</template>

<script setup>
defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.divider {
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(---vue-simple-stepper-divider-color);
  border: 0;
  border-radius: 10px;
  width: 100%;
}
</style>
