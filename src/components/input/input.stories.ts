import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Input',
  component: 'my-input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number', 'tel', 'url'], description: '输入框类型' },
    placeholder: { control: 'text', description: '占位符' },
    value: { control: 'text', description: '输入框值' },
    disabled: { control: 'boolean', description: '是否禁用' },
    readonly: { control: 'boolean', description: '是否只读' },
    clearable: { control: 'boolean', description: '是否可清除' },
    error: { control: 'boolean', description: '是否有错误' },
    errorMessage: { control: 'text', description: '错误信息' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: '输入框尺寸' },
    prefix: { control: 'text', description: '前缀' },
    suffix: { control: 'text', description: '后缀' },
  },
  args: {
    type: 'text',
    placeholder: '请输入...',
    value: '',
    disabled: false,
    readonly: false,
    clearable: false,
    error: false,
    errorMessage: '',
    size: 'md',
    prefix: '',
    suffix: '',
  },
};

export default meta;
type Story = StoryObj;

const renderInput = (args: any) => {
  return html`
    <my-input
      type="${args.type}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?clearable="${args.clearable}"
      ?error="${args.error}"
      errorMessage="${args.errorMessage}"
      size="${args.size}"
      prefix="${args.prefix}"
      suffix="${args.suffix}"
    ></my-input>
  `;
};

export const Default: Story = {
  render: renderInput,
};

export const WithPlaceholder: Story = {
  args: { placeholder: '请输入文本' },
  render: renderInput,
};

export const WithValue: Story = {
  args: { value: 'Hello World' },
  render: renderInput,
};

export const Password: Story = {
  args: { type: 'password', placeholder: '请输入密码' },
  render: renderInput,
};

export const Disabled: Story = {
  args: { disabled: true, value: '禁用输入框' },
  render: renderInput,
};

export const Readonly: Story = {
  args: { readonly: true, value: '只读输入框' },
  render: renderInput,
};

export const Clearable: Story = {
  args: { clearable: true, value: '可清除的输入框' },
  render: renderInput,
};

export const WithError: Story = {
  args: { error: true, errorMessage: '请输入正确的内容' },
  render: renderInput,
};

export const Small: Story = {
  args: { size: 'sm', placeholder: '小号输入框' },
  render: renderInput,
};

export const Large: Story = {
  args: { size: 'lg', placeholder: '大号输入框' },
  render: renderInput,
};

export const WithPrefix: Story = {
  args: { prefix: 'https://', placeholder: 'example.com' },
  render: renderInput,
};

export const WithSuffix: Story = {
  args: { suffix: '@gmail.com', placeholder: 'user' },
  render: renderInput,
};
