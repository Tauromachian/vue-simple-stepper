<template>
  <render></render>
</template>

<script setup>
import {
  h,
  useSlots,
  reactive,
  defineAsyncComponent,
  watchEffect,
  watch,
  computed,
  onMounted
} from "vue";

import StepperHeader from "./StepperHeader.vue";
import StepperItem from "./StepperItem.vue";
const StepperActions = defineAsyncComponent(() =>
  import("./StepperActions.vue")
);

const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  },
  step: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(["click:next", "click:previous", "click:submit"]);

const stepHasBeenVisited = [];
let nonReactiveCurrentStep = 1;
let newStep = props.step;

const slot = useSlots();

const state = reactive({
  stepperItems: [],
  currentStep: 1
});

const generateHeader = () => {
  return h(
    "div",
    { class: ["stepper-header"] },
    slot?.header ?? h(StepperHeader, { steps: props.steps, step: props.step })
  );
};

const generateContent = () => {
  if (!slot.default) return h("div");

  const stepperItems = state.stepperItems.map((element, index) => {
    return generateItem(element, index);
  });

  const stepperContent = makeStepperContent(stepperItems);

  if (!direction.value) {
    return stepperContent;
  }

  direction.value === "left"
    ? (stepperContent.props.class += " translate-left")
    : (stepperContent.props.class += " translate-right");

  hideStepWithDelay(stepperItems[nonReactiveCurrentStep - 1]);
  nonReactiveCurrentStep = newStep;
  return stepperContent;
};

const makeStepperContent = (stepperItems) => {
  return h(
    "div",
    {
      class: ["stepper-content"]
    },
    stepperItems
  );
};

const generateItem = (element, index) => {
  if (stepHasBeenVisited[index]) {
    const stepperItem = getStepperItem(element, index);
    return stepperItem;
  }

  if (index === newStep - 1) {
    const stepperItem = getStepperItem(element, index);
    stepHasBeenVisited[index] = true;
    return stepperItem;
  }

  return null;
};

const getStepperItem = (element, index) => {
  let display = "none";

  if (index === nonReactiveCurrentStep - 1) display = "block";

  if (index === newStep - 1) display = "block";

  return h(StepperItem, { style: { width: "100%", display } }, () => element);
};

const hideStepWithDelay = (stepperItem) => {
  if (!stepperItem) return;

  setTimeout(() => {
    stepperItem.el.style.display = "none";
  }, 300);
};

const generateActions = () => {
  return slot?.actions
    ? h(
        "div",
        null,
        slot.actions({
          clickNext: () => emit("click:next"),
          clickPrevious: () => emit("click:previous"),
          clickSubmit: () => emit("click:submit"),
          isFirstStep: props.step === 1,
          isLastStep: props.step === props.steps.length
        })
      )
    : h(StepperActions, {
        "onClick:next": () => emit("click:next"),
        "onClick:previous": () => emit("click:previous"),
        "onClick:submit": () => emit("click:submit"),
        isFirstStep: props.step === 1,
        isLastSscaleXtep: props.step === props.steps.length
      });
};

const direction = computed(() => {
  if (props.step < state.currentStep) return "left";

  if (props.step > state.currentStep) return "right";

  return null;
});

watch(direction, () => {
  if (props.state === state.currentStep) return;
  const newStep = props.step;
  setTimeout(() => (state.currentStep = newStep), 300);
});

watchEffect(() => (newStep = props.step));

onMounted(() => {
  if (!slot.default) return;
  state.stepperItems = [...slot.default()];
});

const render = () => {
  return h("div", { class: ["stepper"] }, [
    generateHeader(),
    generateContent(),
    generateActions()
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

.translate-left {
  width: 200%;
  animation: translateLeft 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

@keyframes translateLeft {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
  }
}

.translate-right {
  width: 200%;
  animation: translateRight 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

@keyframes translateRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
