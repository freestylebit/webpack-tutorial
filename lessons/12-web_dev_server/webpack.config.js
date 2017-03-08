'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': './src/script.js'
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:1234/dist/',
  },
  devServer: {
    port: 1234,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  devtool: 'source-map'
}

module.exports = config;