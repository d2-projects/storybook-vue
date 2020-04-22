const publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

module.exports = {
  publicPath,
  devServer: {
    publicPath
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/assets/style/public.scss';`
      }
    }
  }
}
