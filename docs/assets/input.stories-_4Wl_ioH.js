import{b as U}from"./lit-element-CK6w3b3U.js";const Y={title:"Components/Input",component:"my-input",tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number","tel","url"],description:"输入框类型"},placeholder:{control:"text",description:"占位符"},value:{control:"text",description:"输入框值"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},clearable:{control:"boolean",description:"是否可清除"},error:{control:"boolean",description:"是否有错误"},errorMessage:{control:"text",description:"错误信息"},size:{control:"select",options:["sm","md","lg"],description:"输入框尺寸"},prefix:{control:"text",description:"前缀"},suffix:{control:"text",description:"后缀"}},args:{type:"text",placeholder:"请输入...",value:"",disabled:!1,readonly:!1,clearable:!1,error:!1,errorMessage:"",size:"md",prefix:"",suffix:""}},e=r=>U`
    <my-input
      type="${r.type}"
      placeholder="${r.placeholder}"
      value="${r.value}"
      ?disabled="${r.disabled}"
      ?readonly="${r.readonly}"
      ?clearable="${r.clearable}"
      ?error="${r.error}"
      errorMessage="${r.errorMessage}"
      size="${r.size}"
      prefix="${r.prefix}"
      suffix="${r.suffix}"
    ></my-input>
  `,a={render:e},s={args:{placeholder:"请输入文本"},render:e},o={args:{value:"Hello World"},render:e},n={args:{type:"password",placeholder:"请输入密码"},render:e},t={args:{disabled:!0,value:"禁用输入框"},render:e},c={args:{readonly:!0,value:"只读输入框"},render:e},l={args:{clearable:!0,value:"可清除的输入框"},render:e},d={args:{error:!0,errorMessage:"请输入正确的内容"},render:e},p={args:{size:"sm",placeholder:"小号输入框"},render:e},i={args:{size:"lg",placeholder:"大号输入框"},render:e},u={args:{prefix:"https://",placeholder:"example.com"},render:e},m={args:{suffix:"@gmail.com",placeholder:"user"},render:e};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: renderInput
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入文本'
  },
  render: renderInput
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,I,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'Hello World'
  },
  render: renderInput
}`,...(v=(I=o.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var W,$,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: '请输入密码'
  },
  render: renderInput
}`,...(z=($=n.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var M,P,w;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '禁用输入框'
  },
  render: renderInput
}`,...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,C,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    readonly: true,
    value: '只读输入框'
  },
  render: renderInput
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var H,L,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    clearable: true,
    value: '可清除的输入框'
  },
  render: renderInput
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var V,_,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: '请输入正确的内容'
  },
  render: renderInput
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var T,j,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: '小号输入框'
  },
  render: renderInput
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,A,B;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: '大号输入框'
  },
  render: renderInput
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,G,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prefix: 'https://',
    placeholder: 'example.com'
  },
  render: renderInput
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    suffix: '@gmail.com',
    placeholder: 'user'
  },
  render: renderInput
}`,...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const Z=["Default","WithPlaceholder","WithValue","Password","Disabled","Readonly","Clearable","WithError","Small","Large","WithPrefix","WithSuffix"];export{l as Clearable,a as Default,t as Disabled,i as Large,n as Password,c as Readonly,p as Small,d as WithError,s as WithPlaceholder,u as WithPrefix,m as WithSuffix,o as WithValue,Z as __namedExportsOrder,Y as default};
