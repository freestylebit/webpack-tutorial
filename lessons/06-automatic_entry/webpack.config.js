'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'scripts': glob.sync('./js/**/*.js'),
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  }
}

module.exports = config;