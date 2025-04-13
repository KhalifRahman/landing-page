/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
      },
    },
    
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      Roboto: "Roboto, sans-serif",
      Geist: "Geist, sans-serif",
      Poppins: "Poppins, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },

    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
    },

    animation: {
      blob: "blob 7s infinite"
    }
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect')

  ],
}

