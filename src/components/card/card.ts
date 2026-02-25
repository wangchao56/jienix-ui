/**
 * Card 卡片组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-card')
export class MyCard extends BaseElement {
  @property({ type: Boolean }) bordered = true;
  @property({ type: Boolean }) hoverable = false;
  @property({ type: String }) padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: block; }
      .card {
        background: var(--color-background);
        border-radius: var(--radius-lg);
        overflow: hidden;
      }
      .card.bordered { border: 1px solid var(--color-border); }
      .card.hoverable { cursor: pointer; transition: all var(--transition-normal); }
      .card.hoverable:hover {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
      }
      .card.padding-none { padding: 0; }
      .card.padding-sm { padding: var(--spacing-sm); }
      .card.padding-md { padding: var(--spacing-lg); }
      .card.padding-lg { padding: var(--spacing-xl); }
      .card-header { padding: var(--spacing-lg); padding-bottom: 0; font-weight: var(--font-weight-semibold); font-size: var(--font-size-lg); color: var(--color-text); }
      .card-content { padding: var(--spacing-lg); }
      .card-footer { padding: var(--spacing-lg); padding-top: 0; border-top: 1px solid var(--color-border); margin-top: var(--spacing-lg); }
      .card.no-border .card-footer { border-top: none; margin-top: 0; padding-top: var(--spacing-lg); }
    `,
  ];

  private handleClick(e: MouseEvent) {
    if (this.hoverable) this.emit('click', e);
  }

  override render() {
    const classes = [this.bordered ? 'bordered' : '', this.hoverable ? 'hoverable' : '', `padding-${this.padding}`].filter(Boolean).join(' ');
    const hasHeader = this.shadowRoot?.querySelector('[slot="header"]');
    const hasFooter = this.shadowRoot?.querySelector('[slot="footer"]');

    return html`
      <div class="card ${classes}" @click=${this.handleClick}>
        ${hasHeader ? html`<div class="card-header"><slot name="header"></slot></div>` : ''}
        <div class="card-content"><slot></slot></div>
        ${hasFooter ? html`<div class="card-footer"><slot name="footer"></slot></div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-card': MyCard; }
}
