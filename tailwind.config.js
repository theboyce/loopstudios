/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Alata'],
      content: ['"Josefin Sans"'],
    },
    extend: {
      screens: {
        sm: '375px',
        md: '1200px',
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)',
      },
      backgroundImage: {
        'desktop-bg': "url('/src/assets/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
