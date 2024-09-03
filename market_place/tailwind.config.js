/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1 : 'rgb(23,77,125)',
        color2 : 'antiquewhite',
        color3 : 'rgb(89, 111, 129)'
      },
      screens:{
        'md': {'max': '850px'} 
      }
    },
  },
  plugins: [],
}

