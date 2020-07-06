// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  outputDir: './docs',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin()
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        maxSize: 200000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/Nonchalance/" : "/",
  productionSourceMap: false
}