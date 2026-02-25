import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Input',
  component: 'my-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      description: '输入框类型',
    },
    placeholder: {
      control: 'text',
      description: '占位符',
    },
    value: {
      control: 'text',
      description: '输入框值',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    clearable: {
      control: 'boolean',
      description: '是否可清除',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
    },
  },
  args: {
    type: 'text',
    placeholder: '请输入...',
    value: '',
    disabled: false,
    readonly: false,
    clearable: false,
    size: 'md',
  },
  render: (args) => {
    return html`
      <my-input
        type="${args.type}"
        placeholder="${args.placeholder}"
        value="${args.value}"
        ?disabled="${args.disabled}"
        ?readonly="${args.readonly}"
        ?clearable="${args.clearable}"
        size="${args.size}"
      ></my-input>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: '请输入文本',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '请输入密码',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: '请输入邮箱',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '请输入数字',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '禁用输入框',
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    value: '只读输入框',
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
    value: '可清除的输入框',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: '小号输入框',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: '大号输入框',
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <my-input size="sm" placeholder="Small"></my-input>
      <my-input size="md" placeholder="Medium"></my-input>
      <my-input size="lg" placeholder="Large"></my-input>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <my-input placeholder="正常"></my-input>
      <my-input value="有值" clearable></my-input>
      <my-input disabled placeholder="禁用"></my-input>
      <my-input readonly value="只读"></my-input>
    </div>
  `,
};
