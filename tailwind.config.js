/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ds-bg': 'var(--color-bg-primary)',
        'ds-surface': 'var(--color-bg-surface)',
        'ds-elevated': 'var(--color-bg-elevated)',
        'ds-cyan': 'var(--color-accent-cyan)',
        'ds-blue': 'var(--color-accent-blue)',
        'ds-border': 'var(--color-border)',
        'ds-success': 'var(--color-success)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}

