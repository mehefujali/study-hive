/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color' : '#00BCD4',
        'secondary-color' : '#4A90E2'
      }
    },
  },
  plugins: [daisyui],
}

