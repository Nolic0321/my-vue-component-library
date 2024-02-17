import {describe, it, expect} from 'vitest';
import ButtonItem from './ButtonItem.vue'
import { mount } from '@vue/test-utils'
describe('ButtonItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonItem, { props: { name: 'Hello Vitest' } });
    expect(wrapper.element.textContent).toContain('Hello Vitest');
  });
});
