/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Saira Semi Condensed', serif"
      },
      spacing: {
        '34%': '34%',
        '56%': '56%',
        '62%': '62%',
      },
      colors: {
        'main': 'rgb(18 17 21)'
      }
    },

  },
  plugins: [],
};
