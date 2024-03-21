/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      firstq: { 'max': '1615px' },
      secondq: { 'max': '1420px' },
      thirdq: { 'max': '1127px' },
      fourthq: { 'max': '915px' },
      mobile: { 'max': '500px' }
    },
    extend: {}
  },
  plugins: []
}
