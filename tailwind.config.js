/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      'lato': ["Lato", "sans-serif"]
    },
    extend: {
      colors:{
        'para-text': 'rgba(19, 19, 19, 0.60);',
        'bg-primary': '#0E7A81',
        'main-text':'rgba(19, 19, 19, 0.70)',
        'footer-text': 'rgba(255, 255, 255, 0.90)',
        'footer-sub-text': 'rgba(255, 255, 255, 0.60)',
        'footer-input' : 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
