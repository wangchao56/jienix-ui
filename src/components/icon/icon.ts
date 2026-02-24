/**
 * Icon 图标组件
 * 内置常用图标，支持自定义 SVG
 */

import { html, css, CSSResultGroup, unsafeSVG } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from '../base';

// 内置图标库
const icons: Record<string, string> = {
  check: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
  close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
  search: '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  plus: '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
  minus: '<path d="M19 13H5v-2h14v2z"/>',
  arrowLeft: '<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>',
  arrowRight: '<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>',
  arrowUp: '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>',
  arrowDown: '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>',
  user: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
  settings: '<path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>',
  loading: '<path d="M12 4V2C6.48 2 2 6.48 2 12h2c0-4.42 3.58-8 8-8z"/>',
  info: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
  warning: '<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',
  error: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
  success: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
};

@customElement('my-icon')
export class MyIcon extends BaseElement {
  @property({ type: String }) name = '';
  @property({ type: String }) svg = '';
  @property({ type: String }) override size: 'sm' | 'md' | 'lg' | string = 'md';
  @property({ type: String }) color = 'currentColor';

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      svg {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        vertical-align: middle;
      }

      :host([size="sm"]) svg { font-size: 14px; }
      :host([size="md"]) svg { font-size: 18px; }
      :host([size="lg"]) svg { font-size: 24px; }
    `,
  ];

  private getSvgContent(): string {
    if (this.svg) {
      return this.svg;
    }
    if (this.name && icons[this.name]) {
      return icons[this.name];
    }
    return '';
  }

  override render() {
    const content = this.getSvgContent();
    if (!content) {
      return html``;
    }

    const sizeStyle = this.size.endsWith('px') || this.size.endsWith('rem') || this.size.endsWith('em')
      ? this.size
      : undefined;

    return html`
      <svg
        viewBox="0 0 24 24"
        style=${sizeStyle ? `font-size: ${sizeStyle}; color: ${this.color}` : `color: ${this.color}`}
      >
        ${unsafeSVG(content)}
      </svg>
    `;
  }

  // 注册新图标
  static registerIcon(name: string, svgPath: string) {
    icons[name] = svgPath;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-icon': MyIcon;
  }
}
