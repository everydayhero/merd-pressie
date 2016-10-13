module.exports = {
  plugins: [
    DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`
    })
  ]
}
