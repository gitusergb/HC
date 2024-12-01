/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        customTransparent: '#b8f2f238',
        lightblue:'#e7f5f5',
        skyBlue:'#7ad6d5',
      },
    },
  },
  plugins: [],
}

