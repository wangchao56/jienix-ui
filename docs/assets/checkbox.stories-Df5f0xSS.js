import{b as i}from"./lit-element-CK6w3b3U.js";const w={title:"Components/Checkbox",component:"my-checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"是否选中"},disabled:{control:"boolean",description:"是否禁用"},indeterminate:{control:"boolean",description:"是否为不确定状态"},label:{control:"text",description:"标签文本"},size:{control:"select",options:["sm","md"],description:"尺寸"}},args:{checked:!1,disabled:!1,indeterminate:!1,label:"复选框",size:"md"}},e=r=>i`
    <my-checkbox
      ?checked="${r.checked}"
      ?disabled="${r.disabled}"
      ?indeterminate="${r.indeterminate}"
      label="${r.label}"
      size="${r.size}"
    ></my-checkbox>
  `,c={render:e},a={args:{checked:!0,label:"已选中"},render:e},o={args:{disabled:!0,label:"禁用"},render:e},s={args:{indeterminate:!0,label:"不确定状态"},render:e},n={args:{size:"sm",label:"小号"},render:e},d={args:{size:"md",label:"中号"},render:e},l={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <my-checkbox label="选项一" checked></my-checkbox>
      <my-checkbox label="选项二"></my-checkbox>
      <my-checkbox label="选项三"></my-checkbox>
    </div>
  `},t={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <my-checkbox label="禁用选项" disabled checked></my-checkbox>
      <my-checkbox label="禁用选项" disabled></my-checkbox>
    </div>
  `};var m,b,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderCheckbox
}`,...(p=(b=c.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var x,h,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: '已选中'
  },
  render: renderCheckbox
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var u,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: '禁用'
  },
  render: renderCheckbox
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,C,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: '不确定状态'
  },
  render: renderCheckbox
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,z,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: '小号'
  },
  render: renderCheckbox
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var $,G,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: '中号'
  },
  render: renderCheckbox
}`,...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var M,_,E;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <my-checkbox label="选项一" checked></my-checkbox>
      <my-checkbox label="选项二"></my-checkbox>
      <my-checkbox label="选项三"></my-checkbox>
    </div>
  \`
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,T,j;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <my-checkbox label="禁用选项" disabled checked></my-checkbox>
      <my-checkbox label="禁用选项" disabled></my-checkbox>
    </div>
  \`
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const A=["Default","Checked","Disabled","Indeterminate","Small","Medium","CheckboxGroup","DisabledGroup"];export{l as CheckboxGroup,a as Checked,c as Default,o as Disabled,t as DisabledGroup,s as Indeterminate,d as Medium,n as Small,A as __namedExportsOrder,w as default};
