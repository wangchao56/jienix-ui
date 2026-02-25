import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Card',
  component: 'my-card',
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean', description: '是否显示边框' },
    hoverable: { control: 'boolean', description: '是否可悬停' },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'], description: '内边距' },
  },
  args: {
    bordered: true,
    hoverable: false,
    padding: 'md',
  },
  render: (args) => {
    return html`
      <my-card
        ?bordered="${args.bordered}"
        ?hoverable="${args.hoverable}"
        padding="${args.padding}"
      >
        <div style="color: var(--color-text);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片标题</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
            这是卡片的内容区域，可以放置任何内容。
          </p>
        </div>
      </my-card>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <my-card>
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片标题</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          这是卡片的内容区域。
        </p>
      </div>
    </my-card>
  `,
};

export const WithHeader: Story = {
  render: () => html`
    <my-card>
      <div slot="header" style="font-weight: 600; font-size: 16px;">卡片标题</div>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
    </my-card>
  `,
};

export const WithFooter: Story = {
  render: () => html`
    <my-card>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
      <div slot="footer" style="display: flex; gap: 8px;">
        <my-button size="sm">取消</my-button>
        <my-button size="sm" variant="primary">确定</my-button>
      </div>
    </my-card>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <my-card hoverable style="max-width: 300px;">
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">悬停卡片</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          鼠标悬停时会显示阴影效果。
        </p>
      </div>
    </my-card>
  `,
};

export const NoBorder: Story = {
  render: () => html`
    <div style="background: var(--color-background-secondary); padding: 24px;">
      <my-card .bordered=${false}>
        <div style="color: var(--color-text);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">无边框卡片</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
            适合在彩色背景上使用。
          </p>
        </div>
      </my-card>
    </div>
  `,
};

export const CardGrid: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 1</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 2</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 3</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
    </div>
  `,
};
