/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ds-bg': '#0A0F1E',
        'ds-surface': '#0D1628',
        'ds-elevated': '#112240',
        'ds-cyan': '#00D4FF',
        'ds-blue': '#0077FF',
        'ds-border': '#1E3A5F',
        'ds-success': '#10B981',
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

