/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', /* light-stone */
          input: 'var(--color-input)', /* white */
          ring: 'var(--color-ring)', /* monastery-stone */
          background: 'var(--color-background)', /* warm-parchment-white */
          foreground: 'var(--color-foreground)', /* contemplative-charcoal */
          primary: {
            DEFAULT: 'var(--color-primary)', /* monastery-stone */
            foreground: 'var(--color-primary-foreground)', /* white */
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', /* sky-meditation */
            foreground: 'var(--color-secondary-foreground)', /* dark-charcoal */
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', /* compassionate-correction */
            foreground: 'var(--color-destructive-foreground)', /* white */
          },
          muted: {
            DEFAULT: 'var(--color-muted)', /* subtle-surface */
            foreground: 'var(--color-muted-foreground)', /* wisdom-gray */
          },
          accent: {
            DEFAULT: 'var(--color-accent)', /* golden-enlightenment */
            foreground: 'var(--color-accent-foreground)', /* dark-charcoal */
          },
          popover: {
            DEFAULT: 'var(--color-popover)', /* white */
            foreground: 'var(--color-popover-foreground)', /* contemplative-charcoal */
          },
          card: {
            DEFAULT: 'var(--color-card)', /* subtle-surface */
            foreground: 'var(--color-card-foreground)', /* contemplative-charcoal */
          },
          success: {
            DEFAULT: 'var(--color-success)', /* growth-affirmation */
            foreground: 'var(--color-success-foreground)', /* white */
          },
          warning: {
            DEFAULT: 'var(--color-warning)', /* mindful-attention */
            foreground: 'var(--color-warning-foreground)', /* white */
          },
          error: {
            DEFAULT: 'var(--color-error)', /* compassionate-correction */
            foreground: 'var(--color-error-foreground)', /* white */
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          serif: ['Source Serif 4', 'Georgia', 'serif'],
          accent: ['Crimson Text', 'Georgia', 'serif'],
        },
        spacing: {
          'xs': 'var(--spacing-xs)', /* 8px */
          'sm': 'var(--spacing-sm)', /* 13px */
          'md': 'var(--spacing-md)', /* 21px */
          'lg': 'var(--spacing-lg)', /* 34px */
          'xl': 'var(--spacing-xl)', /* 55px */
        },
        boxShadow: {
          'soft': 'var(--shadow-soft)',
          'medium': 'var(--shadow-medium)',
          'strong': 'var(--shadow-strong)',
        },
        borderRadius: {
          DEFAULT: 'var(--radius)',
          'md': 'var(--radius-md)',
          'lg': 'var(--radius-lg)',
        },
        animation: {
          'breathe': 'breathe 4s ease-in-out infinite',
          'lotus-bloom': 'lotus-bloom 2.5s ease-out forwards',
        },
        gridTemplateColumns: {
          'sacred': '1fr 1.618fr 1fr',
        },
        transitionTimingFunction: {
          'contemplative': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        backdropBlur: {
          'monastery': '8px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwindcss-animate'),
    ],
  }