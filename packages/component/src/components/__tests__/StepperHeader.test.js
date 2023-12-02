import { mount } from "@vue/test-utils";
import StepperHeader from "../StepperHeader.vue"; // Update with your component path

describe("StepperHeader", () => {
  const steps = ["Step 1", "Step 2", "Step 3"];

  it("renders correctly", () => {
    const wrapper = mount(StepperHeader, {
      props: { steps },
    });

    expect(wrapper.find(".stepper-header__active").exists()).toBe(true);
    expect(wrapper.find(".stepper-header__content").exists()).toBe(true);
  });

  it("renders the correct number of steps", () => {
    const wrapper = mount(StepperHeader, {
      props: { steps },
    });

    const stepHeaders = wrapper.findAllComponents({
      name: "StepperStepHeader",
    });

    expect(stepHeaders.length).toBe(steps.length + 1); // +1 for the active step header
  });

  it("displays the correct active step", async () => {
    const wrapper = mount(StepperHeader, {
      props: { steps, step: 2 },
    });

    const activeStepHeader = wrapper.find(".text-content");

    expect(activeStepHeader.text()).toContain("Step 2");
  });

  it("displays the correct step in each step header", () => {
    const wrapper = mount(StepperHeader, {
      props: { steps },
    });

    const stepHeaders = wrapper.findAllComponents({
      name: "StepperStepHeader",
    });

    expect(stepHeaders.length).toBe(4);

    steps.forEach((_, i) => {
      expect(stepHeaders[i + 1].text()).toContain(i + 1); // i+1 to skip the active step header
    });
  });
});
