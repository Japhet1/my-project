/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: 'Rajdhani'
      },
      backgroundImage: {
        hero: "url('/5.jpg')"
      }
     
    },
  },
  plugins: [],
  darkMode: "class"
}
