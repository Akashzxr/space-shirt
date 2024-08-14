/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/components//*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors : {
        'main-green' : 'rgb(89,126,126)',
     },
     spacing : {
       '33' : "33rem",
       'big' : "28rem",
       'minus':"-30px"
     }
    },
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif'],
      'work-sans' : ['Work Sans', 'sans-serif'],
      'Roboto-txt': ['Roboto', 'sans-serif'],
      'Cannon' : ['Canon','sans-serif'],
      'Chivo' : ['Chivo', 'sans-serif'],
      'Herokid' : ['Herokid','sans-serif']
    },
   
  },
  plugins: [],
});

