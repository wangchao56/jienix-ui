import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'my-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: '按钮变体',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按钮尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    loading: {
      control: 'boolean',
      description: '是否加载中',
    },
    block: {
      control: 'boolean',
      description: '是否块级按钮',
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'round', 'circle'],
      description: '按钮形状',
    },
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

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: renderButton,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: renderButton,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: renderButton,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: renderButton,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
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
  args: {
    loading: true,
  },
  render: renderButton,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderButton,
};

export const Block: Story = {
  args: {
    block: true,
  },
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

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <my-button variant="primary">Primary</my-button>
        <my-button variant="secondary">Secondary</my-button>
        <my-button variant="outline">Outline</my-button>
        <my-button variant="ghost">Ghost</my-button>
        <my-button variant="danger">Danger</my-button>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <my-button variant="primary" size="xs">xs</my-button>
        <my-button variant="primary" size="sm">sm</my-button>
        <my-button variant="primary" size="md">md</my-button>
        <my-button variant="primary" size="lg">lg</my-button>
        <my-button variant="primary" size="xl">xl</my-button>
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <my-button variant="primary" disabled>Disabled</my-button>
        <my-button variant="primary" loading>Loading</my-button>
        <my-button variant="primary" block>Block Button</my-button>
      </div>
    </div>
  `,
};
