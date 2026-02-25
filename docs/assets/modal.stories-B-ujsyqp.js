import{b as S}from"./lit-element-CK6w3b3U.js";const k={title:"Components/Modal",component:"my-modal",tags:["autodocs"],argTypes:{open:{control:"boolean",description:"是否显示"},title:{control:"text",description:"标题"},width:{control:"text",description:"宽度"},maskClosable:{control:"boolean",description:"点击遮罩关闭"},footer:{control:"boolean",description:"显示底部"}},args:{open:!0,title:"标题",width:"520px",maskClosable:!0,footer:!0}},r=e=>S`
    <my-modal
      ?open="${e.open}"
      title="${e.title}"
      width="${e.width}"
      ?maskClosable="${e.maskClosable}"
      ?footer="${e.footer}"
    >
      <p>这是一个对话框内容。</p>
      <p>你可以在这里放置任何内容。</p>
    </my-modal>
  `,o={render:r},t={args:{footer:!1},render:r},a={args:{width:"360px"},render:r},s={args:{width:"800px"},render:r},n={args:{title:"自定义标题"},render:r};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderModal
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    footer: false
  },
  render: renderModal
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    width: '360px'
  },
  render: renderModal
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    width: '800px'
  },
  render: renderModal
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,C,M;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '自定义标题'
  },
  render: renderModal
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const y=["Default","NoFooter","SmallWidth","LargeWidth","CustomTitle"];export{n as CustomTitle,o as Default,s as LargeWidth,t as NoFooter,a as SmallWidth,y as __namedExportsOrder,k as default};
