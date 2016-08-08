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
        loader: "file?name=some_dir/[name].[ext]"
      },
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}

module.exports = config;