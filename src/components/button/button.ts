/**
 * Button 按钮组件 - 现代风格
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-button')
export class MyButton extends BaseElement {
  @property({ type: String }) variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' = 'primary';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) block = false;
  @property({ type: String }) shape: 'default' | 'round' | 'circle' = 'default';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
      }
      
      :host([block]) {
        display: block;
        width: 100%;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        font-family: var(--font-family);
        font-weight: var(--font-weight-medium);
        border: none;
        cursor: pointer;
        transition: all var(--transition-fast);
        outline: none;
        white-space: nowrap;
        user-select: none;
        text-decoration: none;
        position: relative;
        overflow: hidden;
      }

      button:focus-visible {
        box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-primary);
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      /* 尺寸 */
      button.xs {
        height: 24px;
        padding: 0 10px;
        font-size: var(--font-size-xs);
        border-radius: var(--radius-sm);
      }
      
      button.sm {
        height: 32px;
        padding: 0 12px;
        font-size: var(--font-size-sm);
        border-radius: var(--radius-md);
      }
      
      button.md {
        height: 36px;
        padding: 0 16px;
        font-size: var(--font-size-sm);
        border-radius: var(--radius-md);
      }
      
      button.lg {
        height: 44px;
        padding: 0 20px;
        font-size: var(--font-size-md);
        border-radius: var(--radius-lg);
      }

      button.xl {
        height: 52px;
        padding: 0 24px;
        font-size: var(--font-size-lg);
        border-radius: var(--radius-lg);
      }

      /* 形状 */
      button.round {
        border-radius: var(--radius-full);
      }

      button.circle {
        border-radius: 50%;
        padding: 0;
      }
      
      button.circle.xs { width: 24px; }
      button.circle.sm { width: 32px; }
      button.circle.md { width: 36px; }
      button.circle.lg { width: 44px; }
      button.circle.xl { width: 52px; }

      /* Primary */
      button.primary {
        background: var(--color-primary);
        color: white;
      }
      button.primary:hover:not(:disabled) {
        background: var(--color-primary-hover);
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }
      button.primary:active:not(:disabled) {
        background: var(--color-primary-active);
        transform: translateY(0);
        box-shadow: none;
      }

      /* Secondary */
      button.secondary {
        background: var(--color-background-tertiary);
        color: var(--color-text);
      }
      button.secondary:hover:not(:disabled) {
        background: var(--color-background-hover);
        color: var(--color-primary);
      }

      /* Outline */
      button.outline {
        background: transparent;
        color: var(--color-primary);
        border: 1px solid var(--color-border);
      }
      button.outline:hover:not(:disabled) {
        border-color: var(--color-primary);
        background: var(--color-primary-light);
      }

      /* Ghost */
      button.ghost {
        background: transparent;
        color: var(--color-text);
      }
      button.ghost:hover:not(:disabled) {
        background: var(--color-background-hover);
        color: var(--color-text);
      }

      /* Danger */
      button.danger {
        background: var(--color-error);
        color: white;
      }
      button.danger:hover:not(:disabled) {
        background: #dc2626;
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }

      /* Block */
      button.block {
        width: 100%;
      }

      /* Loading */
      .loading-wrapper {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-sm);
      }

      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `,
  ];

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    this.emit('click', e);
  }

  override render() {
    const classes = [
      this.variant,
      this.size,
      this.shape !== 'default' ? this.shape : '',
      this.block ? 'block' : '',
    ].filter(Boolean).join(' ');

    return html`
      <button
        class=${classes}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
      >
        ${this.loading 
          ? html`<span class="spinner"></span><span class="loading-wrapper"><slot></slot></span>` 
          : html`<slot></slot>`}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
