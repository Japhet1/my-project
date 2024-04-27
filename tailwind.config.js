/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // rajdhani: "Rajdhani",
        // gruppo: "Mitr",
        // gruppo: "corbel",
        poppins: "Montserrat"
      },
      backgroundImage: {
        hero: "url('/4.jpg')"
      }
     
    },
  },
  plugins: [],
  darkMode: "class"
}
