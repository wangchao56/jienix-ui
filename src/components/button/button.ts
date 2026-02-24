/**
 * Button 按钮组件
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-button')
export class MyButton extends BaseElement {
  @property({ type: String }) variant: 'primary' | 'secondary' | 'outline' | 'text' | 'danger' = 'primary';
  @property({ type: String }) override size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) override disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) block = false;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
      }
      
      :host([block]) {
        display: block;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xs);
        font-family: var(--font-family);
        font-weight: 500;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all var(--transition-fast);
        outline: none;
      }

      /* 尺寸 */
      button.sm {
        padding: 4px 12px;
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
      }
      
      button.md {
        padding: 8px 16px;
        font-size: var(--font-size-sm);
        border-radius: var(--radius-sm);
      }
      
      button.lg {
        padding: 12px 24px;
        font-size: var(--font-size-md);
        border-radius: var(--radius-md);
      }

      /* Primary */
      button.primary {
        background: var(--color-primary);
        color: white;
      }
      button.primary:hover:not(:disabled) {
        background: var(--color-primary-hover);
      }
      button.primary:active:not(:disabled) {
        background: var(--color-primary-active);
      }

      /* Secondary */
      button.secondary {
        background: var(--color-background);
        color: var(--color-text);
        border-color: var(--color-border);
      }
      button.secondary:hover:not(:disabled) {
        color: var(--color-primary);
        border-color: var(--color-primary);
      }

      /* Outline */
      button.outline {
        background: transparent;
        color: var(--color-primary);
        border-color: var(--color-primary);
      }
      button.outline:hover:not(:disabled) {
        background: var(--color-primary);
        color: white;
      }

      /* Text */
      button.text {
        background: transparent;
        color: var(--color-text);
        border-color: transparent;
      }
      button.text:hover:not(:disabled) {
        color: var(--color-primary);
        background: var(--color-background-hover);
      }

      /* Danger */
      button.danger {
        background: var(--color-error);
        color: white;
      }
      button.danger:hover:not(:disabled) {
        opacity: 0.85;
      }

      /* Disabled */
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Block */
      button.block {
        width: 100%;
      }

      /* Loading spinner */
      .spinner {
        width: 14px;
        height: 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
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
      this.block ? 'block' : '',
    ].filter(Boolean).join(' ');

    return html`
      <button
        class=${classes}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
      >
        ${this.loading ? html`<span class="spinner"></span>` : ''}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
