import{f as A,u as U,i as q,r as N,a as v,b as c,A as I,E as Y}from"./lit-element-CK6w3b3U.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:A},R=(e=F,t,o)=>{const{kind:s,metadata:r}=o;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),s==="accessor"){const{name:l}=o;return{set(u){const B=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,B,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(s==="setter"){const{name:l}=o;return function(u){const B=this[l];t.call(this,u),this.requestUpdate(l,B,e,!0,u)}}throw Error("Unsupported decorator location: "+s)};function a(e){return(t,o)=>typeof o=="object"?R(e,t,o):((s,r,n)=>{const l=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),l?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(e){return a({...e,state:!0,attribute:!1})}const i={color:{primary:"#1f2937",primaryHover:"#374151",primaryActive:"#111827",primaryLight:"#f3f4f6",success:"#10b981",warning:"#f59e0b",error:"#ef4444",text:"#111827",textSecondary:"#6b7280",textTertiary:"#9ca3af",textDisabled:"#d1d5db",border:"#e5e7eb",borderHover:"#9ca3af",borderFocus:"#1f2937",background:"#ffffff",backgroundSecondary:"#f9fafb",backgroundTertiary:"#f3f4f6",backgroundHover:"#f3f4f6"},spacing:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"32px"},font:{family:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',size:{xs:"12px",sm:"13px",md:"14px",lg:"16px",xl:"18px","2xl":"20px"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"}},radius:{sm:"4px",md:"8px",lg:"10px",xl:"12px","2xl":"16px",full:"9999px"},shadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"},transition:{fast:"150ms cubic-bezier(0.4, 0, 0.2, 1)",normal:"200ms cubic-bezier(0.4, 0, 0.2, 1)",slow:"300ms cubic-bezier(0.4, 0, 0.2, 1)"}},E=`
  :root {
    --color-primary: ${i.color.primary};
    --color-primary-hover: ${i.color.primaryHover};
    --color-primary-active: ${i.color.primaryActive};
    --color-primary-light: ${i.color.primaryLight};
    --color-success: ${i.color.success};
    --color-warning: ${i.color.warning};
    --color-error: ${i.color.error};
    --color-text: ${i.color.text};
    --color-text-secondary: ${i.color.textSecondary};
    --color-text-tertiary: ${i.color.textTertiary};
    --color-text-disabled: ${i.color.textDisabled};
    --color-border: ${i.color.border};
    --color-border-hover: ${i.color.borderHover};
    --color-border-focus: ${i.color.borderFocus};
    --color-background: ${i.color.background};
    --color-background-secondary: ${i.color.backgroundSecondary};
    --color-background-tertiary: ${i.color.backgroundTertiary};
    --color-background-hover: ${i.color.backgroundHover};
    --spacing-xs: ${i.spacing.xs};
    --spacing-sm: ${i.spacing.sm};
    --spacing-md: ${i.spacing.md};
    --spacing-lg: ${i.spacing.lg};
    --spacing-xl: ${i.spacing.xl};
    --spacing-2xl: ${i.spacing["2xl"]};
    --font-family: ${i.font.family};
    --font-size-xs: ${i.font.size.xs};
    --font-size-sm: ${i.font.size.sm};
    --font-size-md: ${i.font.size.md};
    --font-size-lg: ${i.font.size.lg};
    --font-size-xl: ${i.font.size.xl};
    --font-size-2xl: ${i.font.size["2xl"]};
    --font-weight-normal: ${i.font.weight.normal};
    --font-weight-medium: ${i.font.weight.medium};
    --font-weight-semibold: ${i.font.weight.semibold};
    --font-weight-bold: ${i.font.weight.bold};
    --radius-sm: ${i.radius.sm};
    --radius-md: ${i.radius.md};
    --radius-lg: ${i.radius.lg};
    --radius-xl: ${i.radius.xl};
    --radius-2xl: ${i.radius["2xl"]};
    --radius-full: ${i.radius.full};
    --shadow-sm: ${i.shadow.sm};
    --shadow-md: ${i.shadow.md};
    --shadow-lg: ${i.shadow.lg};
    --transition-fast: ${i.transition.fast};
    --transition-normal: ${i.transition.normal};
    --transition-slow: ${i.transition.slow};
    box-sizing: border-box;
  }
  *, *::before, *::after { box-sizing: border-box; }
