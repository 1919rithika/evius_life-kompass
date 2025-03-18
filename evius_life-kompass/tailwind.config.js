/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    plugins: [
      require('tailwindcss-animate')
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          ring: 'var(--ring)',
          // ... other custom colors
        }
      }
    },
    // ... rest of your config
  }