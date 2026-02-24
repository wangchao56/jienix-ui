# Jienix UI

一个基于 Web Components 的通用 UI 组件库，使用 Lit 构建。

## ✨ 特性

- 🧩 **原生 Web Components** - 与框架无关，可在任何地方使用
- 🎨 **设计令牌系统** - 统一的设计变量，支持主题定制
- 📦 **轻量** - 只依赖 Lit（约 5KB）
- 🔒 **样式隔离** - Shadow DOM 确保样式不污染全局
- 📱 **响应式** - 支持不同尺寸和适配

## 🎯 在线演示

👉 [https://wangchao56.github.io/jienix-ui/](https://wangchao56.github.io/jienix-ui/)

## 🧩 组件列表

| 组件 | 标签 | 描述 |
|------|------|------|
| Button | `<my-button>` | 按钮组件，支持多种变体、尺寸、状态 |
| Input | `<my-input>` | 输入框组件，支持清空、禁用、不同尺寸 |
| Icon | `<my-icon>` | 图标组件，16+ 内置图标 |

## 📦 使用方式

### 方式一：CDN 直接引入

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/jienix-ui@latest/dist/index.js';
</script>

<my-button variant="primary">点击我</my-button>
<my-input placeholder="请输入"></my-input>
<my-icon name="check"></my-icon>
```

### 方式二：NPM 安装

```bash
npm install jienix-ui
```

```typescript
import 'jienix-ui';

// 或按需导入
import 'jienix-ui/dist/components/button/button.js';
```

## 📖 组件文档

### Button 按钮

```html
<!-- 变体 -->
<my-button variant="primary">Primary</my-button>
<my-button variant="secondary">Secondary</my-button>
<my-button variant="outline">Outline</my-button>
<my-button variant="text">Text</my-button>
<my-button variant="danger">Danger</my-button>

<!-- 尺寸 -->
<my-button size="sm">Small</my-button>
<my-button size="md">Medium</my-button>
<my-button size="lg">Large</my-button>

<!-- 状态 -->
<my-button disabled>Disabled</my-button>
<my-button loading>Loading</my-button>
<my-button block>Block Button</my-button>
```

### Input 输入框

```html
<my-input placeholder="请输入"></my-input>
<my-input placeholder="可清空" clearable></my-input>
<my-input placeholder="禁用" disabled></my-input>

<my-input size="sm" placeholder="Small"></my-input>
<my-input size="md" placeholder="Medium"></my-input>
<my-input size="lg" placeholder="Large"></my-input>
```

### Icon 图标

```html
<my-icon name="check"></my-icon>
<my-icon name="close"></my-icon>
<my-icon name="search"></my-icon>

<my-icon name="check" size="sm"></my-icon>
<my-icon name="check" size="md"></my-icon>
<my-icon name="check" size="lg"></my-icon>
<my-icon name="check" size="32px"></my-icon>

<my-icon name="success" color="#52c41a"></my-icon>
```

**内置图标：** `check`, `close`, `search`, `plus`, `minus`, `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`, `user`, `settings`, `loading`, `info`, `warning`, `error`, `success`

## 🛠️ 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 📁 项目结构

```
jienix-ui/
├── src/
│   ├── components/     # 组件目录
│   │   ├── base.ts     # 基类
│   │   ├── button/
│   │   ├── input/
│   │   └── icon/
│   ├── styles/
│   │   └── tokens.ts   # 设计令牌
│   └── index.ts        # 入口文件
├── demo/               # 演示页面
└── dist/               # 构建输出
```

## License

MIT
