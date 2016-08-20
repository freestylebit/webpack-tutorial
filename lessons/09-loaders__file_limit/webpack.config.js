'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'page': './src/page.html',

    'scripts': glob.sync('./src/**/*.js'),
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
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'file-loader?limit=10000&name=/img/[name].[ext]'
      },
    ]
  }
}

module.exports = config;