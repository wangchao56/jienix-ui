import type { Preview } from '@storybook/web-components-vite';
import { html } from 'lit';

// 先加载组件
import '../src/components/button/button.js';
import '../src/components/input/input.js';
import '../src/components/icon/icon.js';
import '../src/components/card/card.js';
import '../src/components/checkbox/checkbox.js';
import '../src/components/switch/switch.js';

// 全局样式
const globalStyles = html`
  <style>
    :root {
      /* 品牌色 */
      --color-primary: #3b82f6;
      --color-primary-hover: #2563eb;
      --color-primary-active: #1d4ed8;
      --color-primary-light: #dbeafe;
      
      /* 功能色 */
      --color-success: #10b981;
      --color-success-light: #d1fae5;
      --color-warning: #f59e0b;
      --color-warning-light: #fef3c7;
      --color-error: #ef4444;
      --color-error-light: #fee2e2;
      
      /* 文本色 */
      --color-text: #1f2937;
      --color-text-secondary: #6b7280;
      --color-text-tertiary: #9ca3af;
      --color-text-disabled: #d1d5db;
      
      /* 边框和背景 */
      --color-border: #e5e7eb;
      --color-border-hover: #9ca3af;
      --color-border-focus: #3b82f6;
      --color-background: #ffffff;
      --color-background-secondary: #f9fafb;
      --color-background-tertiary: #f3f4f6;
      --color-background-hover: #f3f4f6;
      
      /* 间距 */
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 12px;
      --spacing-lg: 16px;
      --spacing-xl: 24px;
      --spacing-2xl: 32px;
      
      /* 字体 */
      --font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-size-xs: 12px;
      --font-size-sm: 13px;
      --font-size-md: 14px;
      --font-size-lg: 16px;
      --font-size-xl: 18px;
      --font-size-2xl: 20px;
      --font-weight-normal: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
      
      /* 圆角 */
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 10px;
      --radius-xl: 12px;
      --radius-2xl: 16px;
      --radius-full: 9999px;
      
      /* 阴影 */
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      
      /* 过渡 */
      --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  </style>
`;

const preview: Preview = {
  decorators: [
    (story) => {
      return html`
        ${globalStyles}
        ${story()}
      `;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
};

export default preview;
