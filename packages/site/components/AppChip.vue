<template>
  <span class="chip">
    <slot></slot>
  </span>
</template>

<style>
.chip {
  display: inline-flex; /* To align the text and close button horizontally */
  align-items: center; /* Vertically center the content */
  padding: 4px 8px; /* Adjust for desired space */
  background-color: #e0e0e0; /* Light gray background */
  border-radius: 8px; /* Make it rounded */
  font-size: 0.9em; /* Adjust font size as desired */
  margin: 4px; /* Space around chip, adjust as needed */
}

.close-btn {
  margin-left: 8px; /* Space between chip text and close button */
  cursor: pointer; /* Indicate it's clickable */
  font-weight: bold;
}

/* Optional: Style the close button on hover for better user feedback */
.close-btn:hover {
  color: #b0b0b0;
}
</style>
