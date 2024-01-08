/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:['Kablammo'],
        'chronicle-deck-cond': ['chronicle-deck-cond', 'serif'],
        'custom-sans': ['decimal-book', 'sans-serif'],
        'most-purchace':['Abril Fatface', 'cursive']
      }
    },
  },
  plugins: [],
}