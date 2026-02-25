/**
 * Carousel 轮播图组件 - 黑白灰系配色
 */

import { html, css, CSSResultGroup } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { BaseElement } from '../base';

@customElement('my-carousel')
export class MyCarousel extends BaseElement {
  /** 当前激活的幻灯片索引 */
  @property({ type: Number }) activeIndex = 0;
  /** 是否自动播放 */
  @property({ type: Boolean }) autoplay = false;
  /** 自动播放间隔（毫秒） */
  @property({ type: Number }) interval = 3000;
  /** 是否显示导航点 */
  @property({ type: Boolean }) dots = true;
  /** 是否显示左右箭头 */
  @property({ type: Boolean }) arrows = true;
  /** 是否循环播放 */
  @property({ type: Boolean }) loop = true;
  /** 动画效果: slide | fade */
  @property({ type: String }) effect: 'slide' | 'fade' = 'slide';
  /** 高度 */
  @property({ type: String }) height = '400px';

  @state() private _items: HTMLElement[] = [];
  @state() private _isHovering = false;
  private _autoplayTimer?: number;

  @query('.carousel-track') private _track!: HTMLElement;

  static override styles: CSSResultGroup = [
    ...BaseElement.styles,
    css`
      :host { display: block; position: relative; overflow: hidden; }

      .carousel-container {
        position: relative;
        width: 100%;
        height: var(--carousel-height, 400px);
        overflow: hidden;
        border-radius: var(--radius-lg);
        background: var(--color-background-secondary);
      }

      .carousel-track {
        display: flex;
        height: 100%;
        transition: transform var(--transition-slow);
      }

      .carousel-track.fade {
        transition: opacity var(--transition-slow);
      }

      .carousel-item {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }

      .carousel-item.fade {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--transition-slow);
      }

      .carousel-item.fade.active {
        opacity: 1;
        pointer-events: auto;
      }

      .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .carousel-item .content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: var(--spacing-xl);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
        color: white;
      }

      /* 导航箭头 */
      .carousel-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        color: var(--color-text);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all var(--transition-fast);
        z-index: 10;
        opacity: 0;
        box-shadow: var(--shadow-md);
      }

      .carousel-arrow:hover {
        background: white;
        transform: translateY(-50%) scale(1.1);
      }

      .carousel-arrow.prev { left: var(--spacing-md); }
      .carousel-arrow.next { right: var(--spacing-md); }

      .carousel-container:hover .carousel-arrow {
        opacity: 1;
      }

      .carousel-arrow svg {
        width: 20px;
        height: 20px;
      }

      /* 导航点 */
      .carousel-dots {
        position: absolute;
        bottom: var(--spacing-md);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: var(--spacing-sm);
        z-index: 10;
        padding: var(--spacing-sm) var(--spacing-md);
        background: rgba(0, 0, 0, 0.4);
        border-radius: var(--radius-full);
      }

      .carousel-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all var(--transition-fast);
        padding: 0;
      }

      .carousel-dot:hover {
        background: rgba(255, 255, 255, 0.8);
      }

      .carousel-dot.active {
        background: white;
        transform: scale(1.25);
      }

      /* 隐藏式箭头容器 */
      .arrow-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    `,
  ];

  override connectedCallback(): void {
    super.connectedCallback();
    this._updateItems();
    this._startAutoplay();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopAutoplay();
  }

  override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('activeIndex')) {
      this._goToSlide(this.activeIndex);
    }
    if (changedProperties.has('autoplay')) {
      if (this.autoplay) {
        this._startAutoplay();
      } else {
        this._stopAutoplay();
      }
    }
  }

  private _updateItems(): void {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      this._items = Array.from(slot.assignedElements()).filter(
        (el): el is HTMLElement => el instanceof HTMLElement
      ) as HTMLElement[];
    }
  }

  private _startAutoplay(): void {
    if (this.autoplay && !this._autoplayTimer) {
      this._autoplayTimer = window.setInterval(() => {
        if (!this._isHovering) {
          this.next();
        }
      }, this.interval);
    }
  }

  private _stopAutoplay(): void {
    if (this._autoplayTimer) {
      clearInterval(this._autoplayTimer);
      this._autoplayTimer = undefined;
    }
  }

  private _goToSlide(index: number): void {
    if (this.effect === 'slide' && this._track) {
      this._track.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  /** 切换到下一张 */
  public next(): void {
    const nextIndex = this.loop
      ? (this.activeIndex + 1) % this._items.length
      : Math.min(this.activeIndex + 1, this._items.length - 1);
    
    if (nextIndex !== this.activeIndex || this.loop) {
      this.activeIndex = nextIndex;
      this.emit('change', { index: this.activeIndex });
    }
  }

  /** 切换到上一张 */
  public prev(): void {
    const prevIndex = this.loop
      ? (this.activeIndex - 1 + this._items.length) % this._items.length
      : Math.max(this.activeIndex - 1, 0);
    
    if (prevIndex !== this.activeIndex || this.loop) {
      this.activeIndex = prevIndex;
      this.emit('change', { index: this.activeIndex });
    }
  }

  /** 跳转到指定索引 */
  public goTo(index: number): void {
    if (index >= 0 && index < this._items.length) {
      this.activeIndex = index;
      this.emit('change', { index: this.activeIndex });
    }
  }

  private _handleMouseEnter(): void {
    this._isHovering = true;
  }

  private _handleMouseLeave(): void {
    this._isHovering = false;
  }

  private _handleDotClick(index: number): void {
    this.goTo(index);
  }

  override render() {
    return html`
      <div 
        class="carousel-container" 
        style="--carousel-height: ${this.height}"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
      >
        <!-- 箭头导航 -->
        ${this.arrows ? html`
          <button class="carousel-arrow prev" @click=${this.prev} aria-label="Previous">
            <span class="arrow-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </span>
          </button>
          <button class="carousel-arrow next" @click=${this.next} aria-label="Next">
            <span class="arrow-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        ` : ''}

        <!-- 幻灯片 -->
        <div class="carousel-track ${this.effect}">
          <slot @slotchange=${this._updateItems}></slot>
        </div>

        <!-- 导航点 -->
        ${this.dots ? html`
          <div class="carousel-dots">
            ${this._items.map((_, index) => html`
              <button
                class="carousel-dot ${index === this.activeIndex ? 'active' : ''}"
                @click=${() => this._handleDotClick(index)}
                aria-label="Go to slide ${index + 1}"
              ></button>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'my-carousel': MyCarousel; }
}
