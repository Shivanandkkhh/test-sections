/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.{html,js,liquid}",
    "./blocks/*.{html,js,liquid}",
    "./snippets/*.{html,js,liquid}",
    "./js/**/*.{js,svelte,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'small': '390px',
        'md-small': '768px',
        'md': '1024px',
        'lg': '1280px',
        'lg-large': '1440px',
        '2xl': '1550px',
      },
      colors: {
        // Legacy color tokens (used in existing code)
        'ah-navy': '#092846',
        'ah-teal': '#52c3c2',
        'text-teal': '#358282',
        'text-teal-600': '#007867',
        'body-text': '#323e46',
        'heading-text': '#092846',
        // Orange color palette
        orange: {
          100: '#FF7121',
          90: '#FF7F37',
          80: '#FF8F4D',
          70: '#FF9C64',
          60: '#FFAA7A',
          50: '#FFB890',
          40: '#FFC6A6',
          30: '#FFD4BC',
          20: '#FFE3D3',
          10: '#FFF1E9',
        },
        background: {
          100: '#F9FAF3',
        },
        white: '#FFFFFF',
        slate: {
          100: '#E1E1E1',
          200: '#e2e8f0',
          400: '#90a1b9',
        },
        grey: {
          100: '#727272',
          90: '#808080',
          80: '#8F8F8F',
          70: '#9D9D9D',
          60: '#ABABAB',
          50: '#B9B9B9',
          40: '#C7C7C7',
          30: '#D5D5D5',
          20: '#E3E3E3',
          10: '#F1F1F1',
        },
        'dark-grey': {
          100: '#414041',
          90: '#545354',
          80: '#676667',
          70: '#7A797A',
          60: '#8D8C8D',
          50: '#A09FA0',
          40: '#B3B3B3',
          30: '#C6C6C6',
          20: '#D9D9D9',
          10: '#ECECEC',
        },
        // Black color palette
        black: {
          100: '#1E1E1E',
          90: '#353535',
          80: '#4B4B4B',
          70: '#626262',
          60: '#787878',
          50: '#8E8E8E',
          40: '#A5A5A5',
          30: '#BBBBBB',
          20: '#D2D2D2',
          10: '#E8E8E8',
        },
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '14': '56px',
        '20': '80px',
      },
      borderRadius: {
        'xl': '12px',
        'full': '9999px',
      },
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      prefix: ""
    })
  ],
  prefix: ''
}
