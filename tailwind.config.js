/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '1330px',
      },
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope'],
      },
      keyframes: {
        vibrate: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(1px)' },
          '60%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        vibrate: 'vibrate 1s ease-in-out ',
      },
    },
  },
  plugins: [],
};
