import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'my-switch',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: '是否开启' },
    disabled: { control: 'boolean', description: '是否禁用' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: '尺寸' },
    checkedText: { control: 'text', description: '开启时的文本' },
    uncheckedText: { control: 'text', description: '关闭时的文本' },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    checkedText: '',
    uncheckedText: '',
  },
  render: (args) => {
    return html`
      <my-switch
        ?checked="${args.checked}"
        ?disabled="${args.disabled}"
        size="${args.size}"
        checkedText="${args.checkedText}"
        uncheckedText="${args.uncheckedText}"
      ></my-switch>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithLabel: Story = {
  args: {
    checkedText: '开',
    uncheckedText: '关',
  },
};

export const SwitchGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <my-switch checkedText="WiFi" uncheckedText="WiFi"></my-switch>
      <my-switch checkedText="蓝牙" uncheckedText="蓝牙"></my-switch>
      <my-switch checkedText="定位" uncheckedText="定位"></my-switch>
    </div>
  `,
};
