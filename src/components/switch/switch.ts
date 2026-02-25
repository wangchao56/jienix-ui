/**
 * Switch 开关组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-switch')
export class MySwitch extends BaseElement {
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) checkedText = '';
  @property({ type: String }) uncheckedText = '';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: inline-flex; align-items: center; cursor: pointer; user-select: none; }
      :host([disabled]) { cursor: not-allowed; opacity: 0.5; }
      .switch-wrapper { display: inline-flex; align-items: center; gap: var(--spacing-sm); }
      .switch {
        position: relative; border-radius: var(--radius-full);
        background: var(--color-border);
        transition: all var(--transition-fast); cursor: pointer;
      }
      .switch::after {
        content: ''; position: absolute; top: 2px; left: 2px;
        background: white; border-radius: 50%;
        box-shadow: var(--shadow-sm);
        transition: transform var(--transition-fast);
      }
      .switch.sm { width: 32px; height: 18px; }
      .switch.sm::after { width: 14px; height: 14px; }
      .switch.sm.checked::after { transform: translateX(14px); }
      .switch.md { width: 40px; height: 22px; }
      .switch.md::after { width: 18px; height: 18px; }
      .switch.md.checked::after { transform: translateX(18px); }
      .switch.lg { width: 48px; height: 26px; }
      .switch.lg::after { width: 22px; height: 22px; }
      .switch.lg.checked::after { transform: translateX(22px); }
      .switch.checked { background: var(--color-primary); }
      .switch.disabled { cursor: not-allowed; }
      .label { font-size: var(--font-size-sm); color: var(--color-text); }
      :host([disabled]) .label { color: var(--color-text-disabled); }
    `,
  ];

  private handleClick() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.emit('change', { checked: this.checked });
  }

  override render() {
    const classes = [this.size, this.checked ? 'checked' : '', this.disabled ? 'disabled' : ''].filter(Boolean).join(' ');
    const hasLabel = this.checkedText || this.uncheckedText;

    return html`
      <div class="switch-wrapper">
        ${hasLabel && !this.checked ? html`<span class="label">${this.uncheckedText}</span>` : ''}
        <div class="switch ${classes}" @click=${this.handleClick}></div>
        ${hasLabel && this.checked ? html`<span class="label">${this.checkedText}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-switch': MySwitch; }
}
