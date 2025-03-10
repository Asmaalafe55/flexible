/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        noirpro: ['Noir Pro', 'sans-serif'],
      },
      boxShadow: {
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        text: '#989595',
        back: '#565454',
        primary: '#f84e4e',
        primaryHover: '#fc2929',
        secondary: '#D7CEC7',
      },
      backgroundImage: {
        bg2: "url('src/assets/img/a.jpg')",
        bg1: "url('src/assets/img/b.jpg')",
        t1: "url('src/assets/img/t1.png')",
        t2: "url('src/assets/img/t2.png')",
        t3: "url('src/assets/img/t3.png')",
        t4: "url('src/assets/img/t4.png')",
      },
    },
  },
}
