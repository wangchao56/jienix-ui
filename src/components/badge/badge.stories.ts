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
    position: { 
      control: 'select', 
      options: ['top-left', 'top-center', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right'], 
      description: '徽标位置' 
    },
    offsetX: { control: 'number', description: 'X轴偏移量' },
    offsetY: { control: 'number', description: 'Y轴偏移量' },
  },
  args: { 
    count: 5, 
    maxCount: 99, 
    dot: false, 
    showZero: false, 
    color: '',
    position: 'top-right',
    offsetX: 0,
    offsetY: 0,
  },
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

export const Positions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; width: 300px;">
      <div style="position: relative;">
        <my-button>Top Left</my-button>
        <my-badge count="5" position="top-left"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Top Center</my-button>
        <my-badge count="5" position="top-center"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Top Right</my-button>
        <my-badge count="5" position="top-right"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Middle Left</my-button>
        <my-badge count="5" position="middle-left"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Middle Right</my-button>
        <my-badge count="5" position="middle-right"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Bottom Left</my-button>
        <my-badge count="5" position="bottom-left"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Bottom Center</my-button>
        <my-badge count="5" position="bottom-center"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Bottom Right</my-button>
        <my-badge count="5" position="bottom-right"></my-badge>
      </div>
    </div>
  `,
};

export const WithOffset: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <div style="position: relative;">
        <my-button>Offset (+8, -8)</my-button>
        <my-badge count="5" position="top-right" offsetX="8" offsetY="-8"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Offset (-10, 10)</my-button>
        <my-badge count="5" position="bottom-left" offsetX="-10" offsetY="10"></my-badge>
      </div>
      <div style="position: relative;">
        <my-button>Large Offset</my-button>
        <my-badge count="99" position="top-right" offsetX="20" offsetY="-20"></my-badge>
      </div>
    </div>
  `,
};

export const DotBadge: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <my-badge dot position="top-left">
        <my-button>Top Left</my-button>
      </my-badge>
      <my-badge dot position="top-right">
        <my-button>Top Right</my-button>
      </my-badge>
      <my-badge dot position="bottom-left">
        <my-button>Bottom Left</my-button>
      </my-badge>
      <my-badge dot position="bottom-right">
        <my-button>Bottom Right</my-button>
      </my-badge>
    </div>
  `,
};

export const CustomColor: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <my-badge count="5" color="#10b981">
        <my-button>Success</my-button>
      </my-badge>
      <my-badge count="3" color="#f59e0b">
        <my-button>Warning</my-button>
      </my-badge>
      <my-badge dot color="#ef4444">
        <my-button>Error</my-button>
      </my-badge>
    </div>
  `,
};

export const IconWithBadge: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px;">
      <my-badge count="99" position="top-right">
        <my-icon name="bell" size="32px"></my-icon>
      </my-badge>
      <my-badge count="5" position="top-right">
        <my-icon name="mail" size="32px"></my-icon>
      </my-badge>
      <my-badge dot position="top-right">
        <my-icon name="user" size="32px"></my-icon>
      </my-badge>
    </div>
  `,
};
