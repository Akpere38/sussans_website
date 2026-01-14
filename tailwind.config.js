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
          50: '#e6f0ff',
          100: '#b3d1ff',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          900: '#001a33',
        },
        accent: {
          500: '#00a86b',
          600: '#008c59',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#e9ecef',
          800: '#2d3748',
          900: '#1a202c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}