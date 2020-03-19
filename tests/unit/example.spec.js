import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it('does h1 exist', () => {
    const wrapper = mount(HelloWorld);
    const div = wrapper.find('h1');
    expect(div.is('h1')).toBe(true);
  });
});
