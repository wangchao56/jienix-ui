import{b as z}from"./lit-element-CK6w3b3U.js";const y={title:"Components/Checkbox",component:"my-checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"是否选中"},disabled:{control:"boolean",description:"是否禁用"},indeterminate:{control:"boolean",description:"是否为不确定状态"},label:{control:"text",description:"标签文本"},size:{control:"select",options:["sm","md"],description:"尺寸"}},args:{checked:!1,disabled:!1,indeterminate:!1,label:"复选框",size:"md"}},r=e=>z`
    <my-checkbox
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?indeterminate="${e.indeterminate}"
      label="${e.label}"
      size="${e.size}"
    ></my-checkbox>
  `,a={render:r},n={args:{checked:!0,label:"已选中"},render:r},s={args:{disabled:!0,label:"禁用"},render:r},o={args:{indeterminate:!0,label:"不确定状态"},render:r},c={args:{size:"sm",label:"小号"},render:r};var t,d,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: renderCheckbox
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,m,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '已选中'
  },
  render: renderCheckbox
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: '禁用'
  },
  render: renderCheckbox
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,x,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: '不确定状态'
  },
  render: renderCheckbox
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,f,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: '小号'
  },
  render: renderCheckbox
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const D=["Default","Checked","Disabled","Indeterminate","Small"];export{n as Checked,a as Default,s as Disabled,o as Indeterminate,c as Small,D as __namedExportsOrder,y as default};
