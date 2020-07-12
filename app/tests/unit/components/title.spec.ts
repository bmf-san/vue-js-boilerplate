import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title.vue";

describe("Title.vue", () => {
  it("init", () => {
    const wrapper = shallowMount(Title);
    expect(wrapper.props().msg).toBeUndefined();
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Title, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("matched snapshot", () => {
    const wrapper = shallowMount(Title);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
