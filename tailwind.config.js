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
        primary: '#00A4DB',
        success: '#4BB543'
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
