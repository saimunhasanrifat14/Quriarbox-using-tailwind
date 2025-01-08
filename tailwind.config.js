/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  fontFamily :{
    raleway :  "var(--raleway)",
  },
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: '1rem', // Default padding
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}