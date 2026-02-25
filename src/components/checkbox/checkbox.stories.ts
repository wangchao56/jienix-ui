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
  render: (args) => {
    return html`
      <my-checkbox
        ?checked="${args.checked}"
        ?disabled="${args.disabled}"
        ?indeterminate="${args.indeterminate}"
        label="${args.label}"
        size="${args.size}"
      ></my-checkbox>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: '同意用户协议',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: '已选中状态',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: '禁用状态',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: '不确定状态',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: '小号复选框',
  },
};

export const CheckboxGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <my-checkbox label="选项一"></my-checkbox>
      <my-checkbox label="选项二"></my-checkbox>
      <my-checkbox label="选项三"></my-checkbox>
    </div>
  `,
};
