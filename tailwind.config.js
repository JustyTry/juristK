/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
      },
      backgroundColor: {
        'darkblue': '#1f3044',
        'light': '#f5f7ed',
      }
    },
  },
  plugins: [],
}

