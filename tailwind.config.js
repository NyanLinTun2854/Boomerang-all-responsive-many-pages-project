/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppin': ['Poppins'],
        'playFair': ['Playfair Display'],
        'playFairSC': ['Playfair Display SC']
      },
      colors: {
        lightWhite: 'rgba(255, 255, 255, .1)',
        pink: 'rgba(12, 34, 34, 12)',
        pBlue: '#505cfd',
        cardActive: "#788487"
      }
    },

  },
  plugins: [],
}
