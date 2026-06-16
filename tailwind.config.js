/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      orange: {
        DEFAULT: '#E8723C',
        50: '#FCEFE7',
        100: '#F8DCC9',
        200: '#F8DCC9',
        400: '#EF8A56',
        500: '#E8723C',
        600: '#D45E2A',
        700: '#B14A1E',
      },
      ink: {
        DEFAULT: '#1F1A17',
        soft: '#3A332E',
        muted: '#6B635C',
      },
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      current: 'currentColor',
    },
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        heading: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}


