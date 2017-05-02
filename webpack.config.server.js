const pd = console.log.bind(console)
const path = require('path')
const webpack = require("webpack")
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },

  target: 'node',

  node: {
    __dirname: true,
  },

  externals: [nodeExternals()],

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

  devtool: false,
}
