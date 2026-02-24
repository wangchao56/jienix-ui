/**
 * 设计令牌 - Design Tokens
 * 全局样式变量，支持主题切换
 */

export const tokens = {
  // 颜色
  color: {
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    
    // 中性色
    text: '#333333',
    textSecondary: '#666666',
    textDisabled: '#bfbfbf',
    border: '#d9d9d9',
    borderHover: '#40a9ff',
    background: '#ffffff',
    backgroundHover: '#f5f5f5',
  },
  
  // 间距
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  
  // 字体
  font: {
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
  
  // 圆角
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    round: '9999px',
  },
  
  // 阴影
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  
  // 过渡
  transition: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

export type DesignTokens = typeof tokens;
