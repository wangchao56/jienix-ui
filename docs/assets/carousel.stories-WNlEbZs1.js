import{b as u}from"./lit-element-CK6w3b3U.js";const K={title:"Components/Carousel",component:"my-carousel",tags:["autodocs"],argTypes:{activeIndex:{control:"number",description:"当前激活的幻灯片索引"},autoplay:{control:"boolean",description:"是否自动播放"},interval:{control:"number",description:"自动播放间隔（毫秒）"},dots:{control:"boolean",description:"是否显示导航点"},arrows:{control:"boolean",description:"是否显示左右箭头"},loop:{control:"boolean",description:"是否循环播放"},effect:{control:"select",options:["slide","fade"],description:"动画效果"},height:{control:"text",description:"轮播图高度"}},args:{activeIndex:0,autoplay:!1,interval:3e3,dots:!0,arrows:!0,loop:!0,effect:"slide",height:"400px"}},r=e=>u`
    <my-carousel
      ?autoplay="${e.autoplay}"
      interval="${e.interval}"
      ?dots="${e.dots}"
      ?arrows="${e.arrows}"
      ?loop="${e.loop}"
      effect="${e.effect}"
      height="${e.height}"
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
  `,s={render:r},t={args:{autoplay:!0,interval:2e3},render:r},a={args:{dots:!1},render:r},o={args:{arrows:!1},render:r},n={args:{loop:!1},render:r},i={args:{effect:"fade"},render:r},l={args:{height:"300px"},render:r},c={args:{height:"200px"},render:()=>u`
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
  `},d={args:{height:"500px"},render:()=>u`
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
  `},p={render:()=>u`
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
  `};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderCarousel
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    interval: 2000
  },
  render: renderCarousel
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,x,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dots: false
  },
  render: renderCarousel
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,C,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    arrows: false
  },
  render: renderCarousel
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,z,L;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    loop: false
  },
  render: renderCarousel
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var $,W,A;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    effect: 'fade'
  },
  render: renderCarousel
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,I,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    height: '300px'
  },
  render: renderCarousel
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,H,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    height: '200px'
  },
  render: () => html\`
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
  \`
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,O,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    height: '500px'
  },
  render: () => html\`
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
  \`
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,B,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => html\`
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
  \`
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const M=["Default","Autoplay","WithoutDots","WithoutArrows","NoLoop","FadeEffect","CustomHeight","SmallSize","LargeSize","WithImages"];export{t as Autoplay,l as CustomHeight,s as Default,i as FadeEffect,d as LargeSize,n as NoLoop,c as SmallSize,p as WithImages,o as WithoutArrows,a as WithoutDots,M as __namedExportsOrder,K as default};
