'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'scripts': glob.sync('./src/**/*.js'),
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  module: {
    // Pro-tip: Pay attention to plural cases.  'loader' and 'loaders' are two different iterators, and not paying attention to the number of items in the list will give you a bad time.
    loaders: [
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}

module.exports = config;