import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'my-modal',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: '是否显示' },
    title: { control: 'text', description: '标题' },
    width: { control: 'text', description: '宽度' },
    maskClosable: { control: 'boolean', description: '点击遮罩关闭' },
    footer: { control: 'boolean', description: '显示底部' },
  },
  args: { open: true, title: '标题', width: '520px', maskClosable: true, footer: true },
};

export default meta;
type Story = StoryObj;

const renderModal = (args: any) => {
  return html`
    <my-modal
      ?open="${args.open}"
      title="${args.title}"
      width="${args.width}"
      ?maskClosable="${args.maskClosable}"
      ?footer="${args.footer}"
    >
      <p>这是一个对话框内容。</p>
      <p>你可以在这里放置任何内容。</p>
    </my-modal>
  `;
};

export const Default: Story = {
  render: renderModal,
};

export const NoFooter: Story = {
  args: { footer: false },
  render: renderModal,
};

export const SmallWidth: Story = {
  args: { width: '360px' },
  render: renderModal,
};

export const LargeWidth: Story = {
  args: { width: '800px' },
  render: renderModal,
};

export const CustomTitle: Story = {
  args: { title: '自定义标题' },
  render: renderModal,
};
