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
