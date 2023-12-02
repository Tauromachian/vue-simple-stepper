import { mount } from "@vue/test-utils";
import AppIcon from "../AppIcon.vue"; // update with your component path

describe("AppIcon", () => {
  it("renders correctly", () => {
    const wrapper = mount(AppIcon, {
      props: {
        icon: "mdiCheck",
        color: "red",
        height: "50px",
        width: "50px",
      },
    });

    const svg = wrapper.find("svg");

    expect(svg.exists()).toBe(true);
    expect(svg.attributes("fill")).toBe("red");
    expect(svg.attributes("width")).toBe("50px");
    expect(svg.attributes("height")).toBe("50px");

    const path = svg.find("path");
    expect(path.exists()).toBe(true);
  });

  it("uses default props if none are provided", () => {
    const wrapper = mount(AppIcon);

    const svg = wrapper.find("svg");

    expect(svg.attributes("fill")).toBe("");
    expect(svg.attributes("width")).toBe("30px");
    expect(svg.attributes("height")).toBe("30px");
  });
});
