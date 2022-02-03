module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moonlit1: '#0F2027',
        moonlit2: '#203A43',
        moonlit3: '#2C5364',
      },
      fontFamily: {
        Roboto: ['Roboto']
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
}
