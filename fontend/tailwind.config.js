/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        bg_login: '#FFCCCC',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },

      animation: {
        slideInLeft: 'slideInLeft 0.3s ease',
        fadeOut: 'fadeOut 1s ease forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(calc(100% + 32px))' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOut: {
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}