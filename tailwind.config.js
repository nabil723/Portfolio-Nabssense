/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Public/**/*.{html,js,php}',
  './Public/index.php',],
  theme: {
    extend: {
      colors: {
        primary: {
          'base': '#0EBADD',
          100: '#ECFBFE',
          200: '#BBF1FB',
          300: '#8BE7F9',
          400: '#5ADCF6',
          500: '#2AD2F4',
          600: '#0EBADD',
          700: '#0B91AD',
          800: '#846358',
          900: '#2D30C8',
        },
        secondary: {
          'base': '#2D30C8',
          100: '#CDCEF4',
          200: '#A3A5EA',
          300: '#5053D8',
          400: '#2D30C8',
          500: '#24269E',
          600: '#1A1C75',
          700: '#11124B',
          800: '#846358',
          900: '#2D30C8',
        },
        netral: {
          'base': '#2D30C8',
          100: '#FFFFFF',
          200: '#F4F6F6',
          300: '#B0B5B5',
          400: '#8B8F8F',
          500: '#676A6A',
          600: '#464848',
          700: '#272828',
          800: '#101111',
          900: '#2D30C8',
        },
      },
      boxShadow: {
        '3xl': '0px 0px 16px rgba(0, 0, 0, 0.16)',
        'card-m': '0px 0px 16px rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        'display-montagu': ['Montagu Slab'],
        'body-grotesk': ['Clash Grotesk'],
      },
    },
  },
}