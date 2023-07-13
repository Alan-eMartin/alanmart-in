/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fafafa',
        secondary: '#282828',
        'border-black': '#282828',
      },
      fontFamily: {
        display: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
        body: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
