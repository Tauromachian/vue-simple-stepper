import { mount } from "@vue/test-utils";
import BaseDivider from "../BaseDivider.vue"; // update with your component path
import "../../scss/main.scss";

describe("BaseDivider", () => {
  it("renders correctly", () => {
    const wrapper = mount(BaseDivider);
    expect(wrapper.find(".divider").exists()).toBe(true);
  });
});
