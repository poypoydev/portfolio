/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay-200': 'float 3s ease-in-out 0.2s infinite',
        'float-delay-400': 'float 3s ease-in-out 0.4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
