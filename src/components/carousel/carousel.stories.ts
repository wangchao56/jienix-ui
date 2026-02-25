import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Carousel',
  component: 'my-carousel',
  tags: ['autodocs'],
  argTypes: {
    activeIndex: { control: 'number', description: '当前激活的幻灯片索引' },
    autoplay: { control: 'boolean', description: '是否自动播放' },
    interval: { control: 'number', description: '自动播放间隔（毫秒）' },
    dots: { control: 'boolean', description: '是否显示导航点' },
    arrows: { control: 'boolean', description: '是否显示左右箭头' },
    loop: { control: 'boolean', description: '是否循环播放' },
    effect: { control: 'select', options: ['slide', 'fade'], description: '动画效果' },
    height: { control: 'text', description: '轮播图高度' },
  },
  args: {
    activeIndex: 0,
    autoplay: false,
    interval: 3000,
    dots: true,
    arrows: true,
    loop: true,
    effect: 'slide',
    height: '400px',
  },
};

export default meta;
type Story = StoryObj;

const renderCarousel = (args: any) => {
  return html`
    <my-carousel
      ?autoplay="${args.autoplay}"
      interval="${args.interval}"
      ?dots="${args.dots}"
      ?arrows="${args.arrows}"
      ?loop="${args.loop}"
      effect="${args.effect}"
      height="${args.height}"
    >
      <div class="carousel-item" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div class="content">
          <h2 style="margin: 0; font-size: 32px;">Slide 1</h2>
          <p style="margin: 8px 0 0;">这是一个轮播图组件</p>
        </div>
      </div>
      <div class="carousel-item" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
        <div class="content">
          <h2 style="margin: 0; font-size: 32px;">Slide 2</h2>
          <p style="margin: 8px 0 0;">支持自动播放和手动切换</p>
        </div>
      </div>
      <div class="carousel-item" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
        <div class="content">
          <h2 style="margin: 0; font-size: 32px;">Slide 3</h2>
          <p style="margin: 8px 0 0;">多种动画效果可选</p>
        </div>
      </div>
    </my-carousel>
  `;
};

export const Default: Story = {
  render: renderCarousel,
};

export const Autoplay: Story = {
  args: { autoplay: true, interval: 2000 },
  render: renderCarousel,
};

export const WithoutDots: Story = {
  args: { dots: false },
  render: renderCarousel,
};

export const WithoutArrows: Story = {
  args: { arrows: false },
  render: renderCarousel,
};

export const NoLoop: Story = {
  args: { loop: false },
  render: renderCarousel,
};

export const FadeEffect: Story = {
  args: { effect: 'fade' },
  render: renderCarousel,
};

export const CustomHeight: Story = {
  args: { height: '300px' },
  render: renderCarousel,
};

export const SmallSize: Story = {
  args: { height: '200px' },
  render: () => html`
    <my-carousel height="200px" arrows dots>
      <div class="carousel-item" style="background: #1f2937; color: white; display: flex; align-items: center; justify-content: center;">
        <span>Small Carousel - Slide 1</span>
      </div>
      <div class="carousel-item" style="background: #374151; color: white; display: flex; align-items: center; justify-content: center;">
        <span>Small Carousel - Slide 2</span>
      </div>
      <div class="carousel-item" style="background: #4b5563; color: white; display: flex; align-items: center; justify-content: center;">
        <span>Small Carousel - Slide 3</span>
      </div>
    </my-carousel>
  `,
};

export const LargeSize: Story = {
  args: { height: '500px' },
  render: () => html`
    <my-carousel height="500px" arrows dots loop>
      <div class="carousel-item" style="background: linear-gradient(45deg, #1f2937, #374151); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px;">
        Large Carousel - Slide 1
      </div>
      <div class="carousel-item" style="background: linear-gradient(45deg, #374151, #4b5563); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px;">
        Large Carousel - Slide 2
      </div>
      <div class="carousel-item" style="background: linear-gradient(45deg, #4b5563, #6b7280); color: white; display: flex; align-items: center; justify-content: center; font-size: 24px;">
        Large Carousel - Slide 3
      </div>
    </my-carousel>
  `,
};

export const WithImages: Story = {
  render: () => html`
    <my-carousel height="400px" arrows dots loop>
      <div class="carousel-item">
        <img src="https://picsum.photos/800/400?random=1" alt="Slide 1" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/800/400?random=2" alt="Slide 2" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/800/400?random=3" alt="Slide 3" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
    </my-carousel>
  `,
};
