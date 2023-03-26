/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.{html,js}"],
  theme: {
    colors :{
      'pblue' : 'rgb(12, 72, 250);',
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    prefix: "d-",
    darkTheme: "wihte",
  },
}
