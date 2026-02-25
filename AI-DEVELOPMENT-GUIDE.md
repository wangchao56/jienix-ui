# Jienix UI - AI 开发规范指南

## 项目概述

Jienix UI 是一个基于 [Lit](https://lit.dev/) 的现代 Web Components UI 组件库，采用黑白灰系配色，简洁美观，框架无关，可在任何项目中使用。

## 技术栈

- **组件框架**: [Lit](https://lit.dev/) 3.x - 轻量级的 Web Components 框架
- **开发工具**: Vite 5.x
- **文档工具**: Storybook 8.x
- **语言**: TypeScript 5.x
- **测试**: Web Test Runner + Playwright

## 开发规范

### 1. 组件目录结构

每个组件应放在 `src/components/` 目录下，包含以下文件：

```
src/components/组件名/
├── 组件名.ts          # 组件实现
├── 组件名.stories.ts  # Storybook 文档
└── index.ts           # 导出入口
```

**示例**:
```
src/components/button/
├── button.ts
├── button.stories.ts
└── index.ts
```

### 2. 组件基础模板

```typescript
/**
 * 组件名称 组件描述 - 配色风格
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-组件名')
export class MyComponent extends BaseElement {
  // 属性定义
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: Boolean }) disabled = false;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      /* 组件样式 */
      :host { display: inline-block; }
    `,
  ];

  private handleEvent() {
    this.emit('event-name', { data: 'value' });
  }

  override render() {
    return html`
      <div class=${this.variant}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-组件名': MyComponent; }
}
```

### 3. 设计 Token (Design Tokens)

所有组件必须使用 `BaseElement` 中定义的 CSS 变量，保持设计一致性：

**颜色变量**:
```css
--color-primary          /* 主色 - 黑色 #1f2937 */
--color-primary-hover    /* 主色悬停 */
--color-primary-active   /* 主色激活 */
--color-primary-light    /* 主色浅色背景 */
--color-success          /* 成功 #10b981 */
--color-warning          /* 警告 #f59e0b */
--color-error            /* 错误 #ef4444 */
--color-text             /* 文本 #111827 */
--color-text-secondary   /* 次要文本 #6b7280 */
--color-text-tertiary    /* 辅助文本 #9ca3af */
--color-text-disabled    /* 禁用文本 #d1d5db */
--color-border           /* 边框 #e5e7eb */
--color-border-hover     /* 边框悬停 */
--color-border-focus     /* 边框聚焦 */
--color-background       /* 背景 #ffffff */
--color-background-secondary /* 次要背景 #f9fafb */
--color-background-tertiary  /* 辅助背景 #f3f4f6 */
--color-background-hover    /* 悬停背景 */
```

**间距变量**:
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 24px
--spacing-2xl: 32px
```

**字体变量**:
```css
--font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
--font-size-xs: 12px
--font-size-sm: 13px
--font-size-md: 14px
--font-size-lg: 16px
--font-size-xl: 18px
--font-size-2xl: 20px
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

**圆角变量**:
```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 10px
--radius-xl: 12px
--radius-2xl: 16px
--radius-full: 9999px
```

**阴影变量**:
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
```

**过渡变量**:
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### 4. 属性命名规范

- **组件标签**: 使用 `my-` 前缀 (如 `my-button`, `my-input`)
- **Props**: 使用驼峰命名 (camelCase)
- **事件**: 使用 kebab-case (如 `click`, `change`)
- **CSS 类**: 使用连字符 (kebab-case)

### 5. 组件属性模式

```typescript
// 布尔属性
@property({ type: Boolean }) disabled = false;
@property({ type: Boolean }) loading = false;

// 字符串属性
@property({ type: String }) variant: 'primary' | 'secondary' | 'outline' = 'primary';
@property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

// 枚举属性
@property({ type: String }) shape: 'default' | 'round' | 'circle' = 'default';
```

### 6. 事件触发模式

使用 `BaseElement` 提供的 `emit` 方法：

```typescript
private handleClick(e: MouseEvent) {
  if (this.disabled) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  this.emit('click', { detail: 'value' });
}
```

### 7. Storybook 文档规范

每个组件必须包含 Storybook 文档，模板如下：

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/组件名',
  component: 'my-组件名',
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary'], 
      description: '组件变体' 
    },
    size: { 
      control: 'select', 
      options: ['xs', 'sm', 'md', 'lg', 'xl'], 
      description: '组件尺寸' 
    },
    disabled: { control: 'boolean', description: '是否禁用' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

const renderComponent = (args: any) => {
  return html`
    <my-组件名
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      组件内容
    </my-组件名>
  `;
};

export const Default: Story = {
  render: renderComponent,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px;">
      <my-组件名 variant="primary">Primary</my-组件名>
      <my-组件名 variant="secondary">Secondary</my-组件名>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 12px;">
      <my-组件名 size="xs">Extra Small</my-组件名>
      <my-组件名 size="sm">Small</my-组件名>
      <my-组件名 size="md">Medium</my-组件名>
      <my-组件名 size="lg">Large</my-组件名>
      <my-组件名 size="xl">Extra Large</my-组件名>
    </div>
  `,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: renderComponent,
};
```

### 8. CSS 样式规范

- 使用 `css` 标签模板字符串定义样式
- 继承 `BaseElement.styles` 获取基础样式
- 使用 CSS 变量而非硬编码值
- 遵循移动优先的响应式设计

```typescript
static override styles: CSSResultGroup = [
  ...BaseElement.styles,
  css`
    :host { display: inline-block; }
    
    .button {
      /* 使用变量 */
      background: var(--color-primary);
      color: white;
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
    }
    
    .button:hover {
      background: var(--color-primary-hover);
    }
    
    /* 聚焦状态 */
    .button:focus-visible {
      box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-primary);
    }
    
    /* 禁用状态 */
    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
  `,
];
```

### 9. 常用开发命令

```bash
# 开发模式
npm run dev

# 构建库
npm run build

# 构建 Storybook 文档
npm run build-storybook

# 运行 Storybook 开发服务器
npm run storybook

# 运行测试
npm run test

# 代码检查
npm run lint
```

### 10. 组件导出

在 `src/components/组件名/index.ts` 中导出组件：

```typescript
export { MyComponent } from './组件名';
```

并在主入口 `src/index.ts` 中统一导出所有组件。

## 配色规范

项目采用黑白灰系配色，遵循以下原则：

- **主色**: `#1f2937` (深灰偏黑)
- **辅助色**: 使用灰度梯度 (`#f3f4f6` 到 `#111827`)
- **功能色**: 仅在必要时使用 (成功绿、警告黄、错误红)
- **无彩色**: 避免纯黑纯白，使用灰度值

## 注意事项

1. **无障碍性**: 确保组件支持键盘导航和屏幕阅读器
2. **类型安全**: 所有属性必须有 TypeScript 类型定义
3. **默认属性**: 提供合理的默认值
4. **文档完整**: 每个属性、事件都应有中文描述
5. **测试覆盖**: 关键交互应有测试用例
