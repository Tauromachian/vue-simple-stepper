<template>
  <base-section title="Features">
    <ul>
      <li>
        Dynamically renders a specified number of steps based on the steps prop.
      </li>
      <li>
        Keeps track of the current step and which steps have been visited.
      </li>
      <li>
        Allows for customization of the header and action buttons via slots.
      </li>
      <li>Emits events when the user navigates through the steps.</li>
      <li>
        Handles step navigation logic, showing and hiding appropriate elements
        as needed.
      </li>
    </ul>
  </base-section>
</template>

<style>
h2 {
  margin-bottom: 0;
}
li {
  margin-bottom: 0.5em;
}
</style>
