const defaultTheme = require('tailwindcss/defaultTheme');
const { generate } = require('@ant-design/colors');

function mapAntdColorsToTw(colors) {
  const newColors = Object.fromEntries(
    colors.map((color, index) => {
      return [index === 0 ? '50' : index * 100, color];
    }),
  );
  newColors['DEFAULT'] = newColors['500'];
  return newColors;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'media',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: mapAntdColorsToTw(generate('#2D5698')),
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
