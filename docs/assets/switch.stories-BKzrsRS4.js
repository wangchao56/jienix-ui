import{b as D}from"./lit-element-CK6w3b3U.js";const C={title:"Components/Switch",component:"my-switch",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"是否开启"},disabled:{control:"boolean",description:"是否禁用"},size:{control:"select",options:["sm","md","lg"],description:"尺寸"},checkedText:{control:"text",description:"开启时的文本"},uncheckedText:{control:"text",description:"关闭时的文本"}},args:{checked:!1,disabled:!1,size:"md",checkedText:"",uncheckedText:""}},e=r=>D`
    <my-switch
      ?checked="${r.checked}"
      ?disabled="${r.disabled}"
      size="${r.size}"
      checkedText="${r.checkedText}"
      uncheckedText="${r.uncheckedText}"
    ></my-switch>
  `,c={render:e},s={args:{checked:!0},render:e},t={args:{disabled:!0},render:e},a={args:{size:"sm"},render:e},n={args:{size:"lg"},render:e},d={args:{checkedText:"开",uncheckedText:"关"},render:e};var o,i,m;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: renderSwitch
}`,...(m=(i=c.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true
  },
  render: renderSwitch
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: renderSwitch
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var x,S,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: renderSwitch
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,w,z;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: renderSwitch
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var f,$,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checkedText: '开',
    uncheckedText: '关'
  },
  render: renderSwitch
}`,...(y=($=d.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const W=["Default","Checked","Disabled","Small","Large","WithLabel"];export{s as Checked,c as Default,t as Disabled,n as Large,a as Small,d as WithLabel,W as __namedExportsOrder,C as default};
