/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}", // Bu satır ana dizindeki App.tsx'i görmesini sağlar
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(192, 144, 102, 0.3)',
      },
      colors: {
        brand: {
          blue: '#1E1B4B',
          cream: '#FAF9F6',
          beige: '#E8DCCA',
          darkBeige: '#C09066',
          gold: '#C09066',
          lightBlue: '#E0E7FF',
        }
      }
    },
  },
  plugins: [],
}