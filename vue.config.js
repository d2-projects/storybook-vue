const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

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
  },
  chainWebpack: config => {
    VueFilenameInjector(config, {
      propName: '__source'
    })
  }
}
