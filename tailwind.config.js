/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-ivory': '#faf8f5',
        'brand-brown': '#4a2e1b',
        'brand-maroon': '#8b2e2e',
        'brand-gold': '#d4af37',
        'brand-charcoal': '#1c1c1c',
        'brand-sand': '#e6d8c3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(74, 46, 27, 0.1)',
      }
    },
  },
  plugins: [],
}
