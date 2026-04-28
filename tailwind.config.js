/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust these paths to match your folder structure
    "./*.html",             // If your HTML is in the root
  ],
  theme: {
    extend: {
      colors: {
        brandGold: '#F0A500',
        brandTeal: '#00B4D8',
        darkNavy: '#0F2027',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}