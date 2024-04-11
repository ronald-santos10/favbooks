/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-bg': '#fff',
        'color-primary': '#3282BC',
        'color-secundary': '#4D4D4D'
      },
      widths:{
        'title-desktop': '32px',
        'title-mobile': '14px',
        'desc-desktop': '20px',
        'desc-mobile': '8px'
      }
    },
  },
  plugins: [],
};
