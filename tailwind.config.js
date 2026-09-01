/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#09090B',
        bgDeep: '#040405',
        bgSurface: '#101014',
        bgSurfaceElevated: '#16161B',
        textPrimary: '#F3F0EA',
        textSecondary: '#9E9EA6',
        textMuted: '#66666E',
        accentBronze: '#C5A880',
        accentBronzeLight: '#DFCAAB',
        accentBronzeDark: '#9E825D',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
