const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  outputDir: './docs',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/Nonchalance/" : "/",
  productionSourceMap: false
}