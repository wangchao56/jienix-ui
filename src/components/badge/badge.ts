/**
 * Badge 徽标组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-badge')
export class MyBadge extends BaseElement {
  @property({ type: Number, attribute: 'count' }) count = 0;
  @property({ type: Number }) maxCount = 99;
  @property({ type: Boolean }) dot = false;
  @property({ type: String }) color = '';
  @property({ type: Boolean }) showZero = false;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        line-height: 1;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        font-family: var(--font-family);
        font-size: 11px;
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-full);
        background: var(--color-error);
        color: white;
      }

      .badge.dot {
        min-width: 8px;
        width: 8px;
        height: 8px;
        padding: 0;
      }

      .badge.hidden {
        display: none;
      }
    `,
  ];

  private get displayCount(): string {
    if (this.count > this.maxCount) {
      return `${this.maxCount}+`;
    }
    return String(this.count);
  }

  override render() {
    const showBadge = this.showZero || this.count > 0;
    const style = this.color ? `background: ${this.color};` : '';

    if (this.dot) {
      return html`
        <span class="badge dot ${showBadge ? '' : 'hidden'}" style="${style}"></span>
        <slot></slot>
      `;
    }

    return html`
      <slot></slot>
      ${showBadge ? html`
        <span class="badge" style="${style}">${this.displayCount}</span>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-badge': MyBadge; }
}
