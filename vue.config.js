const _ = require('lodash')
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

const publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

const pkg = require('./package.json')
process.env.VUE_APP_VERSION = _.get(pkg, 'version', '')
process.env.VUE_APP_REPOSITORY = _.get(pkg, 'repository.url', '')

module.exports = {
  publicPath,
  devServer: {
    publicPath
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/assets/style/public.scss\';'
      }
    }
  },
  chainWebpack: config => {
    VueFilenameInjector(config, {
      propName: '__source'
    })
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
      nested: false
    }
  }
}
