'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script1': './js/script1.js',
    'script2': './js/script2.js',
  },
  output: {
    path: './dist',
    filename: 'compressed.[name].js'
  }
}

module.exports = config;