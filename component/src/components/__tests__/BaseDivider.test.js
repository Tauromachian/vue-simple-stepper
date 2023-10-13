import { mount } from "@vue/test-utils";
import BaseDivider from "../BaseDivider.vue"; // update with your component path

describe("BaseDivider", () => {
  it("renders correctly", () => {
    const wrapper = mount(BaseDivider);
    expect(wrapper.find(".divider").exists()).toBe(true);
  });

  it("sets the color correctly", async () => {
    const wrapper = mount(BaseDivider, {
      props: {
        color: "red",
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".divider").element.style.backgroundColor).toBe("red");
  });

  it("has correct default color", async () => {
    const wrapper = mount(BaseDivider);
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".divider").element.style.backgroundColor).toBe("");
  });
});
