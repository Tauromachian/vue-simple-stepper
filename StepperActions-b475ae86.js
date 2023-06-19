import { openBlock as t, createElementBlock as e, createCommentVNode as p } from "vue";
import { _ as r } from "./index-5f2407a8.js";
const l = { class: "buttons-container" }, u = {
  __name: "StepperActions",
  props: {
    isLastStep: {
      type: Boolean,
      default: !1
    },
    isFirstStep: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click:next", "click:previous", "click:submit"],
  setup(o, { emit: s }) {
    const c = () => s("click:next"), i = () => s("click:previous"), n = () => s("click:submit");
    return (a, m) => (t(), e("div", l, [
      o.isLastStep ? (t(), e("button", {
        key: 1,
        onClick: n,
        color: "primary",
        class: "vue-simple-stepper-button"
      }, " Submit ")) : (t(), e("button", {
        key: 0,
        color: "primary",
        onClick: c,
        class: "vue-simple-stepper-button"
      }, " Next ")),
      o.isFirstStep ? p("", !0) : (t(), e("button", {
        key: 2,
        color: "primary",
        variant: "text",
        onClick: i,
        outlined: "",
        class: "mr-2 vue-simple-stepper-button vue-simple-stepper-button--outlined"
      }, " Previous "))
    ]));
  }
}, f = /* @__PURE__ */ r(u, [["__scopeId", "data-v-82651ff0"]]);
export {
  f as default
};
