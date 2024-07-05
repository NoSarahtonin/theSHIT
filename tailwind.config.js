/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'cerise': {  DEFAULT: '#EA3492',  50: '#FDE8EE',  100: '#FBDAE5',  200: '#F7B0CA',  300: '#F387B4',  400: '#EE5DA1',  500: '#EA3492',  600: '#E7188D',  700: '#CB1585',  800: '#B0127B',  900: '#940F6E',  950: '#860E67'},
      },
    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('daisyui')],
}