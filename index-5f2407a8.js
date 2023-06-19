import { openBlock as n, createElementBlock as i, createElementVNode as u, computed as H, normalizeClass as L, createBlock as h, toDisplayString as _, renderSlot as S, createCommentVNode as w, normalizeStyle as N, createVNode as v, withCtx as f, createTextVNode as y, Fragment as m, renderList as I, defineAsyncComponent as V, reactive as z, useSlots as D, h as a } from "vue";
var F = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
const d = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of s)
    t[o] = c;
  return t;
}, T = {
  props: {
    icon: { type: String, default: "" },
    color: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "30px"
    },
    width: {
      type: String,
      default: "30px"
    }
  },
  data() {
    return {
      path: "",
      icons: {
        mdiCheck: F
      }
    };
  },
  created() {
    this.path = this.icons[this.icon];
  }
}, E = ["fill", "width", "height"], j = ["d"];
function M(e, s, t, o, c, r) {
  return n(), i("svg", {
    fill: t.color,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: t.width,
    height: t.height
  }, [
    u("path", { d: c.path }, null, 8, j)
  ], 8, E);
}
const O = /* @__PURE__ */ d(T, [["render", M]]);
const P = { class: "step-header" }, X = {
  key: 1,
  class: "step-header__circle-content"
}, Z = {
  key: 0,
  class: "text-content"
}, q = {
  __name: "StepperStepHeader",
  props: {
    active: {
      type: Boolean,
      default: !1
    },
    wasActive: {
      type: Boolean,
      default: !1
    },
    circleContent: {
      type: [String, Number],
      default: ""
    },
    showText: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const s = e;
    return H(() => s.active || s.wasActive ? "primary" : "grey"), (t, o) => (n(), i("div", P, [
      u("div", {
        class: L(["step-header__circle", {
          "step-header__circle--active": e.active,
          "step-header__circle--was-active": e.wasActive
        }])
      }, [
        e.wasActive ? (n(), h(O, {
          key: 0,
          icon: "mdiCheck",
          color: "white",
          src: "../assets/check.svg"
        })) : (n(), i("div", X, _(e.circleContent), 1))
      ], 2),
      e.showText ? (n(), i("div", Z, [
        S(t.$slots, "default", {}, void 0, !0)
      ])) : w("", !0)
    ]));
  }
}, g = /* @__PURE__ */ d(q, [["__scopeId", "data-v-1631c11a"]]);
const G = {
  __name: "BaseDivider",
  props: {
    vertical: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (s, t) => (n(), i("hr", {
      class: "divider",
      style: N({ "background-color": e.color })
    }, null, 4));
  }
}, J = /* @__PURE__ */ d(G, [["__scopeId", "data-v-abbcc76f"]]);
const K = { class: "py-4" }, Q = { class: "stepper-header__active" }, R = { class: "stepper-header__content" }, U = {
  __name: "StepperHeader",
  props: {
    step: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (s, t) => (n(), i("div", K, [
      u("div", Q, [
        v(g, {
          class: "d-flex justify-center",
          "circle-content": e.step,
          active: "",
          horizontal: "",
          "show-text": ""
        }, {
          default: f(() => [
            y(_(e.steps[e.step - 1]), 1)
          ]),
          _: 1
        }, 8, ["circle-content"])
      ]),
      u("div", R, [
        (n(!0), i(m, null, I(e.steps, (o, c) => (n(), i(m, {
          key: `step-${c}`
        }, [
          v(g, {
            active: e.step === c + 1,
            "was-active": e.step > c + 1,
            "circle-content": c + 1,
            small: !0
          }, {
            default: f(() => [
              y(_(o), 1)
            ]),
            _: 2
          }, 1032, ["active", "was-active", "circle-content"]),
          c !== e.steps.length - 1 ? (n(), h(J, {
            key: 0,
            thickness: 2,
            class: "border-opacity-75",
            color: e.step > c + 1 ? "#c724f0" : "#ebe3ec"
          }, null, 8, ["color"])) : w("", !0)
        ], 64))), 128))
      ])
    ]));
  }
}, W = /* @__PURE__ */ d(U, [["__scopeId", "data-v-ea70fcb6"]]), Y = {};
function ee(e, s) {
  return n(), i("div", null, [
    S(e.$slots, "default")
  ]);
}
const k = /* @__PURE__ */ d(Y, [["render", ee]]);
const se = {
  __name: "AppStepper",
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    step: {
      type: Number,
      default: 1
    }
  },
  emits: ["click:next", "click:previous", "click:submit"],
  setup(e, { emit: s }) {
    const t = e, o = V(
      () => import("./StepperActions-b475ae86.js")
    ), c = z({
      stepHasBeenVisited: []
    }), r = D(), b = () => a(
      "div",
      { class: ["stepper-header"] },
      (r == null ? void 0 : r.header) ?? a(W, { steps: t.steps, step: t.step })
    ), x = () => {
      if (!r.default)
        return a("div");
      const p = r.default().map((l, C) => $(l, C));
      return a(
        "div",
        {
          class: ["stepper-content"],
          style: {
            width: `${100 * t.steps.length}%`,
            transform: `translateX(-${(t.step - 1) * 100 / t.steps.length}%)`,
            transition: "all 0.3s cubic-bezier(.25,.8,.5,1)"
          }
        },
        p
      );
    }, $ = (p, l) => c.stepHasBeenVisited[l] ? a(
      k,
      { style: { width: `${100 / t.steps.length}%` } },
      () => p
    ) : l === t.step - 1 ? (c.stepHasBeenVisited[l] = !0, a(
      k,
      { style: { width: `${100 / t.steps.length}%` } },
      () => p
    )) : null, B = () => r != null && r.actions ? a(
      "div",
      null,
      r.actions({
        clickNext: () => s("click:next"),
        clickPrevious: () => s("click:previous"),
        clickSubmit: () => s("click:submit"),
        isFirstStep: t.step === 1,
        isLastStep: t.step === t.steps.length
      })
    ) : a(o, {
      "onClick:next": () => s("click:next"),
      "onClick:previous": () => s("click:previous"),
      "onClick:submit": () => s("click:submit"),
      isFirstStep: t.step === 1,
      isLastStep: t.step === t.steps.length
    }), A = () => a("div", { class: ["stepper"] }, [
      b(),
      x(),
      B()
    ]);
    return (p, l) => (n(), h(A));
  }
};
export {
  d as _,
  se as a
};
