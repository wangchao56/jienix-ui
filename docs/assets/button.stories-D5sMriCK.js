import{b as p}from"./lit-element-CK6w3b3U.js";const Q={title:"Components/Button",component:"my-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"按钮变体"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"按钮尺寸"},disabled:{control:"boolean",description:"是否禁用"},loading:{control:"boolean",description:"是否加载中"},block:{control:"boolean",description:"是否块级按钮"},shape:{control:"select",options:["default","round","circle"],description:"按钮形状"}},args:{variant:"primary",size:"md",disabled:!1,loading:!1,block:!1,shape:"default"}},e=r=>p`
    <my-button
      variant="${r.variant}"
      size="${r.size}"
      ?disabled="${r.disabled}"
      ?loading="${r.loading}"
      ?block="${r.block}"
      shape="${r.shape}"
    >
      ${r.variant} Button
    </my-button>
  `,t={render:e},n={args:{variant:"primary"},render:e},a={args:{variant:"secondary"},render:e},o={args:{variant:"outline"},render:e},s={args:{variant:"ghost"},render:e},d={args:{variant:"danger"},render:e},i={render:()=>p`
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <my-button size="xs">Extra Small</my-button>
      <my-button size="sm">Small</my-button>
      <my-button size="md">Medium</my-button>
      <my-button size="lg">Large</my-button>
      <my-button size="xl">Extra Large</my-button>
    </div>
  `},c={args:{loading:!0},render:e},u={args:{disabled:!0},render:e},m={args:{block:!0},render:e},l={render:()=>p`
    <div style="display: flex; align-items: center; gap: 12px;">
      <my-button shape="default">Default</my-button>
      <my-button shape="round">Round</my-button>
      <my-button shape="circle">+</my-button>
    </div>
  `};var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: renderButton
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,S,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: renderButton
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,h,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: renderButton
}`,...(z=(h=a.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var B,k,D;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: renderButton
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var $,L,_;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: renderButton
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var E,O,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: renderButton
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var P,M,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <my-button size="xs">Extra Small</my-button>
      <my-button size="sm">Small</my-button>
      <my-button size="md">Medium</my-button>
      <my-button size="lg">Large</my-button>
      <my-button size="xl">Extra Large</my-button>
    </div>
  \`
}`,...(j=(M=i.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var G,R,T;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: renderButton
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var C,q,A;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: renderButton
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,H,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: renderButton
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,N;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; align-items: center; gap: 12px;">
      <my-button shape="default">Default</my-button>
      <my-button shape="round">Round</my-button>
      <my-button shape="circle">+</my-button>
    </div>
  \`
}`,...(N=(K=l.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const U=["Default","Primary","Secondary","Outline","Ghost","Danger","Sizes","Loading","Disabled","Block","Shapes"],W=Object.freeze(Object.defineProperty({__proto__:null,Block:m,Danger:d,Default:t,Disabled:u,Ghost:s,Loading:c,Outline:o,Primary:n,Secondary:a,Shapes:l,Sizes:i,__namedExportsOrder:U,default:Q},Symbol.toStringTag,{value:"Module"}));export{W as B,n as P};
