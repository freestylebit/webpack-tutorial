'use strict';

const webpack = require('webpack');
const glob = require('glob');
const autoprefixer = require('autoprefixer');

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
    loaders: [
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file?name=[name].[ext]"
      },
    ]
  }
}

module.exports = config;