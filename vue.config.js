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
  productionSourceMap: false
}