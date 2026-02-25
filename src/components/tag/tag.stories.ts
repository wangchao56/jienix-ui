import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tag',
  component: 'my-tag',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'filled'], description: '样式变体' },
    size: { control: 'select', options: ['sm', 'md'], description: '尺寸' },
    closable: { control: 'boolean', description: '是否可关闭' },
    color: { control: 'color', description: '自定义颜色' },
  },
  args: { variant: 'default', size: 'md', closable: false, color: '' },
};

export default meta;
type Story = StoryObj;

const renderTag = (args: any) => {
  return html`
    <my-tag
      variant="${args.variant}"
      size="${args.size}"
      ?closable="${args.closable}"
      color="${args.color}"
    >
      Tag
    </my-tag>
  `;
};

export const Default: Story = {
  render: renderTag,
};

export const Outline: Story = {
  args: { variant: 'outline' },
  render: renderTag,
};

export const Filled: Story = {
  args: { variant: 'filled' },
  render: renderTag,
};

export const Small: Story = {
  args: { size: 'sm' },
  render: renderTag,
};

export const Large: Story = {
  args: { size: 'md' },
  render: renderTag,
};

export const Closable: Story = {
  args: { closable: true },
  render: renderTag,
};

export const CustomColor: Story = {
  args: { color: '#10b981' },
  render: renderTag,
};
