module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./views/*.html'],
  },
  theme: {
    extend: {},
    fontFamily:{
      'Poppins':["Poppins","sans-serif"]
    }
  },
  variants: {},
  plugins: [],
}
