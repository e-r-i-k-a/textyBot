const { resolve } = require('path');

module.exports = {
  entry: './client/components/App.jsx',
  output: {
    path: resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, 'client'),
        exclude: '/node_modules/',
        use: 'babel-loader',
      }
    ]
  }
}
