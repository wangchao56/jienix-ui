/**
 * Modal 对话框组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-modal')
export class MyModal extends BaseElement {
  @property({ type: Boolean, attribute: 'open' }) open = false;
  @property({ type: String }) title = '';
  @property({ type: Boolean }) maskClosable = true;
  @property({ type: Boolean }) footer = true;
  @property({ type: String }) width = '520px';

  @state() private _closing = false;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: block; }

      .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1000;
      }

      .modal-mask.open {
        opacity: 1;
        visibility: visible;
      }

      .modal-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        background: var(--color-background);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1001;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-container.open {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%) scale(1);
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--color-border);
      }

      .modal-title {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text);
        margin: 0;
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        color: var(--color-text-tertiary);
        transition: all var(--transition-fast);
      }

      .modal-close:hover {
        background: var(--color-background-hover);
        color: var(--color-text);
      }

      .modal-body {
        padding: var(--spacing-lg);
        overflow-y: auto;
        flex: 1;
      }

      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-sm);
        padding: var(--spacing-lg);
        border-top: 1px solid var(--color-border);
      }
    `,
  ];

  private handleMaskClick() {
    if (this.maskClosable) {
      this.close();
    }
  }

  public openModal() {
    this.open = true;
    this.emit('open');
  }

  public close() {
    this.open = false;
    this.emit('close');
  }

  override render() {
    return html`
      <div class="modal-mask ${this.open ? 'open' : ''}" @click=${this.handleMaskClick}></div>
      <div class="modal-container ${this.open ? 'open' : ''}" style="width: ${this.width};">
        <div class="modal-header">
          <h3 class="modal-title">${this.title}</h3>
          <div class="modal-close" @click=${this.close}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </div>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        ${this.footer ? html`
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-modal': MyModal; }
}
