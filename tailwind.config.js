/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      bottom: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


