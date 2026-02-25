import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'my-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: '是否选中' },
    disabled: { control: 'boolean', description: '是否禁用' },
    indeterminate: { control: 'boolean', description: '是否为不确定状态' },
    label: { control: 'text', description: '标签文本' },
    size: { control: 'select', options: ['sm', 'md'], description: '尺寸' },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    label: '复选框',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj;

const renderCheckbox = (args: any) => {
  return html`
    <my-checkbox
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?indeterminate="${args.indeterminate}"
      label="${args.label}"
      size="${args.size}"
    ></my-checkbox>
  `;
};

export const Default: Story = {
  render: renderCheckbox,
};

export const Checked: Story = {
  args: { checked: true, label: '已选中' },
  render: renderCheckbox,
};

export const Disabled: Story = {
  args: { disabled: true, label: '禁用' },
  render: renderCheckbox,
};

export const Indeterminate: Story = {
  args: { indeterminate: true, label: '不确定状态' },
  render: renderCheckbox,
};

export const Small: Story = {
  args: { size: 'sm', label: '小号' },
  render: renderCheckbox,
};
