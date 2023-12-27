module.exports = {
  darkMode: ['class', '[prefers-color-scheme="dark"]'],
  important: true, // This should allow for overriding the default css values from classless system
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        accent: { DEFAULT: 'var(--color-accent)' },
        neutral: { DEFAULT: 'var(--color-neutral)' },
        info: { DEFAULT: 'var(--color-info)' },
        success: { DEFAULT: 'var(--color-success)' },
        warning: { DEFAULT: 'var(--color-warning)' },
        error: { DEFAULT: 'var(--color-error)' },
        visited: { DEFAULT: 'var(--color-visited)' },
        secondary: { DEFAULT: 'var(--color-secondary)' },
        tertiary: { DEFAULT: 'var(--color-tertiary)' },
        shade: { DEFAULT: 'var(--color-shade)' },
        tint: { DEFAULT: 'var(--color-tint)' },
        base: {
          50: 'var(--color-base-50)',
          100: 'var(--color-base-100)',
          200: 'var(--color-base-200)',
          300: 'var(--color-base-300)',
          400: 'var(--color-base-400)',
          500: 'var(--color-base-500)',
          600: 'var(--color-base-600)',
          700: 'var(--color-base-700)',
          800: 'var(--color-base-800)',
          900: 'var(--color-base-900)',
          950: 'var(--color-base-950)',
          lightest: 'var(--color-base-lightest)',
          darkest: 'var(--color-base-darkest)',
        },
      },

      fontFamily: {
        sans: 'Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      backgroundImage: {
        'arrow-down':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")",
        'caret-down':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentFill' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
    container: false,
  },
}
