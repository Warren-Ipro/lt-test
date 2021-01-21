const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enable: false,
    content: [
      './src/**/*.{js,jsx,ts,tsx}'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lt-blue': {
          50: '#F5F7FF',
          100: '#EBF0FF',
          200: '#CCD9FF',
          300: '#ADC2FF',
          400: '#7094FF',
          500: '#3366FF',
          600: '#2E5CE6',
          700: '#1F3D99',
          800: '#172E73',
          900: '#0F1F4D',
        },
        'lt-dark': {
          50: '#f8f9f9',
          100: '#E2E5E9',
          200: '#C4CBD2',
          300: '#A7B1BC',
          400: '#8A98A6',
          500: '#6C7E8F',
          600: '#576573',
          700: '#414B56',
          800: '#2B3239',
          900: '#16191D',
        },
        "blue-gray": colors.blueGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        "amber": colors.amber,
        "lime": colors.lime,
        "emerald": colors.emerald,
        "cyan": colors.cyan,
        "light-blue": colors.lightBlue,
        "violet": colors.violet,
        "fuchsia": colors.fuchsia,
        "rose": colors.rose,
      },
      transitionProperty: {
        'height': 'height',
        'max-h': 'max-height'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-10': '-10',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
      },
      gridRoweEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
      },
      rotate: {
        '-30': '-30deg',
        '30': '30deg',
      },
      skew: {
        '29': '29deg',
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover', 'focus'],
      gradientColorStops: ['active', 'group-hover'],
      translate: ['active', 'group-hover'],
    },
    aspectRatio: ['responsive'],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
}
