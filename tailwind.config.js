/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
sm: '480px',
md: '768px',
lg: '976px',
xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedMax: 'hsl(0, 100%, 50%)',
        brightRedLight: 'hsl(12, 88%, 70%)',
        darkGrayishBlue: 'rgb(47, 79, 79)',
        veryLightGray: 'hsl(0, 0%, 83%)',
        veryDarkBlue: 'hsl(252, 85%, 21%)',
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)'
      }
    },
  },
  plugins: [],
}
