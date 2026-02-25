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

// 可控的渲染函数
const renderBadge = (args: any) => {
  return html`
    <my-badge
      count="${args.count}"
      maxCount="${args.maxCount}"
      ?dot="${args.dot}"
      ?showZero="${args.showZero}"
      color="${args.color}"
      position="${args.position}"
      offsetX="${args.offsetX}"
      offsetY="${args.offsetY}"
    >
      <my-button>消息</my-button>
    </my-badge>
  `;
};

export const Default: Story = {
  render: renderBadge,
};

export const TopLeft: Story = {
  args: { position: 'top-left' },
  render: renderBadge,
};

export const TopCenter: Story = {
  args: { position: 'top-center' },
  render: renderBadge,
};

export const TopRight: Story = {
  args: { position: 'top-right' },
  render: renderBadge,
};

export const MiddleLeft: Story = {
  args: { position: 'middle-left' },
  render: renderBadge,
};

export const MiddleRight: Story = {
  args: { position: 'middle-right' },
  render: renderBadge,
};

export const BottomLeft: Story = {
  args: { position: 'bottom-left' },
  render: renderBadge,
};

export const BottomCenter: Story = {
  args: { position: 'bottom-center' },
  render: renderBadge,
};

export const BottomRight: Story = {
  args: { position: 'bottom-right' },
  render: renderBadge,
};

export const WithOffset: Story = {
  args: { offsetX: 10, offsetY: -10 },
  render: renderBadge,
};

export const DotMode: Story = {
  args: { dot: true },
  render: renderBadge,
};

export const CustomColor: Story = {
  args: { color: '#10b981' },
  render: renderBadge,
};

export const LargeCount: Story = {
  args: { count: 100 },
  render: renderBadge,
};
