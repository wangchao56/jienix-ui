/**
 * 基础组件类
 * 所有组件的父类，提供通用功能
 */

import { LitElement, css, unsafeCSS, CSSResultGroup } from 'lit';

// 黑白灰配色 tokens
const tokens = {
  color: {
    primary: '#1f2937',
    primaryHover: '#374151',
    primaryActive: '#111827',
    primaryLight: '#f3f4f6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    text: '#111827',
    textSecondary: '#6b7280',
    textTertiary: '#9ca3af',
    textDisabled: '#d1d5db',
    border: '#e5e7eb',
    borderHover: '#9ca3af',
    borderFocus: '#1f2937',
    background: '#ffffff',
    backgroundSecondary: '#f9fafb',
    backgroundTertiary: '#f3f4f6',
    backgroundHover: '#f3f4f6',
  },
  spacing: { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', '2xl': '32px' },
  font: {
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    size: { xs: '12px', sm: '13px', md: '14px', lg: '16px', xl: '18px', '2xl': '20px' },
    weight: { normal: '400', medium: '500', semibold: '600', bold: '700' },
  },
  radius: { sm: '4px', md: '8px', lg: '10px', xl: '12px', '2xl': '16px', full: '9999px' },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transition: { fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)', normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)', slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)' },
};

const cssVariables = `
  :root {
    --color-primary: ${tokens.color.primary};
    --color-primary-hover: ${tokens.color.primaryHover};
    --color-primary-active: ${tokens.color.primaryActive};
    --color-primary-light: ${tokens.color.primaryLight};
    --color-success: ${tokens.color.success};
    --color-warning: ${tokens.color.warning};
    --color-error: ${tokens.color.error};
    --color-text: ${tokens.color.text};
    --color-text-secondary: ${tokens.color.textSecondary};
    --color-text-tertiary: ${tokens.color.textTertiary};
    --color-text-disabled: ${tokens.color.textDisabled};
    --color-border: ${tokens.color.border};
    --color-border-hover: ${tokens.color.borderHover};
    --color-border-focus: ${tokens.color.borderFocus};
    --color-background: ${tokens.color.background};
    --color-background-secondary: ${tokens.color.backgroundSecondary};
    --color-background-tertiary: ${tokens.color.backgroundTertiary};
    --color-background-hover: ${tokens.color.backgroundHover};
    --spacing-xs: ${tokens.spacing.xs};
    --spacing-sm: ${tokens.spacing.sm};
    --spacing-md: ${tokens.spacing.md};
    --spacing-lg: ${tokens.spacing.lg};
    --spacing-xl: ${tokens.spacing.xl};
    --spacing-2xl: ${tokens.spacing['2xl']};
    --font-family: ${tokens.font.family};
    --font-size-xs: ${tokens.font.size.xs};
    --font-size-sm: ${tokens.font.size.sm};
    --font-size-md: ${tokens.font.size.md};
    --font-size-lg: ${tokens.font.size.lg};
    --font-size-xl: ${tokens.font.size.xl};
    --font-size-2xl: ${tokens.font.size['2xl']};
    --font-weight-normal: ${tokens.font.weight.normal};
    --font-weight-medium: ${tokens.font.weight.medium};
    --font-weight-semibold: ${tokens.font.weight.semibold};
    --font-weight-bold: ${tokens.font.weight.bold};
    --radius-sm: ${tokens.radius.sm};
    --radius-md: ${tokens.radius.md};
    --radius-lg: ${tokens.radius.lg};
    --radius-xl: ${tokens.radius.xl};
    --radius-2xl: ${tokens.radius['2xl']};
    --radius-full: ${tokens.radius.full};
    --shadow-sm: ${tokens.shadow.sm};
    --shadow-md: ${tokens.shadow.md};
    --shadow-lg: ${tokens.shadow.lg};
    --transition-fast: ${tokens.transition.fast};
    --transition-normal: ${tokens.transition.normal};
    --transition-slow: ${tokens.transition.slow};
    box-sizing: border-box;
  }
  *, *::before, *::after { box-sizing: border-box; }
`;

export abstract class BaseElement extends LitElement {
  declare disabled: boolean;
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  static styles: CSSResultGroup = [unsafeCSS(cssVariables)];

  protected emit<T = any>(eventName: string, detail?: T): void {
    this.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true, composed: true }));
  }
}
