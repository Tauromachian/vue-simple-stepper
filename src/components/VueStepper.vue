<template>
  <render></render>
</template>

<script setup>
import { h, useSlots, reactive, defineAsyncComponent } from "vue";

import VueStepperHeader from "./VueStepperHeader.vue";
import VueStepperItem from "./VueStepperItem.vue";
const VueStepperActions = defineAsyncComponent(() =>
  import("./VueStepperActions.vue")
);

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
  step: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["click:next", "click:previous", "click:submit"]);

const state = reactive({
  stepHasBeenVisited: [],
});

const slot = useSlots();

const generateHeader = () => {
  return h(
    "div",
    { class: ["stepper-header"] },
    slot?.header ??
      h(VueStepperHeader, { steps: props.steps, step: props.step })
  );
};

const generateContent = () => {
  const stepperItems = slot.default().map((element, index) => {
    return generateItem(element, index);
  });

  return h(
    "div",
    {
      class: ["stepper-content"],
      style: {
        width: `${100 * props.steps.length}%`,
        transform: `translateX(-${
          ((props.step - 1) * 100) / props.steps.length
        }%)`,
        transition: "all 0.3s cubic-bezier(.25,.8,.5,1)",
      },
    },
    stepperItems
  );
};

const generateItem = (element, index) => {
  if (state.stepHasBeenVisited[index]) {
    return h(
      VueStepperItem,
      { style: { width: `${100 / props.steps.length}%` } },
      () => element
    );
  }

  if (index === props.step - 1) {
    state.stepHasBeenVisited[index] = true;
    return h(
      VueStepperItem,
      { style: { width: `${100 / props.steps.length}%` } },
      () => element
    );
  }

  return null;
};

const generateActions = () => {
  return slot?.actions
    ? h("div", null, slot.actions())
    : h(VueStepperActions, {
        "onClick:next": () => emit("click:next"),
        "onClick:previous": () => emit("click:previous"),
        "onClick:submit": () => emit("click:submit"),
        isFirstStep: props.step === 1,
        isLastStep: props.step === props.steps.length,
      });
};

const render = () => {
  return h("div", { class: ["stepper"] }, [
    generateHeader(),
    generateContent(),
    generateActions(),
  ]);
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.stepper {
  overflow-x: hidden;
}
.stepper-content {
  margin-bottom: 8px;
  display: flex;
  overflow-x: hidden;
}

.stepper-header {
  margin-bottom: 8px;
}
</style>
