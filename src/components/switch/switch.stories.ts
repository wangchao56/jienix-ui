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
};

export default meta;
type Story = StoryObj;

const renderSwitch = (args: any) => {
  return html`
    <my-switch
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      size="${args.size}"
      checkedText="${args.checkedText}"
      uncheckedText="${args.uncheckedText}"
    ></my-switch>
  `;
};

export const Default: Story = {
  render: renderSwitch,
};

export const Checked: Story = {
  args: { checked: true },
  render: renderSwitch,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: renderSwitch,
};

export const Small: Story = {
  args: { size: 'sm' },
  render: renderSwitch,
};

export const Large: Story = {
  args: { size: 'lg' },
  render: renderSwitch,
};

export const WithLabel: Story = {
  args: { checkedText: '开', uncheckedText: '关' },
  render: renderSwitch,
};
