module.exports = {
  content: [
    // Everything is separated because bracket expansion doesn't want to work
    './src/**/*.svelte',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          900: '#171717'
        },
        hotPink: '#ff5adc',
        blueish: '#3943b7',
        hotRed: '#cc2936',
        greenish: '#1b998b'
      },
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
