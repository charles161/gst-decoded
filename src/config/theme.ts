export const colors = {
  // Deep backgrounds
  ocean: '#0a1628',
  oceanLight: '#142238',
  oceanDark: '#060d18',
  surface: '#0f1d32',
  surfaceLight: '#1a2d4a',

  // Semantic colors for GST
  credit: '#00d4ff',     // ITC, credits, positive flows — cyan glow
  tax: '#ff9d00',        // Tax amounts, liabilities — amber
  penalty: '#ff3366',    // Penalties, errors, critical — crimson
  success: '#00e88f',    // Completed, filed, paid — green
  muted: '#4a4a6a',      // Inactive, disabled — gray

  // Text
  text: {
    primary: '#f0f0f5',
    secondary: '#a0a0b0',
    muted: '#6a6a7a',
  },

  // Supply chain stages
  chain: {
    farmer: '#00e88f',
    spinner: '#00d4ff',
    weaver: '#8b5cf6',
    garment: '#ff9d00',
    retailer: '#ff3366',
  },
} as const

export const fonts = {
  display: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", monospace',
} as const

export const glowShadow = (color: string, intensity = 1) =>
  `0 0 ${10 * intensity}px ${color}50, 0 0 ${20 * intensity}px ${color}30, 0 0 ${40 * intensity}px ${color}20`

export const easing = {
  organic: [0.4, 0, 0.2, 1] as const,
  breathe: [0.37, 0, 0.63, 1] as const,
  snappy: [0.22, 1, 0.36, 1] as const,
}

export const chapterMeta = [
  { id: 'ch01', title: 'Why GST Exists', short: 'Origins' },
  { id: 'ch02', title: 'CGST, SGST & IGST', short: 'Three Taxes' },
  { id: 'ch03', title: 'Registration', short: 'Who Registers' },
  { id: 'ch04', title: 'Rate Structure', short: 'Rates & HSN' },
  { id: 'ch05', title: 'Returns Calendar', short: 'Returns' },
  { id: 'ch06', title: 'Input Tax Credit', short: 'ITC' },
  { id: 'ch07', title: 'E-Invoicing', short: 'E-Invoice' },
  { id: 'ch08', title: 'E-Way Bills', short: 'E-Way Bill' },
  { id: 'ch09', title: 'Composition Scheme', short: 'Composition' },
  { id: 'ch10', title: 'Reverse Charge', short: 'RCM' },
  { id: 'ch11', title: 'Payments', short: 'Wallets' },
  { id: 'ch12', title: 'Annual Compliance', short: 'Annual' },
  { id: 'ch13', title: 'Penalties', short: 'Penalties' },
  { id: 'ch14', title: 'Refunds', short: 'Refunds' },
  { id: 'ch15', title: 'Assessments & Appeals', short: 'Appeals' },
  { id: 'ch16', title: 'Composition vs Regular', short: 'Decision' },
  { id: 'ch17', title: 'Special Situations', short: 'Edge Cases' },
  { id: 'ch18', title: 'The Big Picture', short: 'Vision' },
] as const
