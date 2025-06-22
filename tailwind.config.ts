import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        dancing: ['var(--font-dancing)', 'cursive'],
        lora: ['var(--font-lora)', 'serif'],
      },
      colors: {
        primary: 'var(--color-primary)', // #991b1b
        accent: 'var(--color-accent)', // #facc15
        base: 'var(--color-base)', // #fefefe
        text: 'var(--color-text)', // #1f2937
        dark: 'var(--color-dark)', // #2f1b1b
        hover: 'var(--color-hover)', // #b91c1c
        light: 'var(--color-light)', // #f9fafb
      },
    },
  },
  plugins: [],
}

export default config
