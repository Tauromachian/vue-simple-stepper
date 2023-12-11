import { mount } from "@vue/test-utils";
import StepperStepHeader from "../StepperStepHeader.vue"; // Update with your component path

describe("StepperStepHeader", () => {
  it("renders correctly", () => {
    const wrapper = mount(StepperStepHeader);

    expect(wrapper.find(".step-header").exists()).toBe(true);
  });

  it("renders the circle content correctly", () => {
    const circleContent = "Step 1";
    const wrapper = mount(StepperStepHeader, {
      props: { circleContent },
    });

    expect(wrapper.find(".step-header__circle-content").text()).toBe(
      circleContent
    );
  });

  it("renders the slot content when showText is true", () => {
    const wrapper = mount(StepperStepHeader, {
      props: { showText: true },
      slots: {
        default: "Step 1: Content",
      },
    });

    expect(wrapper.find(".text-content").text()).toBe("Step 1: Content");
  });

  it("does not render the slot content when showText is false", () => {
    const wrapper = mount(StepperStepHeader, {
      props: { showText: false },
      slots: {
        default: "Step 1: Content",
      },
    });

    expect(wrapper.find(".text-content").exists()).toBe(false);
  });

  it("renders the active style correctly", () => {
    const wrapper = mount(StepperStepHeader, {
      props: { active: true },
    });

    expect(wrapper.find(".step-header__circle--active").exists()).toBe(true);
    expect(wrapper.find(".step-header__circle--was-active").exists()).toBe(
      false
    );
  });

  it("renders the was-active style correctly", () => {
    const wrapper = mount(StepperStepHeader, {
      props: { wasActive: true },
    });

    expect(wrapper.find(".step-header__circle--active").exists()).toBe(false);
    expect(wrapper.find(".step-header__circle--was-active").exists()).toBe(
      true
    );
  });
});
