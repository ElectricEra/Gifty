var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },

  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
    publicPath: __dirname + './src'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
  module:  {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
       }
    ]

  },
  target: 'node',
  plugins: []
};
