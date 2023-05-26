/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Josefin Sans', "sans-serif"],
      },
      colors:{
        designColor: "#5552FF",
      },
      backgroundImage:{
        hero:"url('./assets/Union.png')"

      }
    },
  },
  plugins: [],
}

