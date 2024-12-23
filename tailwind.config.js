/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color' : '#00BCD4',
        'primary-color2' : '#84cfd9',
        'secondary-color' : '#4A90E2'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], 
  },
}

