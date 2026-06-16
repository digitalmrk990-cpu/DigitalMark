/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#D4A343',
          50: '#FDF6E8',
          100: '#F9ECC8',
          200: '#F3DCA3',
          400: '#E0B959',
          500: '#D4A343',
          600: '#B8892E',
          700: '#966E20',
        },
        cream: {
          DEFAULT: '#F5F0E6',
          50: '#FAF7F1',
          100: '#F5F0E6',
          200: '#EBE3D4',
        },
        ink: {
          DEFAULT: '#1C1917',
          soft: '#3A332E',
          muted: '#6B635C',
        },
      },
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
