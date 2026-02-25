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

export const Default: Story = {
  render: () => html`<my-tag>Tag</my-tag>`,
};

export const Outline: Story = {
  args: { variant: 'outline' },
  render: (args) => html`<my-tag variant="${args.variant}">Outline Tag</my-tag>`,
};

export const Filled: Story = {
  args: { variant: 'filled' },
  render: (args) => html`<my-tag variant="${args.variant}">Filled Tag</my-tag>`,
};

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => html`<my-tag size="${args.size}">Small Tag</my-tag>`,
};

export const Closable: Story = {
  args: { closable: true },
  render: (args) => html`<my-tag closable="${args.closable}">Closable Tag</my-tag>`,
};

export const CustomColor: Story = {
  args: { color: '#10b981' },
  render: (args) => html`<my-tag color="${args.color}">Custom Color</my-tag>`,
};

export const TagList: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag>Default</my-tag>
      <my-tag variant="outline">Outline</my-tag>
      <my-tag variant="filled">Filled</my-tag>
      <my-tag color="#10b981">Success</my-tag>
      <my-tag color="#f59e0b">Warning</my-tag>
      <my-tag color="#ef4444">Error</my-tag>
    </div>
  `,
};
