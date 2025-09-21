// tailwind.config.js
import { defineConfig } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Important: toggle dark mode using class
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2ff',
          100: '#b3daff',
          200: '#80c0ff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0077e6',
          600: '#0062b4',
          700: '#004d82',
          800: '#003851',
          900: '#002321',
        },
      },
    },
  },
  plugins: [
    forms,       // For better form styling
    typography,  // For prose styling
  ],
});
