import type { Preview } from '@storybook/web-components-vite';
import { html } from 'lit';

import '../src/components/button/button.js';
import '../src/components/input/input.js';
import '../src/components/icon/icon.js';
import '../src/components/card/card.js';
import '../src/components/checkbox/checkbox.js';
import '../src/components/switch/switch.js';
import '../src/components/tag/tag.js';
import '../src/components/badge/badge.js';
import '../src/components/modal/modal.js';

const globalStyles = html`
  <style>
    :root {
      --color-primary: #1f2937;
      --color-primary-hover: #374151;
      --color-primary-active: #111827;
      --color-primary-light: #f3f4f6;
      --color-success: #10b981;
      --color-warning: #f59e0b;
      --color-error: #ef4444;
      --color-text: #111827;
      --color-text-secondary: #6b7280;
      --color-text-tertiary: #9ca3af;
      --color-text-disabled: #d1d5db;
      --color-border: #e5e7eb;
      --color-border-hover: #9ca3af;
      --color-border-focus: #1f2937;
      --color-background: #ffffff;
      --color-background-secondary: #f9fafb;
      --color-background-tertiary: #f3f4f6;
      --color-background-hover: #f3f4f6;
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 12px;
      --spacing-lg: 16px;
      --spacing-xl: 24px;
      --spacing-2xl: 32px;
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
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 10px;
      --radius-xl: 12px;
      --radius-2xl: 16px;
      --radius-full: 9999px;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    body { margin: 0; padding: 24px; font-family: var(--font-family); }
  </style>
`;

const preview: Preview = {
  decorators: [
    (story) => html`${globalStyles}${story()}`,
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
