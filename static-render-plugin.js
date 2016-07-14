const { writeFile } = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')

const writeFileP = (name, content) => (
  new Promise((resolve) => {
    mkdirp(path.dirname(name), (err) => {
      if (err) throw new Error(err)

      writeFile(name, content, (err) => {
        if (err) throw new Error(err)

        return resolve({
          name,
          content
        })
      })
    })
  })
)

const build = (destDir, routes, app) => (
  Promise.all(
    routes.map((route) => {
      console.log(`[STATIC] Matching ${route.slice(1)}/`)
      return app(path.join(process.env.BASE_PATH || '/', route.slice(1))).then(({ result }) => {
        console.log(`[STATIC] Writing ${route.slice(1)}/index.html`)
        return writeFileP(
          path.join(destDir, route.slice(1), 'index.html'),
          result
        )
      })
    })
  )
)

module.exports = class {
  constructor ({ routes, getAssetList }) {
    this.routes = routes
    this.getAssetList = getAssetList
  }

  apply (compiler) {
    compiler.plugin('done', ({ compilation }) => {
      const appPath = path.join(compilation.outputOptions.path, 'server.js')
      const app = require(appPath).default

      return build(compilation.outputOptions.path, this.routes, app).catch((e) => {
        console.error(e)
      })
    })
  }
}
