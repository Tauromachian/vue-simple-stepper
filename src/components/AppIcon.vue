<template>
  <svg
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path :d="path" />
  </svg>
</template>

<script>
// los iconos deben ser importados aquí y en el data()
import { mdiCheck } from "@mdi/js";
export default {
  props: {
    icon: { type: String, default: "" },
    color: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "30px",
    },
    width: {
      type: String,
      default: "30px",
    },
  },
  data() {
    return {
      path: "",
      // los iconos deben ser importados aquí y fuera del expor default
      icons: {
        mdiCheck,
      },
    };
  },

  created() {
    this.path = this.icons[this.icon];
  },
};
</script>
