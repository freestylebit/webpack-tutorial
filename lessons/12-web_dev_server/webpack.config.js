'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': './src/script.js'
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:3808/webpack/',
  },
  devServer: {
    port: 3808,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}

module.exports = config;