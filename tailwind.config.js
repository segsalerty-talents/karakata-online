module.exports = {
  // mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './*.html',
      './**/*.js',
      './*.js',
      './**/*.vue',
      './*.vue'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E27253',
        success: '#4BB543',
        secondary: {
          100: '#263238',
          200: '#333333',
          300: '#000000',
          400: '#FFF8F6'
        }
      },
      fontSize: {
        '10px': ['10px'],
        '8px': ['8px'],
        '6px': ['6px']
      },
      width: {
        '260px': '260px',
        '1px': '1px'
      },
      height: {
        '2px': '2px'
      },
      margin: {
        '-55px': '-55px',
        '-95px': '-95px',
        '-260px': '-260px',
        '-350px': '-350px'
      }
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: []
}
