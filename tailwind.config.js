/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      headingM: ['32px', '36px'],
      headingS: ['24px', '27.58px'],
      bodyM: ['20px', '20px'],
      bodyS: ['16px', '25px'],
      index: ['14px', '16.09px'],
      bodyXS: ['12px', '13.79px'],
    },
    colors: {
      background: '#EFF5FF',
      border: '#D6D9E6',
      denim: '#022959',
      denimActive: '#164A8A',
      coolGrey: '#9699AA',
      ligthBlue: '#ABBCFF',
      lightGrey: '#D6D9E6',
      orange: '#FFAF7E',
      pink: '#F9818E',
      purple: '#483EFF',
      redErrors: '#EE374A',
      skyBlue: '#BEE2FD',
      lightestGrey: '#F8F9FF',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
