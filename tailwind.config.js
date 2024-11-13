/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {
        colors: {
          darkGray: '#2b2e4a',
          accentPurple: '#7f5af0',
          bgPrimary: '#1a1c2c',
          bgSecondary: '#282a36',
          textAccent: '#8be9fd',
        },
      },
    },
    plugins: [forms],
}

