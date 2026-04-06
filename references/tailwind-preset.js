/**
 * NYCU LIFE Design Tokens — Tailwind CSS Preset
 *
 * Source of truth: https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU
 * Standard: WCAG 2.1 AA | Version: v1.0 (2026.02.14)
 *
 * Usage in tailwind.config.js:
 *   presets: [require('./tailwind-preset.js')]
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary, #0045F2)',
          'secondary-1': 'var(--color-brand-secondary-1, #2462FF)',
          'secondary-2': 'var(--color-brand-secondary-2, #4D7FFF)',
          'secondary-3': 'var(--color-brand-secondary-3, #CCDBFF)',
          'secondary-4': 'var(--color-brand-secondary-4, #2455A8)',
        },
        'accent-green': {
          primary: 'var(--color-accent-green-primary, #80DA0A)',
          'secondary-1': 'var(--color-accent-green-secondary-1, #98E236)',
          'secondary-2': 'var(--color-accent-green-secondary-2, #AFED5E)',
          'secondary-3': 'var(--color-accent-green-secondary-3, #D5F1B1)',
          'secondary-4': 'var(--color-accent-green-secondary-4, #EDF0F5)',
        },
        'accent-orange': {
          primary: 'var(--color-accent-orange-primary, #F2A500)',
          'secondary-1': 'var(--color-accent-orange-secondary-1, #FFBA24)',
          'secondary-2': 'var(--color-accent-orange-secondary-2, #FFC64D)',
          'secondary-3': 'var(--color-accent-orange-secondary-3, #FFE5AD)',
          'secondary-4': 'var(--color-accent-orange-secondary-4, #6C4C08)',
        },
        gray: {
          1: '#333333',
          2: '#374151',
          3: '#4B5563',
          4: '#6B7280',
          5: '#9CA3AF',
          6: '#D1D5DB',
          7: '#F3F4F6',
        },
        state: {
          info: 'var(--color-info, #A0C3FF)',
          success: 'var(--color-success, #0FBD81)',
          warning: 'var(--color-warning, #F5913D)',
          error: 'var(--color-error, #FC4C4D)',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'PingFang TC',
          'PingFang SC',
          'SF Pro Text',
          'Source Han Sans TC',
          'Noto Sans CJK TC',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '1.3', fontWeight: '500' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        aux: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        small: ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '24px',
        lg: '48px',
        xl: '80px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        card: '0px 12px 32px rgba(55, 65, 81, 0.1)',
      },
      maxWidth: {
        content: '1200px',
      },
      height: {
        nav: '80px',
      },
      minHeight: {
        footer: '80px',
        tap: '44px',
      },
    },
  },
};
