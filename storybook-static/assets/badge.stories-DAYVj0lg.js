import{b as ee}from"./lit-element-CK6w3b3U.js";const oe={title:"Components/Badge",component:"my-badge",tags:["autodocs"],argTypes:{count:{control:"number",description:"徽标数量"},maxCount:{control:"number",description:"最大显示数量"},dot:{control:"boolean",description:"是否圆点"},showZero:{control:"boolean",description:"数量为0时是否显示"},color:{control:"color",description:"自定义颜色"},position:{control:"select",options:["top-left","top-center","top-right","middle-left","middle-right","bottom-left","bottom-center","bottom-right"],description:"徽标位置"},offsetX:{control:"number",description:"X轴偏移量"},offsetY:{control:"number",description:"Y轴偏移量"}},args:{count:5,maxCount:99,dot:!1,showZero:!1,color:"",position:"top-right",offsetX:0,offsetY:0}},e=r=>ee`
    <my-badge
      count="${r.count}"
      maxCount="${r.maxCount}"
      ?dot="${r.dot}"
      ?showZero="${r.showZero}"
      color="${r.color}"
      position="${r.position}"
      offsetX="${r.offsetX}"
      offsetY="${r.offsetY}"
    >
      <my-button>消息</my-button>
    </my-badge>
  `,o={render:e},t={args:{position:"top-left"},render:e},s={args:{position:"top-center"},render:e},n={args:{position:"top-right"},render:e},a={args:{position:"middle-left"},render:e},d={args:{position:"middle-right"},render:e},c={args:{position:"bottom-left"},render:e},i={args:{position:"bottom-center"},render:e},p={args:{position:"bottom-right"},render:e},m={args:{offsetX:10,offsetY:-10},render:e},g={args:{dot:!0},render:e},u={args:{color:"#10b981"},render:e},l={args:{count:100},render:e};var f,b,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: renderBadge
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,C,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: 'top-left'
  },
  render: renderBadge
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,$,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    position: 'top-center'
  },
  render: renderBadge
}`,...(T=($=s.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var X,Y,x;n.parameters={...n.parameters,docs:{...(X=n.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: renderBadge
}`,...(x=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var y,M,R;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    position: 'middle-left'
  },
  render: renderBadge
}`,...(R=(M=a.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var w,D,Z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    position: 'middle-right'
  },
  render: renderBadge
}`,...(Z=(D=d.parameters)==null?void 0:D.docs)==null?void 0:Z.source}}};var O,W,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    position: 'bottom-left'
  },
  render: renderBadge
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,j,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    position: 'bottom-center'
  },
  render: renderBadge
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,v,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right'
  },
  render: renderBadge
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var A,F,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    offsetX: 10,
    offsetY: -10
  },
  render: renderBadge
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,I,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    dot: true
  },
  render: renderBadge
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,N,P;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    color: '#10b981'
  },
  render: renderBadge
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var Q,U,V;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    count: 100
  },
  render: renderBadge
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const te=["Default","TopLeft","TopCenter","TopRight","MiddleLeft","MiddleRight","BottomLeft","BottomCenter","BottomRight","WithOffset","DotMode","CustomColor","LargeCount"];export{i as BottomCenter,c as BottomLeft,p as BottomRight,u as CustomColor,o as Default,g as DotMode,l as LargeCount,a as MiddleLeft,d as MiddleRight,s as TopCenter,t as TopLeft,n as TopRight,m as WithOffset,te as __namedExportsOrder,oe as default};
