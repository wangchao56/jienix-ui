/**
 * Tag 标签组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-tag')
export class MyTag extends BaseElement {
  @property({ type: String }) variant: 'default' | 'outline' | 'filled' = 'default';
  @property({ type: String }) size: 'sm' | 'md' = 'md';
  @property({ type: Boolean }) closable = false;
  @property({ type: String }) color = '';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: inline-block; }
      
      .tag {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        font-family: var(--font-family);
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
        white-space: nowrap;
      }

      /* 尺寸 */
      .tag.sm {
        height: 20px;
        padding: 0 6px;
        font-size: var(--font-size-xs);
      }
      .tag.md {
        height: 24px;
        padding: 0 8px;
        font-size: var(--font-size-sm);
      }

      /* 默认 */
      .tag.default {
        background: var(--color-background-tertiary);
        color: var(--color-text-secondary);
      }
      .tag.default:hover {
        background: var(--color-background-hover);
      }

      /* 轮廓 */
      .tag.outline {
        background: transparent;
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
      }
      .tag.outline:hover {
        border-color: var(--color-text-secondary);
      }

      /* 实心 */
      .tag.filled {
        background: var(--color-primary-light);
        color: var(--color-primary);
      }

      /* 可关闭 */
      .close-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        margin-left: 2px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.6;
        transition: all var(--transition-fast);
      }
      .close-btn:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.1);
      }
    `,
  ];

  private handleClose(e: Event) {
    e.stopPropagation();
    this.emit('close');
  }

  override render() {
    const classes = [this.variant, this.size].filter(Boolean).join(' ');

    const style = this.color ? `background: ${this.color}20; color: ${this.color};` : '';

    return html`
      <span class="tag ${classes}" style="${style}">
        <slot></slot>
        ${this.closable ? html`
          <span class="close-btn" @click=${this.handleClose}>✕</span>
        ` : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-tag': MyTag; }
}
