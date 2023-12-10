<template>
  <div class="flex flex-col" :class="{ card: !transparent }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    glass: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #e0e0e0; /* subtle border */
  border-radius: 8px; /* rounded corners */
  overflow: hidden; /* ensures content respects the rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* subtle shadow */
  transition: transform 0.2s; /* smooth hover effect */
}

.card:hover {
  transform: translateY(-5px); /* lifts the card a little on hover */
}

.card-img {
  width: 100%;
  max-height: 200px;
  object-fit: cover; /* scales and crops the image */
}

.card-body {
  padding: 16px;
  background-color: #ffffff; /* you can adjust this color */
}

.card-title {
  font-size: 1.5em;
  margin: 0 0 8px 0; /* spacing adjustments */
}

.card-text {
  font-size: 1em;
  margin-bottom: 16px; /* spacing adjustments */
}

.card-link {
  display: inline-block;
  color: #007bff; /* link color, can be adjusted */
  text-decoration: none; /* removes underline */
  transition: color 0.2s; /* smooth color transition on hover */
}

.card-link:hover {
  color: #0056b3; /* darker shade for hover effect */
}
</style>
