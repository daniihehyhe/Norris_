/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'smart-home': "url('/images/card_bg.webp')",
      },
      colors: {
        primary: '#161c24',
        highlight1: '#FA541C',
        highlight2: '#22B8CF',
        highlight3: '#FFC81A',
        highlight4: '#0CD66E',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
