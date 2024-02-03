

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }, 
    container:{
      center: true, 
      padding: '1rem'
    },
    extend: {
      fontFamily:{
        poppins: "'Poppins', sams-serif",
        roboto: "'Roboto, sans-serif"
      },
      colors: {
        'primary': '#FD3D57',
        'secondary': '#324324'
      }, 
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [
    
  ],
}

