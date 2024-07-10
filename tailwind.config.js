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
        moss_green: '#68826A',
        moss_green_dark: '#3c4f3e',
        norris_dark: "#313131"
      },
      
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize:{
        contText: "clamp(0.90rem, 0.482rem + 0.714vw, 1.125rem);",
        subText:"clamp(0.875rem, 0.339rem + 1.429vw, 1.225rem)",
        titleText:"clamp(1.50rem, -0.536rem + 4.762vw, 3.25rem)",
        title2Text:"clamp(1.10rem, -0.436rem + 4.362vw, 2.25rem)"
      },
      spacing: {
        'textClamp': 'clamp(1rem, -4.357rem + 14.286vw, 8.5rem)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-list-item::before': {
          content: '""',
          width: 'clamp(1.25rem, 0.625rem + 1.667vw, 2.125rem)',
          height: 'clamp(1.25rem, 0.625rem + 1.667vw, 2.125rem)',
          borderRadius:'100%',
          display: 'inline-block',
          backgroundColor: '#68826A', 
          position: 'absolute',
          left: '-15px',
          top: '0',
        },
      };
      addUtilities(newUtilities, ['before']);
    },
  ],
};
