/**
 * Input 输入框组件
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-input')
export class MyInput extends BaseElement {
  @property({ type: String }) type: 'text' | 'password' | 'email' | 'number' = 'text';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) name = '';
  @property({ type: Boolean }) override disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) clearable = false;
  @property({ type: String }) override size: 'sm' | 'md' | 'lg' = 'md';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-block;
        width: 100%;
      }

      .input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        background: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
      }

      .input-wrapper:hover:not(.disabled):not(.focused) {
        border-color: var(--color-primary);
      }

      .input-wrapper.focused {
        border-color: var(--color-primary);
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      }

      .input-wrapper.disabled {
        background: var(--color-background-hover);
        cursor: not-allowed;
        opacity: 0.6;
      }

      input {
        flex: 1;
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        font-family: var(--font-family);
        color: var(--color-text);
      }

      input::placeholder {
        color: var(--color-text-disabled);
      }

      input:disabled {
        cursor: not-allowed;
      }

      /* 尺寸 */
      .input-wrapper.sm input {
        padding: 4px 8px;
        font-size: var(--font-size-sm);
      }
      
      .input-wrapper.md input {
        padding: 8px 12px;
        font-size: var(--font-size-sm);
      }
      
      .input-wrapper.lg input {
        padding: 12px 16px;
        font-size: var(--font-size-md);
      }

      /* 清除按钮 */
      .clear-btn {
        display: none;
        padding: 0 8px;
        color: var(--color-text-secondary);
        cursor: pointer;
        font-size: 14px;
      }

      .input-wrapper:hover .clear-btn:not(:empty),
      .input-wrapper.focused .clear-btn:not(:empty) {
        display: flex;
        align-items: center;
      }

      .clear-btn:hover {
        color: var(--color-text);
      }
    `,
  ];

  private _focused = false;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.emit('input', this.value);
  }

  private handleFocus() {
    this._focused = true;
    this.emit('focus');
    this.requestUpdate();
  }

  private handleBlur() {
    this._focused = false;
    this.emit('blur');
    this.requestUpdate();
  }

  private handleClear(e: Event) {
    e.stopPropagation();
    this.value = '';
    this.emit('input', '');
    this.emit('clear');
  }

  public focus() {
    const input = this.shadowRoot?.querySelector('input');
    input?.focus();
  }

  public blur() {
    const input = this.shadowRoot?.querySelector('input');
    input?.blur();
  }

  override render() {
    const classes = [
      this.size,
      this._focused ? 'focused' : '',
      this.disabled ? 'disabled' : '',
    ].filter(Boolean).join(' ');

    return html`
      <div class="input-wrapper ${classes}">
        <slot name="prefix"></slot>
        <input
          type=${this.type}
          .value=${this.value}
          placeholder=${this.placeholder}
          name=${this.name}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        ${this.clearable && this.value && !this.disabled
          ? html`<span class="clear-btn" @click=${this.handleClear}>✕</span>`
          : ''}
        <slot name="suffix"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-input': MyInput;
  }
}
