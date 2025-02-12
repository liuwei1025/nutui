import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import DatePicker from '../../datepicker/index.vue';

test('Do not display Chinese', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      modelValue: new Date(2020, 0, 1),
      type: 'year-month',
      visible: true,
      isShowChinese: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-picker__right').exists()).toBeTruthy();
  const confirm = wrapper.find('.nut-picker__right');
  confirm.trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([
    {
      selectedValue: ['2020', '01'],
      selectedOptions: [
        { text: '2020', value: '2020' },
        { text: '01', value: '01' }
      ]
    }
  ]);
});

test('min date & max date', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      type: 'year-month',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2022, 10, 1),
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.find('.nut-picker__list').findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(3);
});

test('Increment step setting', async () => {
  const wrapper = mount(DatePicker, {
    props: {
      type: 'time',
      minuteStep: 5,
      visible: true
    }
  });
  await nextTick();
  const yearItem = wrapper.findAll('.nut-picker__list')[1].findAll('.nut-picker-roller-item');
  expect(yearItem.length).toBe(12);
});
