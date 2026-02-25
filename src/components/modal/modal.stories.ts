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

export const Default: Story = {
  render: () => html`
    <my-modal title="提示" open>
      <p>这是一个对话框内容。</p>
      <p>你可以在这里放置任何内容。</p>
    </my-modal>
  `,
};

export const NoFooter: Story = {
  args: { footer: false },
  render: (args) => html`
    <my-modal title="无底部" .footer=${args.footer} open>
      <p>没有底部的对话框。</p>
    </my-modal>
  `,
};

export const SmallWidth: Story = {
  args: { width: '360px' },
  render: (args) => html`
    <my-modal title="小对话框" .width=${args.width} open>
      <p>窄宽度对话框。</p>
    </my-modal>
  `,
};

export const LargeWidth: Story = {
  args: { width: '800px' },
  render: (args) => html`
    <my-modal title="大对话框" .width=${args.width} open>
      <p>宽宽度对话框，可以放置更多内容。</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </my-modal>
  `,
};

export const WithFooterButtons: Story = {
  render: () => html`
    <my-modal title="确认操作" open>
      <p>确定要执行这个操作吗？</p>
      <div slot="footer">
        <my-button>取消</my-button>
        <my-button variant="primary">确定</my-button>
      </div>
    </my-modal>
  `,
};
