const defaultTheme = require('tailwindcss/defaultTheme');
const { colors } = defaultTheme;

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: (theme) => ({
        'process-pattern-svg': "url('/src/assets/processpatternpad.svg')",
      }),
      colors: {
        gray: {
          ...colors.gray,
          50: '#fafafa',
        },
      },
      margin: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        '-9': '-2.25rem',
      },
      padding: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        14: '3.5rem',
        28: '7rem',
      },
      height: {
        0.5: '0.125rem',
        2.5: '0.625rem',
        3.5: '0.925rem',
      },
      width: {
        0.5: '0.125rem',
        2.5: '0.625rem',
        3.5: '0.925rem',
        72: '18rem',
      },
    },
  },
  variants: {
    textColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'focus-within',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
