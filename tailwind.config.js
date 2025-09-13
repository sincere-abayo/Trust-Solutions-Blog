/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A237E', // Deep Blue
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          DEFAULT: '#FFA726', // Bright Orange
        },
        secondary: {
          DEFAULT: '#29B6F6', // Light Blue
        },
        dark: {
          DEFAULT: '#212121', // Dark Gray/Black
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
