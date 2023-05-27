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
        titleRoundBg:
        "linear-gradient(288deg, rgba(12,240,211,1) 31%, rgba(0,255,4,0.9920343137254902) 62%)",
      },
      backgroundImage:{
        hero:"url('./assets/Union.png')",
        people:"url('./assets/people.jpg')",
        people2:"url('./assets/people2.jpg')"


      }
    },
  },
  plugins: [],
}

