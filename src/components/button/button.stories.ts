import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'my-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'], description: '按钮变体' },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], description: '按钮尺寸' },
    disabled: { control: 'boolean', description: '是否禁用' },
    loading: { control: 'boolean', description: '是否加载中' },
    block: { control: 'boolean', description: '是否块级按钮' },
    shape: { control: 'select', options: ['default', 'round', 'circle'], description: '按钮形状' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
    shape: 'default',
  },
};

export default meta;
type Story = StoryObj;

const renderButton = (args: any) => {
  return html`
    <my-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      ?block="${args.block}"
      shape="${args.shape}"
    >
      ${args.variant} Button
    </my-button>
  `;
};

export const Default: Story = {
  render: renderButton,
};

export const Primary: Story = {
  args: { variant: 'primary' },
  render: renderButton,
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  render: renderButton,
};

export const Outline: Story = {
  args: { variant: 'outline' },
  render: renderButton,
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
  render: renderButton,
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: renderButton,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <my-button size="xs">Extra Small</my-button>
      <my-button size="sm">Small</my-button>
      <my-button size="md">Medium</my-button>
      <my-button size="lg">Large</my-button>
      <my-button size="xl">Extra Large</my-button>
    </div>
  `,
};

export const Loading: Story = {
  args: { loading: true },
  render: renderButton,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: renderButton,
};

export const Block: Story = {
  args: { block: true },
  render: renderButton,
};

export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 12px;">
      <my-button shape="default">Default</my-button>
      <my-button shape="round">Round</my-button>
      <my-button shape="circle">+</my-button>
    </div>
  `,
};
