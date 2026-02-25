/**
 * 设计令牌 - 黑白灰系配色
 */

const tokens = {
  color: {
    // 主色调 - 黑白灰
    primary: '#1f2937',      // 深灰
    primaryHover: '#374151', // 中灰
    primaryActive: '#111827', // 深黑灰
    primaryLight: '#f3f4f6', // 浅灰
    
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    
    // 中性色 - 纯黑白灰
    text: '#111827',         // 近黑
    textSecondary: '#6b7280', // 中灰
    textTertiary: '#9ca3af', // 浅灰
    textDisabled: '#d1d5db', // 更浅灰
    
    border: '#e5e7eb',       // 边框灰
    borderHover: '#9ca3af',
    borderFocus: '#1f2937',
    
    background: '#ffffff',   // 纯白
    backgroundSecondary: '#f9fafb',
    backgroundTertiary: '#f3f4f6',
    backgroundHover: '#f3f4f6',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },
  
  font: {
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    size: {
      xs: '12px',
      sm: '13px',
      md: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  radius: {
    sm: '4px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    '2xl': '16px',
    full: '9999px',
  },
  
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export { tokens };
export type DesignTokens = typeof tokens;
