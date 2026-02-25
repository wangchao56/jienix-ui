import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'my-badge',
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number', description: '徽标数量' },
    maxCount: { control: 'number', description: '最大显示数量' },
    dot: { control: 'boolean', description: '是否圆点' },
    showZero: { control: 'boolean', description: '数量为0时是否显示' },
    color: { control: 'color', description: '自定义颜色' },
  },
  args: { count: 5, maxCount: 99, dot: false, showZero: false, color: '' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <my-badge count="5">
      <my-button>消息</my-button>
    </my-badge>
  `,
};

export const LargeCount: Story = {
  args: { count: 100 },
  render: (args) => html`
    <my-badge count="${args.count}" maxCount="${args.maxCount}">
      <my-button>消息</my-button>
    </my-badge>
  `,
};

export const Dot: Story = {
  args: { dot: true },
  render: (args) => html`
    <my-badge dot="${args.dot}">
      <my-button>通知</my-button>
    </my-badge>
  `,
};

export const CustomColor: Story = {
  args: { count: 10, color: '#10b981' },
  render: (args) => html`
    <my-badge count="${args.count}" color="${args.color}">
      <my-button>成功</my-button>
    </my-badge>
  `,
};

export const ShowZero: Story = {
  args: { count: 0, showZero: true },
  render: (args) => html`
    <my-badge count="${args.count}" showZero="${args.showZero}">
      <my-button>消息</my-button>
    </my-badge>
  `,
};

export const BadgeList: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <my-badge count="5">
        <my-button>消息</my-button>
      </my-badge>
      <my-badge count="99+">
        <my-button>消息</my-button>
      </my-badge>
      <my-badge dot>
        <my-button>通知</my-button>
      </my-badge>
      <my-badge color="#10b981">
        <my-button>成功</my-button>
      </my-badge>
    </div>
  `,
};
