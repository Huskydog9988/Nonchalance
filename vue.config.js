module.exports = {
  outputDir: "./docs",
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/Nonchalance/' : '/'
}