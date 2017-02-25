'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: {
    'page': './src/page.html',
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
        loader: "file-loader?name=[name].[ext]"
      },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'svg-url-loader?limit=40000&name=img/[name].[ext]'
      },
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/*.pdf',
        to: 'files',
      },
    ]),
  ]
}

module.exports = config;