import{b as r}from"./lit-element-CK6w3b3U.js";const H={title:"Components/Card",component:"my-card",tags:["autodocs"],argTypes:{bordered:{control:"boolean",description:"是否显示边框"},hoverable:{control:"boolean",description:"是否可悬停"},padding:{control:"select",options:["none","sm","md","lg"],description:"内边距"}},args:{bordered:!0,hoverable:!1,padding:"md"},render:d=>r`
      <my-card
        ?bordered="${d.bordered}"
        ?hoverable="${d.hoverable}"
        padding="${d.padding}"
      >
        <div style="color: var(--color-text);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片标题</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
            这是卡片的内容区域，可以放置任何内容。
          </p>
        </div>
      </my-card>
    `},e={render:()=>r`
    <my-card>
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片标题</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          这是卡片的内容区域。
        </p>
      </div>
    </my-card>
  `},o={render:()=>r`
    <my-card>
      <div slot="header" style="font-weight: 600; font-size: 16px;">卡片标题</div>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
    </my-card>
  `},t={render:()=>r`
    <my-card>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
      <div slot="footer" style="display: flex; gap: 8px;">
        <my-button size="sm">取消</my-button>
        <my-button size="sm" variant="primary">确定</my-button>
      </div>
    </my-card>
  `},n={render:()=>r`
    <my-card hoverable style="max-width: 300px;">
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">悬停卡片</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          鼠标悬停时会显示阴影效果。
        </p>
      </div>
    </my-card>
  `},a={render:()=>r`
    <div style="background: var(--color-background-secondary); padding: 24px;">
      <my-card .bordered=${!1}>
        <div style="color: var(--color-text);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">无边框卡片</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
            适合在彩色背景上使用。
          </p>
        </div>
      </my-card>
    </div>
  `},s={render:()=>r`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 1</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 2</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 3</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
    </div>
  `};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <my-card>
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片标题</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          这是卡片的内容区域。
        </p>
      </div>
    </my-card>
  \`
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <my-card>
      <div slot="header" style="font-weight: 600; font-size: 16px;">卡片标题</div>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
    </my-card>
  \`
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var x,v,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <my-card>
      <div style="color: var(--color-text-secondary); font-size: 14px;">
        这是卡片的内容区域。
      </div>
      <div slot="footer" style="display: flex; gap: 8px;">
        <my-button size="sm">取消</my-button>
        <my-button size="sm" variant="primary">确定</my-button>
      </div>
    </my-card>
  \`
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,f,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <my-card hoverable style="max-width: 300px;">
      <div style="color: var(--color-text);">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">悬停卡片</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
          鼠标悬停时会显示阴影效果。
        </p>
      </div>
    </my-card>
  \`
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var z,b,w;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="background: var(--color-background-secondary); padding: 24px;">
      <my-card .bordered=\${false}>
        <div style="color: var(--color-text);">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">无边框卡片</h3>
          <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">
            适合在彩色背景上使用。
          </p>
        </div>
      </my-card>
    </div>
  \`
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,$,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 1</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 2</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
      <my-card hoverable>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">卡片 3</h3>
        <p style="margin: 0; color: var(--color-text-secondary); font-size: 14px;">卡片内容</p>
      </my-card>
    </div>
  \`
}`,...(k=($=s.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const W=["Default","WithHeader","WithFooter","Hoverable","NoBorder","CardGrid"];export{s as CardGrid,e as Default,n as Hoverable,a as NoBorder,t as WithFooter,o as WithHeader,W as __namedExportsOrder,H as default};
