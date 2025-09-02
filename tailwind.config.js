/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f004f',
          light: '#4a1a6a',
          lighter: '#7a32ad',
          dark: '#22003a',
        },
      },
      fontSize: {
        // smaller global scale (adjusted to match your design screenshot)
        xs: ['0.7rem', { lineHeight: '1rem' }],
        sm: ['0.8rem', { lineHeight: '1.2rem' }],
        base: ['0.9rem', { lineHeight: '1.4rem' }],
        lg: ['1.05rem', { lineHeight: '1.5rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.8rem', { lineHeight: '2.2rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.5rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
