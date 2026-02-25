/**
 * Badge 徽标组件 - 黑白灰系配色
 * 支持8个方位和偏移量
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

export type BadgePosition = 
  | 'top-left' | 'top-center' | 'top-right'
  | 'middle-left' | 'middle-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

@customElement('my-badge')
export class MyBadge extends BaseElement {
  @property({ type: Number, attribute: 'count' }) count = 0;
  @property({ type: Number }) maxCount = 99;
  @property({ type: Boolean }) dot = false;
  @property({ type: String }) color = '';
  @property({ type: Boolean }) showZero = false;
  @property({ type: String }) position: BadgePosition = 'top-right';
  @property({ type: Number }) offsetX = 0;
  @property({ type: Number }) offsetY = 0;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
        position: relative;
        line-height: 1;
      }

      .badge-wrapper {
        position: relative;
        display: inline-block;
      }

      .badge {
        position: absolute;
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
        white-space: nowrap;
        transform: translate(-50%, -50%);
        transition: all var(--transition-fast);
      }

      .badge.dot {
        min-width: 8px;
        width: 8px;
        height: 8px;
        padding: 0;
        transform: translate(-50%, -50%);
      }

      .badge.hidden {
        display: none;
      }

      /* 8个方位 */
      .badge.top-left {
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      }
      .badge.top-center {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .badge.top-right {
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
      .badge.middle-left {
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
      }
      .badge.middle-right {
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
      }
      .badge.bottom-left {
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
      }
      .badge.bottom-center {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }
      .badge.bottom-right {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);
      }

      /* 偏移量 */
      .badge.offset {
        transform: translate(
          calc(-50% + var(--offset-x, 0px)),
          calc(-50% + var(--offset-y, 0px))
        );
      }
      .badge.dot.offset {
        transform: translate(
          calc(-50% + var(--offset-x, 0px)),
          calc(-50% + var(--offset-y, 0px))
        );
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
    const hasOffset = this.offsetX !== 0 || this.offsetY !== 0;
    const style = this.color ? `background: ${this.color};` : '';
    const offsetStyle = hasOffset 
      ? `--offset-x: ${this.offsetX}px; --offset-y: ${this.offsetY}px;` 
      : '';

    const badgeClasses = [
      this.position,
      hasOffset ? 'offset' : '',
    ].filter(Boolean).join(' ');

    if (this.dot) {
      return html`
        <div class="badge-wrapper">
          <slot></slot>
          <span 
            class="badge dot ${badgeClasses} ${showBadge ? '' : 'hidden'}" 
            style="${style} ${offsetStyle}"
          ></span>
        </div>
      `;
    }

    return html`
      <div class="badge-wrapper">
        <slot></slot>
        ${showBadge ? html`
          <span class="badge ${badgeClasses}" style="${style} ${offsetStyle}">
            ${this.displayCount}
          </span>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-badge': MyBadge; }
}
