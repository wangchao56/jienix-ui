/**
 * Checkbox 复选框组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-checkbox')
export class MyCheckbox extends BaseElement {
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: String }) label = '';
  @property({ type: String }) size: 'sm' | 'md' = 'md';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: inline-flex; align-items: center; cursor: pointer; user-select: none; }
      :host([disabled]) { cursor: not-allowed; opacity: 0.5; }
      .checkbox-wrapper { display: inline-flex; align-items: center; gap: var(--spacing-sm); }
      .checkbox {
        display: inline-flex; align-items: center; justify-content: center;
        border: 2px solid var(--color-border);
        border-radius: var(--radius-sm);
        background: var(--color-background);
        transition: all var(--transition-fast);
        position: relative;
      }
      .checkbox.sm { width: 16px; height: 16px; }
      .checkbox.md { width: 18px; height: 18px; }
      .checkbox:hover:not(.disabled) { border-color: var(--color-primary); }
      .checkbox.checked { background: var(--color-primary); border-color: var(--color-primary); }
      .checkbox.indeterminate { background: var(--color-primary); border-color: var(--color-primary); }
      .checkmark { color: white; opacity: 0; transform: scale(0.5); transition: all var(--transition-fast); }
      .checkbox.checked .checkmark, .checkbox.indeterminate .checkmark { opacity: 1; transform: scale(1); }
      .indeterminate-mark { position: absolute; width: 8px; height: 2px; background: white; opacity: 0; transition: opacity var(--transition-fast); }
      .checkbox.indeterminate .indeterminate-mark { opacity: 1; }
      .checkbox.checked .indeterminate-mark { opacity: 0; }
      .label { font-size: var(--font-size-sm); color: var(--color-text); line-height: 1.5; }
      :host([disabled]) .label { color: var(--color-text-disabled); }
    `,
  ];

  private handleClick() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit('change', { checked: this.checked, value: this.label });
  }

  override render() {
    const classes = [this.size, this.checked ? 'checked' : '', this.indeterminate ? 'indeterminate' : '', this.disabled ? 'disabled' : ''].filter(Boolean).join(' ');

    return html`
      <div class="checkbox-wrapper" @click=${this.handleClick}>
        <div class="checkbox ${classes}">
          <span class="checkmark">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.28 2.28L4 8.56l-2.28-2.28a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l7-7a.75.75 0 00-1.06-1.06z"/>
            </svg>
          </span>
          <span class="indeterminate-mark"></span>
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-checkbox': MyCheckbox; }
}
