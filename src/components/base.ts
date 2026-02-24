/**
 * 基础组件类
 * 所有组件的父类，提供通用功能
 */

import { LitElement, CSSResultGroup } from 'lit';
import { tokens } from '../styles/tokens.js';

// 将设计令牌注入为 CSS 变量
const globalStyles = `
  :host {
    /* 颜色 */
    --color-primary: ${tokens.color.primary};
    --color-primary-hover: ${tokens.color.primaryHover};
    --color-primary-active: ${tokens.color.primaryActive};
    --color-success: ${tokens.color.success};
    --color-warning: ${tokens.color.warning};
    --color-error: ${tokens.color.error};
    
    /* 文本 */
    --color-text: ${tokens.color.text};
    --color-text-secondary: ${tokens.color.textSecondary};
    --color-text-disabled: ${tokens.color.textDisabled};
    
    /* 边框和背景 */
    --color-border: ${tokens.color.border};
    --color-border-hover: ${tokens.color.borderHover};
    --color-background: ${tokens.color.background};
    --color-background-hover: ${tokens.color.backgroundHover};
    
    /* 间距 */
    --spacing-xs: ${tokens.spacing.xs};
    --spacing-sm: ${tokens.spacing.sm};
    --spacing-md: ${tokens.spacing.md};
    --spacing-lg: ${tokens.spacing.lg};
    --spacing-xl: ${tokens.spacing.xl};
    
    /* 字体 */
    --font-family: ${tokens.font.family};
    --font-size-xs: ${tokens.font.size.xs};
    --font-size-sm: ${tokens.font.size.sm};
    --font-size-md: ${tokens.font.size.md};
    --font-size-lg: ${tokens.font.size.lg};
    --font-size-xl: ${tokens.font.size.xl};
    
    /* 圆角 */
    --radius-sm: ${tokens.radius.sm};
    --radius-md: ${tokens.radius.md};
    --radius-lg: ${tokens.radius.lg};
    --radius-round: ${tokens.radius.round};
    
    /* 阴影 */
    --shadow-sm: ${tokens.shadow.sm};
    --shadow-md: ${tokens.shadow.md};
    --shadow-lg: ${tokens.shadow.lg};
    
    /* 过渡 */
    --transition-fast: ${tokens.transition.fast};
    --transition-normal: ${tokens.transition.normal};
    --transition-slow: ${tokens.transition.slow};
  }
`;

export abstract class BaseElement extends LitElement {
  // 通用属性
  declare disabled: boolean;
  declare size: 'sm' | 'md' | 'lg';

  static styles: CSSResultGroup = [globalStyles];

  protected createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

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
