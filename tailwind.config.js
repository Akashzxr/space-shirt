/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components//*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",

  ],
  theme: {
    extend: {
      colors : {
        'main-green' : 'rgb(89,126,126)',
     }
    },
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif'],
      'work-sans' : ['Work Sans', 'sans-serif'],
      'Roboto-txt': ['Roboto', 'sans-serif']
    },
   
  },
  plugins: [],
}

