/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#00a3e0',
        danger: '#dc3545',
        success: '#28a745',
      },
    },
  },
  plugins: [],
}
