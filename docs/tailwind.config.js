// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../docs/**/*.mdx'], // my markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {
      colors: {
        // Light Theme
        'immich-primary': 'rgb(var(--immich-primary) / <alpha-value>)',
        'immich-bg': 'rgb(var(--immich-bg) / <alpha-value>)',
        'immich-fg': 'rgb(var(--immich-fg) / <alpha-value>)',
        'immich-gray': 'rgb(var(--immich-gray) / <alpha-value>)',
        'immich-error': 'rgb(var(--immich-error) / <alpha-value>)',
        'immich-success': 'rgb(var(--immich-success) / <alpha-value>)',
        'immich-warning': 'rgb(var(--immich-warning) / <alpha-value>)',

        // Dark Theme
        'immich-dark-primary': 'rgb(var(--immich-dark-primary) / <alpha-value>)',
        'immich-dark-bg': 'rgb(var(--immich-dark-bg) / <alpha-value>)',
        'immich-dark-fg': 'rgb(var(--immich-dark-fg) / <alpha-value>)',
        'immich-dark-gray': 'rgb(var(--immich-dark-gray) / <alpha-value>)',
        'immich-dark-error': 'rgb(var(--immich-dark-error) / <alpha-value>)',
        'immich-dark-success': 'rgb(var(--immich-dark-success) / <alpha-value>)',
        'immich-dark-warning': 'rgb(var(--immich-dark-warning) / <alpha-value>)',
      },
      fontFamily: {
        'immich-title': ['Snowburst One', 'cursive'],
      },
    },
  },
  plugins: [],
};
