/**
 * Input 输入框组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-input')
export class MyInput extends BaseElement {
  @property({ type: String }) type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' = 'text';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) name = '';
  @property({ type: String }) prefix = '';
  @property({ type: String }) suffix = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) clearable = false;
  @property({ type: Boolean }) error = false;
  @property({ type: String }) errorMessage = '';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: inline-block; width: 100%; }

      .input-wrapper {
        display: flex;
        align-items: center;
        background: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        overflow: hidden;
      }

      .input-wrapper:hover:not(.disabled) { border-color: var(--color-border-hover); }
      .input-wrapper.focused { border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-light); }
      .input-wrapper.error { border-color: var(--color-error); }
      .input-wrapper.error.focused { box-shadow: 0 0 0 3px #fee2e2; }
      .input-wrapper.disabled { background: var(--color-background-secondary); cursor: not-allowed; opacity: 0.6; }

      .prefix, .suffix { display: flex; align-items: center; padding: 0 var(--spacing-sm); color: var(--color-text-tertiary); font-size: var(--font-size-sm); white-space: nowrap; }
      .prefix { padding-right: 0; }
      .suffix { padding-left: 0; }

      input {
        flex: 1; width: 100%; height: 100%;
        border: none; outline: none; background: transparent;
        font-family: var(--font-family); color: var(--color-text);
      }
      input::placeholder { color: var(--color-text-tertiary); }
      input:disabled { cursor: not-allowed; }

      .input-wrapper.sm { height: 32px; }
      .input-wrapper.sm input { padding: 4px 10px; font-size: var(--font-size-sm); }
      .input-wrapper.md { height: 36px; }
      .input-wrapper.md input { padding: 6px 12px; font-size: var(--font-size-sm); }
      .input-wrapper.lg { height: 44px; }
      .input-wrapper.lg input { padding: 8px 14px; font-size: var(--font-size-md); }

      .clear-btn {
        display: none; padding: 0 var(--spacing-sm);
        color: var(--color-text-tertiary); cursor: pointer;
        font-size: var(--font-size-sm); transition: color var(--transition-fast);
      }
      .clear-btn:hover { color: var(--color-text); }
      .input-wrapper.has-value:not(.disabled) .clear-btn { display: flex; }

      .error-message { margin-top: var(--spacing-xs); color: var(--color-error); font-size: var(--font-size-xs); }
    `,
  ];

  private _focused = false;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.emit('input', this.value);
  }

  private handleFocus() { this._focused = true; this.emit('focus'); this.requestUpdate(); }
  private handleBlur() { this._focused = false; this.emit('blur'); this.requestUpdate(); }
  
  private handleClear(e: Event) {
    e.stopPropagation();
    this.value = '';
    this.emit('input', '');
    this.emit('clear');
    this.emit('change', '');
  }

  public focus() { (this.shadowRoot?.querySelector('input') as HTMLInputElement)?.focus(); }
  public blur() { (this.shadowRoot?.querySelector('input') as HTMLInputElement)?.blur(); }

  override render() {
    const classes = [this.size, this._focused ? 'focused' : '', this.disabled ? 'disabled' : '', this.error ? 'error' : '', this.value ? 'has-value' : ''].filter(Boolean).join(' ');

    return html`
      <div class="input-wrapper ${classes}">
        ${this.prefix ? html`<span class="prefix">${this.prefix}</span>` : ''}
        <input type=${this.type} .value=${this.value} placeholder=${this.placeholder} name=${this.name} ?disabled=${this.disabled} ?readonly=${this.readonly} @input=${this.handleInput} @focus=${this.handleFocus} @blur=${this.handleBlur} />
        ${this.suffix ? html`<span class="suffix">${this.suffix}</span>` : ''}
        ${this.clearable && this.value && !this.disabled ? html`<span class="clear-btn" @click=${this.handleClear}>✕</span>` : ''}
      </div>
      ${this.error && this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-input': MyInput; }
}
