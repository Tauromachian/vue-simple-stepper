import { mount } from "@vue/test-utils";
import StepperActions from "../StepperActions.vue"; // Update with your component path

describe("StepperActions", () => {
  it("renders correctly", () => {
    const wrapper = mount(StepperActions);

    expect(wrapper.find(".buttons-container").exists()).toBe(true);
    expect(wrapper.find(".vue-simple-stepper-button").exists()).toBe(true);
  });

  it("emits click:next event when Next button is clicked", async () => {
    const wrapper = mount(StepperActions, {
      props: { isLastStep: false },
    });
    await wrapper.find(".vue-simple-stepper-button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click:next");
  });

  it("emits click:previous event when Previous button is clicked", async () => {
    const wrapper = mount(StepperActions, {
      props: { isFirstStep: false },
    });
    await wrapper.find(".vue-simple-stepper-button--outlined").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click:previous");
  });

  it("emits click:submit event when Submit button is clicked", async () => {
    const wrapper = mount(StepperActions, {
      props: { isLastStep: true },
    });
    await wrapper.find(".vue-simple-stepper-button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click:submit");
  });
});
