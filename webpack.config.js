const path = require('path')

module.exports = {
  entry: './src/web',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.svg$/, use: ['babel-loader', {loader: 'react-svg-loader', query: {
        es5: false,
        svgo: {
          pretty: true,
          plugins: [
            { removeStyleElement: true }
          ]
        }
      }}]},
    ]
  },

  devServer: {
    port: 3004,
    host: '0.0.0.0',
    //contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
  },

  devtool: 'cheap-module-source-map',
}
