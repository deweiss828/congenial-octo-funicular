module.exports = {
  entry: './browser/js/main.js',
  output: {
    path: './browser/js',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}


