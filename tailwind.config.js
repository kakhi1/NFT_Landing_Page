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
        hero:"url('./assets/Union.png')",
        people:"url('./assets/people.jpg')",
        people2:"url('./assets/people2.jpg')",
        mintround1:"url('./assets/mintround1.jpg')",
        mintround2:"url('./assets/mintround2.jpg')",
        mintround3:"url('./assets/mintround3.jpg')",
        mintround4:"url('./assets/mintround4.jpg')",
        finalsecbg:"url('./assets/finalsecbg.jpg')",
        finalsecbg2:"url('./assets/finalsecbg2.png')",
        finalsecbg3:"url('./assets/finalsecbg3.jpg')",


      }
    },
  },
  plugins: [],
}

