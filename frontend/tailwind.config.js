/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'move-left': 'moveLeft 1s ease-in-out',
        'move-down': 'moveDown 1s ease-in-out',
        'move-right': 'moveLeft 1s ease-in-out',
      },
      keyframes: {
        moveLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '80%': {
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
          },
        },
        moveDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
