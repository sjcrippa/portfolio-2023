/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors:{
        'primary': '#4717F6',
        'secondary': '#A239CA',
        'dark': '#0E0B16',
        'light': '#E5E3DC',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

