import { mount } from "@vue/test-utils";
import AppStepper from "../AppStepper.vue"; // Update with your component path
import StepperItem from "../StepperItem.vue";

describe("AppStepper", () => {
  it("renders the AppStepper component", () => {
    const wrapper = mount(AppStepper);

    expect(wrapper.find(".stepper").exists()).toBe(true);
  });

  it("renders the correct number of steps with lazy loading", async () => {
    const steps = ["Step 1", "Step 2", "Step 3"];
    const wrapper = mount(AppStepper, {
      slots: { default: steps.map((step) => `<div>${step}</div>`) },
    });

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    console.log(wrapper.findAllComponents(StepperItem));

    expect(wrapper.findAllComponents(StepperItem).length).toBe(1);
  });

  it("moves to the next step on click:next", async () => {
    const steps = ["Step 1", "Step 2", "Step 3"];
    const wrapper = mount(AppStepper, {
      props: { steps },
    });

    await wrapper.vm.$nextTick();

    wrapper.vm.$emit("click:next");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.step).toBe(1);
  });
});
