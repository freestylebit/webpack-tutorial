'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': './src/script.js'
  },
  output: {
    path: './dist',
    filename: 'min.js'
  }
}

module.exports = config;