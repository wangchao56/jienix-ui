import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Icon',
  component: 'my-icon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['check', 'close', 'search', 'plus', 'minus', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrowDown', 'user', 'settings', 'loading', 'info', 'warning', 'error', 'success'],
      description: '图标名称',
    },
    size: {
      control: 'text',
      description: '图标尺寸',
    },
    color: {
      control: 'color',
      description: '图标颜色',
    },
  },
  args: {
    name: 'check',
    size: 'md',
    color: 'currentColor',
  },
  render: (args) => {
    return html`
      <my-icon
        name="${args.name}"
        size="${args.size}"
        color="${args.color}"
      ></my-icon>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Check: Story = {
  args: {
    name: 'check',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
  },
};

export const Plus: Story = {
  args: {
    name: 'plus',
  },
};

export const Minus: Story = {
  args: {
    name: 'minus',
  },
};

export const ArrowLeft: Story = {
  args: {
    name: 'arrowLeft',
  },
};

export const ArrowRight: Story = {
  args: {
    name: 'arrowRight',
  },
};

export const ArrowUp: Story = {
  args: {
    name: 'arrowUp',
  },
};

export const ArrowDown: Story = {
  args: {
    name: 'arrowDown',
  },
};

export const User: Story = {
  args: {
    name: 'user',
  },
};

export const Settings: Story = {
  args: {
    name: 'settings',
  },
};

export const Loading: Story = {
  args: {
    name: 'loading',
  },
};

export const Info: Story = {
  args: {
    name: 'info',
  },
};

export const Warning: Story = {
  args: {
    name: 'warning',
  },
};

export const Error: Story = {
  args: {
    name: 'error',
  },
};

export const Success: Story = {
  args: {
    name: 'success',
  },
};

export const AllIcons: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 16px; padding: 16px;">
      <my-icon name="check"></my-icon>
      <my-icon name="close"></my-icon>
      <my-icon name="search"></my-icon>
      <my-icon name="plus"></my-icon>
      <my-icon name="minus"></my-icon>
      <my-icon name="arrowLeft"></my-icon>
      <my-icon name="arrowRight"></my-icon>
      <my-icon name="arrowUp"></my-icon>
      <my-icon name="arrowDown"></my-icon>
      <my-icon name="user"></my-icon>
      <my-icon name="settings"></my-icon>
      <my-icon name="loading"></my-icon>
      <my-icon name="info"></my-icon>
      <my-icon name="warning"></my-icon>
      <my-icon name="error"></my-icon>
      <my-icon name="success"></my-icon>
    </div>
  `,
};

export const IconSizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px;">
      <my-icon name="check" size="sm"></my-icon>
      <my-icon name="check" size="md"></my-icon>
      <my-icon name="check" size="lg"></my-icon>
      <my-icon name="check" size="32px"></my-icon>
      <my-icon name="check" size="48px"></my-icon>
    </div>
  `,
};

export const IconColors: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px;">
      <my-icon name="check" color="#1890ff"></my-icon>
      <my-icon name="close" color="#ff4d4f"></my-icon>
      <my-icon name="warning" color="#faad14"></my-icon>
      <my-icon name="success" color="#52c41a"></my-icon>
    </div>
  `,
};

export const WithButton: Story = {
  render: () => html`
    <my-button>
      <my-icon name="plus" size="sm"></my-icon>
      添加
    </my-button>
    <my-button variant="danger">
      <my-icon name="close" size="sm"></my-icon>
      删除
    </my-button>
  `,
};
