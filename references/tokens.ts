/**
 * NYCU LIFE Design Tokens — TypeScript
 *
 * Source of truth: https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU
 * Standard: WCAG 2.1 AA | Version: v1.0 (2026.02.14)
 *
 * Usage: import { colors, typography, spacing } from './tokens'
 */

export const colors = {
  light: {
    brand: {
      primary: '#0045F2',
      secondary1: '#2462FF',
      secondary2: '#4D7FFF',
      secondary3: '#CCDBFF',
      secondary4: '#2455A8',
    },
    accentGreen: {
      primary: '#80DA0A',
      secondary1: '#98E236',
      secondary2: '#AFED5E',
      secondary3: '#D5F1B1',
      secondary4: '#EDF0F5',
    },
    accentOrange: {
      primary: '#F2A500',
      secondary1: '#FFBA24',
      secondary2: '#FFC64D',
      secondary3: '#FFE5AD',
      secondary4: '#6C4C08',
    },
    /** Text (darker = more important), backgrounds, borders/stroke (描邊色) */
    neutral: {
      black: '#000000',
      gray1: '#333333',
      gray2: '#374151',
      gray3: '#4B5563',
      gray4: '#6B7280',
      gray5: '#9CA3AF',
      gray6: '#D1D5DB',
      gray7: '#F3F4F6',
      white: '#FFFFFF',
    },
    state: {
      info: '#A0C3FF',
      success: '#0FBD81',
      warning: '#F5913D',
      error: '#FC4C4D',
    },
  },
  dark: {
    brand: {
      primary: '#2F60DA',
      secondary1: '#527AE0',
      secondary2: '#BECDF4',
      secondary3: '#D9E3FC',
      secondary4: '#EDF0F5',
    },
    accentGreen: {
      primary: '#8BD22D',
      secondary1: '#A3E052',
      secondary2: '#D1F0A8',
      secondary3: '#E3F6CB',
      secondary4: '#EDF0F5',
    },
    accentOrange: {
      primary: '#E0A629',
      secondary1: '#E5B54D',
      secondary2: '#F5DBA3',
      secondary3: '#F7ECD4',
      secondary4: '#FFF7E5',
    },
    /** Same scale, inverted usage. Borders/stroke use lighter grays on dark backgrounds. */
    neutral: {
      black: '#000000',
      gray1: '#333333',
      gray2: '#374151',
      gray3: '#4B5563',
      gray4: '#6B7280',
      gray5: '#9CA3AF',
      gray6: '#D1D5DB',
      gray7: '#F3F4F6',
      white: '#FFFFFF',
    },
    state: {
      info: '#A9C5F5',
      success: '#11D491',
      warning: '#E9A063',
      error: '#ED5B5B',
    },
  },
} as const;

export const typography = {
  fontFamily:
    'system-ui, -apple-system, "PingFang TC", "PingFang SC", "SF Pro Text", "Source Han Sans TC", "Noto Sans CJK TC", "Roboto", "Helvetica Neue", Arial, sans-serif',
  scale: {
    h1: { size: '36px', weight: 700, label: 'Page title' },
    h2: { size: '28px', weight: 600, label: 'Section title' },
    h3: { size: '22px', weight: 500, label: 'Subsection title' },
    body: { size: '16px', weight: 400, label: 'Body text' },
    aux: { size: '14px', weight: 400, label: 'Auxiliary / description' },
    small: { size: '12px', weight: 400, label: 'Label / copyright' },
  },
  lineHeight: { min: 1.2, max: 1.5 },
  paragraphSpacing: { min: 2, max: 2.5 },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '24px',
  lg: '48px',
  xl: '80px',
} as const;

export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
} as const;

export const shadow = {
  card: '0px 12px 32px rgba(55, 65, 81, 0.1)',
} as const;

export const layout = {
  pageWidth: '1440px',
  contentMaxWidth: '1200px',
  aboveFold: '900px',
  gridColumns: 12,
  gridGutter: '24px',
  navHeight: '80px',
  footerMinHeight: '80px',
  minTapTarget: '44px',
} as const;

export const icon = {
  size: '24px',
  margin: '2px',
  stroke: '2px',
  btnSize: '18px',
  source: 'https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded',
} as const;

/** WCAG 2.1 AA verified contrast pairings */
export const contrastPairings = {
  light: [
    { bg: '#0045F2', fg: '#FFFFFF', usage: 'Primary buttons, badges' },
    { bg: '#4D7FFF', fg: '#FFFFFF', usage: 'Secondary buttons' },
    { bg: '#CCDBFF', fg: '#2462FF', usage: 'Light badges, tags' },
    { bg: '#CCDBFF', fg: '#2455A8', usage: 'Light badges, tags' },
  ],
  dark: [
    { bg: '#E5EBFA', fg: '#2F60DA', usage: 'Light surfaces (Secondary 3)' },
    { bg: '#2F60DA', fg: '#BECDF4', usage: 'Secondary 2 on Primary' },
    { bg: '#527AE0', fg: '#EDF0F5', usage: 'Secondary buttons' },
    { bg: '#2F60DA', fg: '#D9E3FC', usage: 'Primary buttons' },
  ],
} as const;
