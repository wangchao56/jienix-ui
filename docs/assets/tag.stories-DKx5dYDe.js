import{b as E}from"./lit-element-CK6w3b3U.js";const j={title:"Components/Tag",component:"my-tag",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","filled"],description:"样式变体"},size:{control:"select",options:["sm","md"],description:"尺寸"},closable:{control:"boolean",description:"是否可关闭"},color:{control:"color",description:"自定义颜色"}},args:{variant:"default",size:"md",closable:!1,color:""}},r=e=>E`
    <my-tag
      variant="${e.variant}"
      size="${e.size}"
      ?closable="${e.closable}"
      color="${e.color}"
    >
      Tag
    </my-tag>
  `,a={render:r},s={args:{variant:"outline"},render:r},o={args:{variant:"filled"},render:r},n={args:{size:"sm"},render:r},t={args:{size:"md"},render:r},c={args:{closable:!0},render:r},l={args:{color:"#10b981"},render:r};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderTag
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: renderTag
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,T,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  },
  render: renderTag
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,v,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: renderTag
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var C,y,$;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: renderTag
}`,...($=(y=t.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var O,x,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    closable: true
  },
  render: renderTag
}`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var F,L,_;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: '#10b981'
  },
  render: renderTag
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const k=["Default","Outline","Filled","Small","Large","Closable","CustomColor"];export{c as Closable,l as CustomColor,a as Default,o as Filled,t as Large,s as Outline,n as Small,k as __namedExportsOrder,j as default};
