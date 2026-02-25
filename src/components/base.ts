/**
 * 基础组件类
 * 所有组件的父类，提供通用功能
 */

import { LitElement, css, CSSResultGroup } from 'lit';
import { tokens } from '../styles/tokens.js';

// 将设计令牌注入为全局 CSS 变量
const globalStyles = css`
  :host {
    /* 品牌色 */
    --color-primary: ${tokens.color.primary};
    --color-primary-hover: ${tokens.color.primaryHover};
    --color-primary-active: ${tokens.color.primaryActive};
    --color-primary-light: ${tokens.color.primaryLight};
    
    /* 功能色 */
    --color-success: ${tokens.color.success};
    --color-success-light: ${tokens.color.successLight};
    --color-warning: ${tokens.color.warning};
    --color-warning-light: ${tokens.color.warningLight};
    --color-error: ${tokens.color.error};
    --color-error-light: ${tokens.color.errorLight};
    
    /* 文本色 */
    --color-text: ${tokens.color.text};
    --color-text-secondary: ${tokens.color.textSecondary};
    --color-text-tertiary: ${tokens.color.textTertiary};
    --color-text-disabled: ${tokens.color.textDisabled};
    
    /* 边框和背景 */
    --color-border: ${tokens.color.border};
    --color-border-hover: ${tokens.color.borderHover};
    --color-border-focus: ${tokens.color.borderFocus};
    --color-background: ${tokens.color.background};
    --color-background-secondary: ${tokens.color.backgroundSecondary};
    --color-background-tertiary: ${tokens.color.backgroundTertiary};
    --color-background-hover: ${tokens.color.backgroundHover};
    --color-overlay: ${tokens.color.overlay};
    
    /* 间距 */
    --spacing-xs: ${tokens.spacing.xs};
    --spacing-sm: ${tokens.spacing.sm};
    --spacing-md: ${tokens.spacing.md};
    --spacing-lg: ${tokens.spacing.lg};
    --spacing-xl: ${tokens.spacing.xl};
    --spacing-2xl: ${tokens.spacing['2xl']};
    
    /* 字体 */
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
    
    /* 圆角 */
    --radius-sm: ${tokens.radius.sm};
    --radius-md: ${tokens.radius.md};
    --radius-lg: ${tokens.radius.lg};
    --radius-xl: ${tokens.radius.xl};
    --radius-2xl: ${tokens.radius['2xl']};
    --radius-full: ${tokens.radius.full};
    
    /* 阴影 */
    --shadow-sm: ${tokens.shadow.sm};
    --shadow-md: ${tokens.shadow.md};
    --shadow-lg: ${tokens.shadow.lg};
    --shadow-xl: ${tokens.shadow.xl};
    --shadow-inner: ${tokens.shadow.inner};
    
    /* 过渡 */
    --transition-fast: ${tokens.transition.fast};
    --transition-normal: ${tokens.transition.normal};
    --transition-slow: ${tokens.transition.slow};
    
    /* 动画 */
    --animate-spin: ${tokens.animation.spin};
    --animate-pulse: ${tokens.animation.pulse};
    
    /* 盒模型 */
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export abstract class BaseElement extends LitElement {
  // 通用属性
  declare disabled: boolean;
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  // 使用 Shadow DOM
  static styles: CSSResultGroup = [globalStyles];

  protected emit<T = any>(eventName: string, detail?: T): void {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      })
    );
  }
}
