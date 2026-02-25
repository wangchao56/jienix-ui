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

export const TagGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag>标签一</my-tag>
      <my-tag variant="outline">标签二</my-tag>
      <my-tag variant="filled">标签三</my-tag>
      <my-tag color="#10b981">成功</my-tag>
      <my-tag color="#f59e0b">警告</my-tag>
      <my-tag color="#ef4444">错误</my-tag>
    </div>
  `,
};

export const ClosableGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag closable>可关闭</my-tag>
      <my-tag closable variant="outline">可关闭</my-tag>
      <my-tag closable variant="filled">可关闭</my-tag>
    </div>
  `,
};

export const ColorTags: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag color="#1f2937">黑色</my-tag>
      <my-tag color="#6b7280">灰色</my-tag>
      <my-tag color="#10b981">绿色</my-tag>
      <my-tag color="#3b82f6">蓝色</my-tag>
      <my-tag color="#f59e0b">黄色</my-tag>
      <my-tag color="#ef4444">红色</my-tag>
      <my-tag color="#8b5cf6">紫色</my-tag>
      <my-tag color="#ec4899">粉色</my-tag>
    </div>
  `,
};
