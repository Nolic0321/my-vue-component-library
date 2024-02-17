import {describe, it, expect} from 'vitest';
import InputItem from '@component-library/input/InputItem.vue'
import { mount } from '@vue/test-utils'
describe('ButtonItem', () => {
  it('should render properly', ()=>{
    const wrapper = mount(InputItem, { props: { modelValue: 'Hello Vitest' } });
    expect(wrapper.element).not.toBeNull();
    expect(wrapper.find('input').element.value).toContain('Hello Vitest');
  });

  it('should update the model value', async ()=>{
    const wrapper = mount(InputItem, { props: { modelValue: 'Goodbye Vitest' } });
    await wrapper.find('input').setValue('Hello Vitest');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });
});
