/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // color 
      colors: {
        'Black': '#1E2832',
        'primaryBG': '#1e28320d',
      },
      // color 

      // fontFamily 
      fontFamily: {
        'robo': ['Roboto', 'sans-serif',],
      },
      // fontFamily 

      // backgroundImage 
      backgroundImage: {
        'collection': "url('/public/images/collection-bg.png')",
      },
      // backgroundImage 
    },
  },
  plugins: [],
}

