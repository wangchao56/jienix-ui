import{b as i}from"./lit-element-CK6w3b3U.js";const N={title:"Components/Tag",component:"my-tag",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","filled"],description:"样式变体"},size:{control:"select",options:["sm","md"],description:"尺寸"},closable:{control:"boolean",description:"是否可关闭"},color:{control:"color",description:"自定义颜色"}},args:{variant:"default",size:"md",closable:!1,color:""}},a=r=>i`
    <my-tag
      variant="${r.variant}"
      size="${r.size}"
      ?closable="${r.closable}"
      color="${r.color}"
    >
      Tag
    </my-tag>
  `,e={render:a},o={args:{variant:"outline"},render:a},t={args:{variant:"filled"},render:a},s={args:{size:"sm"},render:a},n={args:{size:"md"},render:a},l={args:{closable:!0},render:a},m={args:{color:"#10b981"},render:a},c={render:()=>i`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag>标签一</my-tag>
      <my-tag variant="outline">标签二</my-tag>
      <my-tag variant="filled">标签三</my-tag>
      <my-tag color="#10b981">成功</my-tag>
      <my-tag color="#f59e0b">警告</my-tag>
      <my-tag color="#ef4444">错误</my-tag>
    </div>
  `},g={render:()=>i`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag closable>可关闭</my-tag>
      <my-tag closable variant="outline">可关闭</my-tag>
      <my-tag closable variant="filled">可关闭</my-tag>
    </div>
  `},d={render:()=>i`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag color="#1f2937">黑色</my-tag>
      <my-tag color="#6b7280">灰色</my-tag>
      <my-tag color="#10b981">绿色</my-tag>
      <my-tag color="#3b82f6">蓝色</my-tag>
      <my-tag color="#f59e0b">黄色</my-tag>
      <my-tag color="#ef4444">红色</my-tag>
      <my-tag color="#8b5cf6">紫色</my-tag>
      <my-tag color="#ec4899">粉色</my-tag>
    </div>
  `};var p,y,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: renderTag
}`,...(u=(y=e.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var f,b,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: renderTag
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,T,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  },
  render: renderTag
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var S,C,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: renderTag
}`,...(z=(C=s.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var G,$,h;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: renderTag
}`,...(h=($=n.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var O,D,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    closable: true
  },
  render: renderTag
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var L,_,E;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: '#10b981'
  },
  render: renderTag
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var j,k,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag>标签一</my-tag>
      <my-tag variant="outline">标签二</my-tag>
      <my-tag variant="filled">标签三</my-tag>
      <my-tag color="#10b981">成功</my-tag>
      <my-tag color="#f59e0b">警告</my-tag>
      <my-tag color="#ef4444">错误</my-tag>
    </div>
  \`
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var A,B,H;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag closable>可关闭</my-tag>
      <my-tag closable variant="outline">可关闭</my-tag>
      <my-tag closable variant="filled">可关闭</my-tag>
    </div>
  \`
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,J,K;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <my-tag color="#1f2937">黑色</my-tag>
      <my-tag color="#6b7280">灰色</my-tag>
      <my-tag color="#10b981">绿色</my-tag>
      <my-tag color="#3b82f6">蓝色</my-tag>
      <my-tag color="#f59e0b">黄色</my-tag>
      <my-tag color="#ef4444">红色</my-tag>
      <my-tag color="#8b5cf6">紫色</my-tag>
      <my-tag color="#ec4899">粉色</my-tag>
    </div>
  \`
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const P=["Default","Outline","Filled","Small","Large","Closable","CustomColor","TagGroup","ClosableGroup","ColorTags"];export{l as Closable,g as ClosableGroup,d as ColorTags,m as CustomColor,e as Default,t as Filled,n as Large,o as Outline,s as Small,c as TagGroup,P as __namedExportsOrder,N as default};
