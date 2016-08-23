'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': [
      './js/script1.js',
      './js/script2.js',
    ]
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  }
}

module.exports = config;