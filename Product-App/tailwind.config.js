/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container:{
      padding:{
        DEFAULt:'30px',
        lg:0,
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1440px',
    },
    extend:{
      colors:{
        primary:'#222222',
        secondary:'#F5E6E0',
      }
    }
  },
  plugins: [],
}

