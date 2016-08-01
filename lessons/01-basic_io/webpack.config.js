'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': './js/script.js'
  },
  output: {
    path: './dist',
    filename: 'compressed.js'
  }
}

module.exports = config;