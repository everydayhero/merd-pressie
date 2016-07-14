const config = require('boiler-room-builder/webpack.server.config')
const StaticRenderPlugin = require('./static-render-plugin')
const plugins = config.plugins

module.exports = Object.assign({}, config, {
  plugins: plugins.concat(
    new StaticRenderPlugin({
      routes: ['/']
    })
  )
})
