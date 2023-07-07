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
        'primary': '#F4BC15',
        'secondary': '#B8593E',
        'dark': '#1E1B1F',
        'light': '#E5E3DC',
      }
    },
  },
  plugins: [],
}

