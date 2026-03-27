/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        wedding: {
          cream: '#f8f1e5',
          sand: '#f2e5d3',
          gold: '#c6a06d',
          goldDark: '#af8753',
          wood: '#5f4733',
          muted: '#7a6653',
        },
      },
      boxShadow: {
        soft: '0 12px 28px -16px rgba(93, 63, 32, 0.35)',
      },
    },
  },
  plugins: [],
}

