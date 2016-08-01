'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'vendor': [
      'react',
      'angular',
      'jquery'
    ]
  },
  output: {
    path: './dist',
    filename: 'compressed.[name].js'
  }
}

module.exports = config;