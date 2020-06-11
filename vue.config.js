
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: `http://hzp.langyiquan.com`,
        changeOrigin: true
      }
    },
  }
}
