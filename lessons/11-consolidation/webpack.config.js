'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'library': [
      './src/library1.js',
      './src/library2.js',
      'jquery'
    ],
    'scripts': glob.sync('./src/**/*.js'),
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
    ]
  }
}

module.exports = config;