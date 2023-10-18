# Stepper Component

Stepper component designed to guide users through a multi-step process, like a registration form or setup process. It provides a clear indication of the current, completed, and upcoming steps, and also allows for navigating between these steps.

## Features

- Dynamically renders a specified number of steps based on the `steps` prop.
- Keeps track of the current step and which steps have been visited.
- Allows for customization of the action buttons via slots.
- Emits events when the user navigates through the steps.
- Handles step navigation logic, showing and hiding appropriate elements as needed.

## Installation

Install it from npm

`npm install vue-simple-stepper`

You need to import the component doing:

`import VueSimpleStepper from 'vue-simple-stepper'`

And its styles like this:

`import "vue-simple-stepper/dist/style.css";`

## Use

The easiest way to use is to copy and throw this in your code:

```vue
<template>
  <vue-simple-stepper
    :steps="state.steps"
    :step="state.step"
    @click:next="nextStep"
    @click:previous="previousStep"
    @click:submit="submitStep"
  >
    <div class="content first">asdfasd</div>
    <div class="content second">asdfasd</div>
    <div class="content third">asdfasd</div>
  </vue-simple-stepper>
</template>

<script setup>
import { reactive } from "vue";

import "vue-simple-stepper/dist/style.css";

import VueSimpleStepper from "vue-simple-stepper";

const state = reactive({
  steps: ["Step 1", "Step 2", "Step 3"],
  step: 1,
});

const nextStep = () => {
  state.step++;
};

const previousStep = () => {
  state.step--;
};

const submitStep = () => {
  console.log("Step submitted");
};
</script>
```

Any element found in the default slot of the component will be automatically added to the stepper.
Notice that the steps data prop number coincides with the number of elements in the stepper.

You can set a default starting point of the component with the step prop. With it you can also control the stepper programmatically.

Any time the actions of the stepper are clicked the events:

- click:next
- click:previous
- click:submit
  Are going to be emitted in by the stepper on click of the respective action.

One common problem is the customization of the stepper to fit the framework or styles of choice.
In that case you can do it by using the CSS variables:

```CSS
:root {
  --vue-simple-stepper-primary-color: #c724f0;
  --vue-simple-stepper-primary-color-contrast: white;

  --vue-simple-stepper-button-hover-color: #b11dd6;

  --vue-simple-stepper-secondary-color: #d8ceda;
  --vue-simple-stepper-secondary-color-contrast: black;

  --vue-simple-stepper-divider-color: var(--vue-simple-stepper-primary-color);
  --vue-simple-stepper-divider-color-neutral: var(
    --vue-simple-stepper-secondary-color
  );
}
```

Or in case you want to further customize the buttons you can overwrite or extend these classes:

```CSS
.vue-simple-stepper-button {
  border-radius: 8px;
  padding: 0.6em 1.2em;
  border: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--vue-simple-stepper-primary-color);
  cursor: pointer;
  transition: border-color 0.25s;
}
.vue-simple-stepper-button:hover {
  background-color: var(--vue-simple-stepper-button-hover-color);
}

.vue-simple-stepper-button--outlined {
  border: 1px solid var(--vue-simple-stepper-primary-color);
  color: black;
  background-color: transparent;
}

.vue-simple-stepper-button--outlined:hover {
  background-color: transparent;
  border-color: var(--vue-simple-stepper-button-hover-color);
}

.vue-simple-stepper-button:focus,
.vue-simple-stepper-button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
```

In case that you need to overwrite completely the action buttons do it by using the `actions` slot like so:

```vue
<template>
  <vue-simple-stepper
    :steps="state.steps"
    :step="state.step"
    @click:next="nextStep"
    @click:previous="previousStep"
    @click:submit="submitStep"
  >
    <div class="content first">asdfasd</div>
    <div class="content second">asdfasd</div>
    <div class="content third">asdfasd</div>

    <template
      #actions="{
        clickNext,
        clickPrevious,
        clickSubmit,
        isFirstStep,
        isLastStep,
      }"
    >
      <div>
        <button @click="clickPrevious" v-if="!isFirstStep">Previous</button>
        <button @click="clickNext" v-if="!isLastStep">Next</button>
        <button @click="clickSubmit" v-if="isLastStep">Submit</button>
      </div>
    </template>
  </vue-simple-stepper>
</template>

<script setup>
import { reactive } from "vue";

import "vue-simple-stepper/dist/style.css";

import VueSimpleStepper from "vue-simple-stepper";

const state = reactive({
  steps: ["Step 1", "Step 2", "Step 3"],
  step: 1,
});

const nextStep = () => {
  state.step++;
};

const previousStep = () => {
  state.step--;
};

const submitStep = () => {
  console.log("Step submitted");
};
</script>
```

## Props

- `steps`: An array that defines the steps in the stepper. The length of the array determines the number of steps. Default is an empty array.
- `step`: A number indicating the current step. Starts from 1 and default is 1.

## Events

- `click:next`: Triggered when the next button is clicked.
- `click:previous`: Triggered when the previous button is clicked.
- `click:submit`: Triggered when the submit button is clicked.

## Slots

- `actions`: For customizing the action buttons (next, previous, submit) of the stepper.
