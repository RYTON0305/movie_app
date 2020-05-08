//vue.config.js
const path = require('path')
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/style.less')]
    }
  }
}
