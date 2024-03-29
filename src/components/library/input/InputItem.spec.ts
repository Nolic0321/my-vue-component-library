import {describe, it, expect} from 'vitest';
import InputItem from '@component-library/input/InputItem.vue'
import { mount } from '@vue/test-utils'
import { fireEvent, render, screen } from '@testing-library/vue'
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

  it('should update the model value using testing library', async ()=>{
    render(InputItem, { props: { modelValue: 'Goodbye Vitest' } });
    screen.queryByText('Goodbye Vitest');
    const input = screen.getByRole('textbox');
    await fireEvent.update(input, 'Hello Vitest');
    screen.queryByText('Hello Vitest');
  });
});
