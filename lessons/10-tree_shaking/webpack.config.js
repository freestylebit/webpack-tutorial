'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'scripts': './src/scripts.js',
    'page': './src/page.html'
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  module: {
    rules: [
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // This is necessary for webpack to recognize dead dependencies.
        loader: 'babel-loader',
      }
    ]
  },
}

module.exports = config;