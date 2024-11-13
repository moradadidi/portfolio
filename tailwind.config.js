// tailwind.config.js
import forms from '@tailwindcss/forms';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#1F1F1F',
        bgPrimary: '#121212',
        bgSecondary: '#242424',
        accentPurple: '#7D40F5',
        textAccent: '#9CA3AF',
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [forms],
};
