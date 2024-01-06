/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins:[ 'Poppins', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
        dancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        'primary':'#9D9570',
        'secondary':'#B5AF93',
        "slate-gray": "#6D6D6D",
        "Lightgray": "#D9D9D9",
        'blackVar':"#292D33",
        'reviewBtn':"#7166f2"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        '4xl':'10px 10px 17px 0px rgba(0,0,0,0.75)'
      },
      backgroundImage: {
        'whyChooseUs':"linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('src/assets/whyChooseUs.png')",
        'whyChooseUs2':"linear-gradient(to right,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('src/assets/whyChooseUs2.png')",
        'welcome':"url('src/assets/welcome.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}