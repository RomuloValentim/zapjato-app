/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00FF88',
          secondary: '#0088FF',
          dark: '#0B1325',
          card: '#162238',
          muted: '#8A99AD',
        },
      },
    },
  },
  plugins: [],
}
