/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair", sans-serif'],
        sfpro: ['"SF Pro Display",cursive'],
      },
      colors: {
        primary: '#41A0E4',
      },
    },
  },
  plugins: [],
}