`,H=class H extends q{emit(t,o){this.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:!0,composed:!0}))}};H.styles=[N(E)];let d=H;var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,z=(e,t,o,s)=>{for(var r=s>1?void 0:s?W(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&V(t,o,r),r};let g=class extends d{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.loading=!1,this.block=!1,this.shape="default"}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.emit("click",e)}render(){const e=[this.variant,this.size,this.shape!=="default"?this.shape:"",this.block?"block":""].filter(Boolean).join(" ");return c`
      <button class=${e} ?disabled=${this.disabled||this.loading} @click=${this.handleClick}>
        ${this.loading?c`<span class="spinner"></span><span class="loading-wrapper"><slot></slot></span>`:c`<slot></slot>`}
      </button>
    `}};g.styles=[...d.styles,v`
      :host { display: inline-block; }
      :host([block]) { display: block; width: 100%; }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        font-family: var(--font-family);
        font-weight: var(--font-weight-medium);
        border: none;
        cursor: pointer;
        transition: all var(--transition-fast);
        outline: none;
        white-space: nowrap;
        user-select: none;
        position: relative;
        overflow: hidden;
      }

      button:focus-visible {
        box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-primary);
      }

      button:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

      /* 尺寸 */
      button.xs { height: 24px; padding: 0 10px; font-size: var(--font-size-xs); border-radius: var(--radius-sm); }
      button.sm { height: 32px; padding: 0 12px; font-size: var(--font-size-sm); border-radius: var(--radius-md); }
      button.md { height: 36px; padding: 0 16px; font-size: var(--font-size-sm); border-radius: var(--radius-md); }
      button.lg { height: 44px; padding: 0 20px; font-size: var(--font-size-md); border-radius: var(--radius-lg); }
      button.xl { height: 52px; padding: 0 24px; font-size: var(--font-size-lg); border-radius: var(--radius-lg); }

      /* 形状 */
      button.round { border-radius: var(--radius-full); }
      button.circle { border-radius: 50%; padding: 0; }
      button.circle.xs { width: 24px; }
      button.circle.sm { width: 32px; }
      button.circle.md { width: 36px; }
      button.circle.lg { width: 44px; }
      button.circle.xl { width: 52px; }

      /* Primary - 黑色 */
      button.primary {
        background: var(--color-primary);
        color: white;
      }
      button.primary:hover:not(:disabled) {
        background: var(--color-primary-hover);
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }
      button.primary:active:not(:disabled) {
        background: var(--color-primary-active);
        transform: translateY(0);
      }

      /* Secondary - 浅灰 */
      button.secondary {
        background: var(--color-background-tertiary);
        color: var(--color-text);
      }
      button.secondary:hover:not(:disabled) {
        background: var(--color-background-hover);
        color: var(--color-primary);
      }

      /* Outline - 边框 */
      button.outline {
        background: transparent;
        color: var(--color-primary);
        border: 1px solid var(--color-border);
      }
      button.outline:hover:not(:disabled) {
        border-color: var(--color-primary);
        background: var(--color-primary-light);
      }

      /* Ghost - 透明 */
      button.ghost {
        background: transparent;
        color: var(--color-text);
      }
      button.ghost:hover:not(:disabled) {
        background: var(--color-background-hover);
      }

      /* Danger - 深红灰 */
      button.danger {
        background: #991b1b;
        color: white;
      }
      button.danger:hover:not(:disabled) {
        background: #7f1d1d;
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }

      button.block { width: 100%; }

      .loading-wrapper { display: inline-flex; align-items: center; gap: var(--spacing-sm); }
      .spinner {
        width: 14px; height: 14px;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
    `];z([a({type:String})],g.prototype,"variant",2);z([a({type:String})],g.prototype,"size",2);z([a({type:Boolean})],g.prototype,"disabled",2);z([a({type:Boolean})],g.prototype,"loading",2);z([a({type:Boolean})],g.prototype,"block",2);z([a({type:String})],g.prototype,"shape",2);g=z([m("my-button")],g);var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=(e,t,o,s)=>{for(var r=s>1?void 0:s?G(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&Z(t,o,r),r};let p=class extends d{constructor(){super(...arguments),this.type="text",this.placeholder="",this.value="",this.name="",this.prefix="",this.suffix="",this.disabled=!1,this.readonly=!1,this.clearable=!1,this.error=!1,this.errorMessage="",this.size="md",this._focused=!1}handleInput(e){const t=e.target;this.value=t.value,this.emit("input",this.value)}handleFocus(){this._focused=!0,this.emit("focus"),this.requestUpdate()}handleBlur(){this._focused=!1,this.emit("blur"),this.requestUpdate()}handleClear(e){e.stopPropagation(),this.value="",this.emit("input",""),this.emit("clear"),this.emit("change","")}focus(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("input"))==null||t.focus()}blur(){var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("input"))==null||t.blur()}render(){const e=[this.size,this._focused?"focused":"",this.disabled?"disabled":"",this.error?"error":"",this.value?"has-value":""].filter(Boolean).join(" ");return c`
      <div class="input-wrapper ${e}">
        ${this.prefix?c`<span class="prefix">${this.prefix}</span>`:""}
        <input type=${this.type} .value=${this.value} placeholder=${this.placeholder} name=${this.name} ?disabled=${this.disabled} ?readonly=${this.readonly} @input=${this.handleInput} @focus=${this.handleFocus} @blur=${this.handleBlur} />
        ${this.suffix?c`<span class="suffix">${this.suffix}</span>`:""}
        ${this.clearable&&this.value&&!this.disabled?c`<span class="clear-btn" @click=${this.handleClear}>✕</span>`:""}
      </div>
      ${this.error&&this.errorMessage?c`<div class="error-message">${this.errorMessage}</div>`:""}
    `}};p.styles=[...d.styles,v`
      :host { display: inline-block; width: 100%; }

      .input-wrapper {
        display: flex;
        align-items: center;
        background: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        overflow: hidden;
      }

      .input-wrapper:hover:not(.disabled) { border-color: var(--color-border-hover); }
      .input-wrapper.focused { border-color: var(--color-primary); box-shadow: 0 0 0 3px var(--color-primary-light); }
      .input-wrapper.error { border-color: var(--color-error); }
      .input-wrapper.error.focused { box-shadow: 0 0 0 3px #fee2e2; }
      .input-wrapper.disabled { background: var(--color-background-secondary); cursor: not-allowed; opacity: 0.6; }

      .prefix, .suffix { display: flex; align-items: center; padding: 0 var(--spacing-sm); color: var(--color-text-tertiary); font-size: var(--font-size-sm); white-space: nowrap; }
      .prefix { padding-right: 0; }
      .suffix { padding-left: 0; }

      input {
        flex: 1; width: 100%; height: 100%;
        border: none; outline: none; background: transparent;
        font-family: var(--font-family); color: var(--color-text);
      }
      input::placeholder { color: var(--color-text-tertiary); }
      input:disabled { cursor: not-allowed; }

      .input-wrapper.sm { height: 32px; }
      .input-wrapper.sm input { padding: 4px 10px; font-size: var(--font-size-sm); }
      .input-wrapper.md { height: 36px; }
      .input-wrapper.md input { padding: 6px 12px; font-size: var(--font-size-sm); }
      .input-wrapper.lg { height: 44px; }
      .input-wrapper.lg input { padding: 8px 14px; font-size: var(--font-size-md); }

      .clear-btn {
        display: none; padding: 0 var(--spacing-sm);
        color: var(--color-text-tertiary); cursor: pointer;
        font-size: var(--font-size-sm); transition: color var(--transition-fast);
      }
      .clear-btn:hover { color: var(--color-text); }
      .input-wrapper.has-value:not(.disabled) .clear-btn { display: flex; }

      .error-message { margin-top: var(--spacing-xs); color: var(--color-error); font-size: var(--font-size-xs); }
    `];h([a({type:String})],p.prototype,"type",2);h([a({type:String})],p.prototype,"placeholder",2);h([a({type:String})],p.prototype,"value",2);h([a({type:String})],p.prototype,"name",2);h([a({type:String})],p.prototype,"prefix",2);h([a({type:String})],p.prototype,"suffix",2);h([a({type:Boolean})],p.prototype,"disabled",2);h([a({type:Boolean})],p.prototype,"readonly",2);h([a({type:Boolean})],p.prototype,"clearable",2);h([a({type:Boolean})],p.prototype,"error",2);h([a({type:String})],p.prototype,"errorMessage",2);h([a({type:String})],p.prototype,"size",2);p=h([m("my-input")],p);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J={CHILD:2},K=e=>(...t)=>({_$litDirective$:e,values:t});class Q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class L extends Q{constructor(t){if(super(t),this.it=I,t.type!==J.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===I||t==null)return this._t=void 0,this.it=t;if(t===Y)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}L.directiveName="unsafeHTML",L.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends L{}T.directiveName="unsafeSVG",T.resultType=2;const tt=K(T);var et=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,M=(e,t,o,s)=>{for(var r=s>1?void 0:s?rt(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&et(t,o,r),r};const D={check:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',close:'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',search:'<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',plus:'<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',minus:'<path d="M19 13H5v-2h14v2z"/>',arrowLeft:'<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>',arrowRight:'<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>',arrowUp:'<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>',arrowDown:'<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>',user:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',settings:'<path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>',loading:'<path d="M12 4V2C6.48 2 2 6.48 2 12h2c0-4.42 3.58-8 8-8z"/>',info:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',warning:'<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',error:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',success:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'};let $=class extends d{constructor(){super(...arguments),this.name="",this.svg="",this.size="md",this.color="currentColor"}getSvgContent(){return this.svg?this.svg:this.name&&D[this.name]?D[this.name]:""}render(){const e=this.getSvgContent();if(!e)return c``;const t=this.size.endsWith("px")||this.size.endsWith("rem")||this.size.endsWith("em")?this.size:void 0;return c`
      <svg
        viewBox="0 0 24 24"
        style=${t?`font-size: ${t}; color: ${this.color}`:`color: ${this.color}`}
      >
        ${tt(e)}
      </svg>
    `}static registerIcon(e,t){D[e]=t}};$.styles=[...d.styles,v`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      svg {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        vertical-align: middle;
      }

      :host([size="sm"]) svg { font-size: 14px; }
      :host([size="md"]) svg { font-size: 18px; }
      :host([size="lg"]) svg { font-size: 24px; }
    `];M([a({type:String})],$.prototype,"name",2);M([a({type:String})],$.prototype,"svg",2);M([a({type:String})],$.prototype,"size",2);M([a({type:String})],$.prototype,"color",2);$=M([m("my-icon")],$);var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,j=(e,t,o,s)=>{for(var r=s>1?void 0:s?st(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&ot(t,o,r),r};let S=class extends d{constructor(){super(...arguments),this.bordered=!0,this.hoverable=!1,this.padding="md"}handleClick(e){this.hoverable&&this.emit("click",e)}render(){var s,r;const e=[this.bordered?"bordered":"",this.hoverable?"hoverable":"",`padding-${this.padding}`].filter(Boolean).join(" "),t=(s=this.shadowRoot)==null?void 0:s.querySelector('[slot="header"]'),o=(r=this.shadowRoot)==null?void 0:r.querySelector('[slot="footer"]');return c`
      <div class="card ${e}" @click=${this.handleClick}>
        ${t?c`<div class="card-header"><slot name="header"></slot></div>`:""}
        <div class="card-content"><slot></slot></div>
        ${o?c`<div class="card-footer"><slot name="footer"></slot></div>`:""}
      </div>
    `}};S.styles=[...d.styles,v`
      :host { display: block; }
      .card {
        background: var(--color-background);
        border-radius: var(--radius-lg);
        overflow: hidden;
      }
      .card.bordered { border: 1px solid var(--color-border); }
      .card.hoverable { cursor: pointer; transition: all var(--transition-normal); }
      .card.hoverable:hover {
        border-color: var(--color-primary);
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
      }
      .card.padding-none { padding: 0; }
      .card.padding-sm { padding: var(--spacing-sm); }
      .card.padding-md { padding: var(--spacing-lg); }
      .card.padding-lg { padding: var(--spacing-xl); }
      .card-header { padding: var(--spacing-lg); padding-bottom: 0; font-weight: var(--font-weight-semibold); font-size: var(--font-size-lg); color: var(--color-text); }
      .card-content { padding: var(--spacing-lg); }
      .card-footer { padding: var(--spacing-lg); padding-top: 0; border-top: 1px solid var(--color-border); margin-top: var(--spacing-lg); }
      .card.no-border .card-footer { border-top: none; margin-top: 0; padding-top: var(--spacing-lg); }
    `];j([a({type:Boolean})],S.prototype,"bordered",2);j([a({type:Boolean})],S.prototype,"hoverable",2);j([a({type:String})],S.prototype,"padding",2);S=j([m("my-card")],S);var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,C=(e,t,o,s)=>{for(var r=s>1?void 0:s?it(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&at(t,o,r),r};let y=class extends d{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.label="",this.size="md"}handleClick(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1,this.emit("change",{checked:this.checked,value:this.label}))}render(){const e=[this.size,this.checked?"checked":"",this.indeterminate?"indeterminate":"",this.disabled?"disabled":""].filter(Boolean).join(" ");return c`
      <div class="checkbox-wrapper" @click=${this.handleClick}>
        <div class="checkbox ${e}">
          <span class="checkmark">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.28 2.28L4 8.56l-2.28-2.28a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l7-7a.75.75 0 00-1.06-1.06z"/>
            </svg>
          </span>
          <span class="indeterminate-mark"></span>
        </div>
        ${this.label?c`<span class="label">${this.label}</span>`:""}
      </div>
    `}};y.styles=[...d.styles,v`
      :host { display: inline-flex; align-items: center; cursor: pointer; user-select: none; }
      :host([disabled]) { cursor: not-allowed; opacity: 0.5; }
      .checkbox-wrapper { display: inline-flex; align-items: center; gap: var(--spacing-sm); }
      .checkbox {
        display: inline-flex; align-items: center; justify-content: center;
        border: 2px solid var(--color-border);
        border-radius: var(--radius-sm);
        background: var(--color-background);
        transition: all var(--transition-fast);
        position: relative;
      }
      .checkbox.sm { width: 16px; height: 16px; }
      .checkbox.md { width: 18px; height: 18px; }
      .checkbox:hover:not(.disabled) { border-color: var(--color-primary); }
      .checkbox.checked { background: var(--color-primary); border-color: var(--color-primary); }
      .checkbox.indeterminate { background: var(--color-primary); border-color: var(--color-primary); }
      .checkmark { color: white; opacity: 0; transform: scale(0.5); transition: all var(--transition-fast); }
      .checkbox.checked .checkmark, .checkbox.indeterminate .checkmark { opacity: 1; transform: scale(1); }
      .indeterminate-mark { position: absolute; width: 8px; height: 2px; background: white; opacity: 0; transition: opacity var(--transition-fast); }
      .checkbox.indeterminate .indeterminate-mark { opacity: 1; }
      .checkbox.checked .indeterminate-mark { opacity: 0; }
      .label { font-size: var(--font-size-sm); color: var(--color-text); line-height: 1.5; }
      :host([disabled]) .label { color: var(--color-text-disabled); }
    `];C([a({type:Boolean})],y.prototype,"checked",2);C([a({type:Boolean})],y.prototype,"disabled",2);C([a({type:Boolean})],y.prototype,"indeterminate",2);C([a({type:String})],y.prototype,"label",2);C([a({type:String})],y.prototype,"size",2);y=C([m("my-checkbox")],y);var nt=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,P=(e,t,o,s)=>{for(var r=s>1?void 0:s?lt(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&nt(t,o,r),r};let w=class extends d{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.size="md",this.checkedText="",this.uncheckedText=""}handleClick(){this.disabled||(this.checked=!this.checked,this.emit("change",{checked:this.checked}))}render(){const e=[this.size,this.checked?"checked":"",this.disabled?"disabled":""].filter(Boolean).join(" "),t=this.checkedText||this.uncheckedText;return c`
      <div class="switch-wrapper">
        ${t&&!this.checked?c`<span class="label">${this.uncheckedText}</span>`:""}
        <div class="switch ${e}" @click=${this.handleClick}></div>
        ${t&&this.checked?c`<span class="label">${this.checkedText}</span>`:""}
      </div>
    `}};w.styles=[...d.styles,v`
      :host { display: inline-flex; align-items: center; cursor: pointer; user-select: none; }
      :host([disabled]) { cursor: not-allowed; opacity: 0.5; }
      .switch-wrapper { display: inline-flex; align-items: center; gap: var(--spacing-sm); }
      .switch {
        position: relative; border-radius: var(--radius-full);
        background: var(--color-border);
        transition: all var(--transition-fast); cursor: pointer;
      }
      .switch::after {
        content: ''; position: absolute; top: 2px; left: 2px;
        background: white; border-radius: 50%;
        box-shadow: var(--shadow-sm);
        transition: transform var(--transition-fast);
      }
      .switch.sm { width: 32px; height: 18px; }
      .switch.sm::after { width: 14px; height: 14px; }
      .switch.sm.checked::after { transform: translateX(14px); }
      .switch.md { width: 40px; height: 22px; }
      .switch.md::after { width: 18px; height: 18px; }
      .switch.md.checked::after { transform: translateX(18px); }
      .switch.lg { width: 48px; height: 26px; }
      .switch.lg::after { width: 22px; height: 22px; }
      .switch.lg.checked::after { transform: translateX(22px); }
      .switch.checked { background: var(--color-primary); }
      .switch.disabled { cursor: not-allowed; }
      .label { font-size: var(--font-size-sm); color: var(--color-text); }
      :host([disabled]) .label { color: var(--color-text-disabled); }
    `];P([a({type:Boolean})],w.prototype,"checked",2);P([a({type:Boolean})],w.prototype,"disabled",2);P([a({type:String})],w.prototype,"size",2);P([a({type:String})],w.prototype,"checkedText",2);P([a({type:String})],w.prototype,"uncheckedText",2);w=P([m("my-switch")],w);var ct=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,O=(e,t,o,s)=>{for(var r=s>1?void 0:s?dt(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&ct(t,o,r),r};let k=class extends d{constructor(){super(...arguments),this.variant="default",this.size="md",this.closable=!1,this.color=""}handleClose(e){e.stopPropagation(),this.emit("close")}render(){const e=[this.variant,this.size].filter(Boolean).join(" "),t=this.color?`background: ${this.color}20; color: ${this.color};`:"";return c`
      <span class="tag ${e}" style="${t}">
        <slot></slot>
        ${this.closable?c`
          <span class="close-btn" @click=${this.handleClose}>✕</span>
        `:""}
      </span>
    `}};k.styles=[...d.styles,v`
      :host { display: inline-block; }
      
      .tag {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        font-family: var(--font-family);
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
        white-space: nowrap;
      }

      /* 尺寸 */
      .tag.sm {
        height: 20px;
        padding: 0 6px;
        font-size: var(--font-size-xs);
      }
      .tag.md {
        height: 24px;
        padding: 0 8px;
        font-size: var(--font-size-sm);
      }

      /* 默认 */
      .tag.default {
        background: var(--color-background-tertiary);
        color: var(--color-text-secondary);
      }
      .tag.default:hover {
        background: var(--color-background-hover);
      }

      /* 轮廓 */
      .tag.outline {
        background: transparent;
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
      }
      .tag.outline:hover {
        border-color: var(--color-text-secondary);
      }

      /* 实心 */
      .tag.filled {
        background: var(--color-primary-light);
        color: var(--color-primary);
      }

      /* 可关闭 */
      .close-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        margin-left: 2px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.6;
        transition: all var(--transition-fast);
      }
      .close-btn:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.1);
      }
    `];O([a({type:String})],k.prototype,"variant",2);O([a({type:String})],k.prototype,"size",2);O([a({type:Boolean})],k.prototype,"closable",2);O([a({type:String})],k.prototype,"color",2);k=O([m("my-tag")],k);var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,x=(e,t,o,s)=>{for(var r=s>1?void 0:s?ht(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&pt(t,o,r),r};let f=class extends d{constructor(){super(...arguments),this.count=0,this.maxCount=99,this.dot=!1,this.color="",this.showZero=!1,this.position="top-right",this.offsetX=0,this.offsetY=0}get displayCount(){return this.count>this.maxCount?`${this.maxCount}+`:String(this.count)}render(){const e=this.showZero||this.count>0,t=this.offsetX!==0||this.offsetY!==0,o=this.color?`background: ${this.color};`:"",s=t?`--offset-x: ${this.offsetX}px; --offset-y: ${this.offsetY}px;`:"",r=[this.position,t?"offset":""].filter(Boolean).join(" ");return this.dot?c`
        <div class="badge-wrapper">
          <slot></slot>
          <span 
            class="badge dot ${r} ${e?"":"hidden"}" 
            style="${o} ${s}"
          ></span>
        </div>
      `:c`
      <div class="badge-wrapper">
        <slot></slot>
        ${e?c`
          <span class="badge ${r}" style="${o} ${s}">
            ${this.displayCount}
          </span>
        `:""}
      </div>
    `}};f.styles=[...d.styles,v`
      :host {
        display: inline-block;
        position: relative;
        line-height: 1;
      }

      .badge-wrapper {
        position: relative;
        display: inline-block;
      }

      .badge {
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        font-family: var(--font-family);
        font-size: 11px;
        font-weight: var(--font-weight-medium);
        border-radius: var(--radius-full);
        background: var(--color-error);
        color: white;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        transition: all var(--transition-fast);
      }

      .badge.dot {
        min-width: 8px;
        width: 8px;
        height: 8px;
        padding: 0;
        transform: translate(-50%, -50%);
      }

      .badge.hidden {
        display: none;
      }

      /* 8个方位 */
      .badge.top-left {
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      }
      .badge.top-center {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .badge.top-right {
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
      .badge.middle-left {
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
      }
      .badge.middle-right {
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
      }
      .badge.bottom-left {
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
      }
      .badge.bottom-center {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }
      .badge.bottom-right {
        bottom: 0;
        right: 0;
        transform: translate(50%, 50%);
      }

      /* 偏移量 */
      .badge.offset {
        transform: translate(
          calc(-50% + var(--offset-x, 0px)),
          calc(-50% + var(--offset-y, 0px))
        );
      }
      .badge.dot.offset {
        transform: translate(
          calc(-50% + var(--offset-x, 0px)),
          calc(-50% + var(--offset-y, 0px))
        );
      }
    `];x([a({type:Number,attribute:"count"})],f.prototype,"count",2);x([a({type:Number})],f.prototype,"maxCount",2);x([a({type:Boolean})],f.prototype,"dot",2);x([a({type:String})],f.prototype,"color",2);x([a({type:Boolean})],f.prototype,"showZero",2);x([a({type:String})],f.prototype,"position",2);x([a({type:Number})],f.prototype,"offsetX",2);x([a({type:Number})],f.prototype,"offsetY",2);f=x([m("my-badge")],f);var ft=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,_=(e,t,o,s)=>{for(var r=s>1?void 0:s?ut(t,o):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(s?l(t,o,r):l(r))||r);return s&&r&&ft(t,o,r),r};let b=class extends d{constructor(){super(...arguments),this.open=!1,this.title="",this.maskClosable=!0,this.footer=!0,this.width="520px",this._closing=!1}handleMaskClick(){this.maskClosable&&this.close()}openModal(){this.open=!0,this.emit("open")}close(){this.open=!1,this.emit("close")}render(){return c`
      <div class="modal-mask ${this.open?"open":""}" @click=${this.handleMaskClick}></div>
      <div class="modal-container ${this.open?"open":""}" style="width: ${this.width};">
        <div class="modal-header">
          <h3 class="modal-title">${this.title}</h3>
          <div class="modal-close" @click=${this.close}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </div>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        ${this.footer?c`
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        `:""}
      </div>
    `}};b.styles=[...d.styles,v`
      :host { display: block; }

      .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1000;
      }

      .modal-mask.open {
        opacity: 1;
        visibility: visible;
      }

      .modal-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        background: var(--color-background);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: 1001;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-container.open {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%) scale(1);
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-lg);
        border-bottom: 1px solid var(--color-border);
      }

      .modal-title {
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text);
        margin: 0;
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: var(--radius-sm);
        cursor: pointer;
        color: var(--color-text-tertiary);
        transition: all var(--transition-fast);
      }

      .modal-close:hover {
        background: var(--color-background-hover);
        color: var(--color-text);
      }

      .modal-body {
        padding: var(--spacing-lg);
        overflow-y: auto;
        flex: 1;
      }

      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: var(--spacing-sm);
        padding: var(--spacing-lg);
        border-top: 1px solid var(--color-border);
      }
    `];_([a({type:Boolean,attribute:"open"})],b.prototype,"open",2);_([a({type:String})],b.prototype,"title",2);_([a({type:Boolean})],b.prototype,"maskClosable",2);_([a({type:Boolean})],b.prototype,"footer",2);_([a({type:String})],b.prototype,"width",2);_([X()],b.prototype,"_closing",2);b=_([m("my-modal")],b);const gt=c`
  <style>
    :root {
      --color-primary: #1f2937;
      --color-primary-hover: #374151;
      --color-primary-active: #111827;
      --color-primary-light: #f3f4f6;
      --color-success: #10b981;
      --color-warning: #f59e0b;
      --color-error: #ef4444;
      --color-text: #111827;
      --color-text-secondary: #6b7280;
      --color-text-tertiary: #9ca3af;
      --color-text-disabled: #d1d5db;
      --color-border: #e5e7eb;
      --color-border-hover: #9ca3af;
      --color-border-focus: #1f2937;
      --color-background: #ffffff;
      --color-background-secondary: #f9fafb;
      --color-background-tertiary: #f3f4f6;
      --color-background-hover: #f3f4f6;
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 12px;
      --spacing-lg: 16px;
      --spacing-xl: 24px;
      --spacing-2xl: 32px;
      --font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-size-xs: 12px;
      --font-size-sm: 13px;
      --font-size-md: 14px;
      --font-size-lg: 16px;
      --font-size-xl: 18px;
      --font-size-2xl: 20px;
      --font-weight-normal: 400;
      --font-weight-medium: 500;
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 10px;
      --radius-xl: 12px;
      --radius-2xl: 16px;
      --radius-full: 9999px;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
      --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    body { margin: 0; padding: 24px; font-family: var(--font-family); }
  </style>
`,vt={decorators:[e=>c`${gt}${e()}`],parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"gray",value:"#f3f4f6"}]}}};export{vt as default};
