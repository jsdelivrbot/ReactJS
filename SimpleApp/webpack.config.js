module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "app.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
