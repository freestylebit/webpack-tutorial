'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'vendor': [
      'jquery',
      'react'
    ],

    'library': [
      './src/library1.js',
      './src/library2.js'
    ],

    'scripts': './src/scripts.js',
    'page': './src/page.html'
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
        loader: "file?name=[name].[ext]"
      },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'file-loader?name=/img/[name].[ext]'
      },
    ]
  },
  plugins: [
    // TODO: Uncomment the CommonsChuckPlugin line and see the bundles change in size!

    // Pro-tip: Order matters here.
    //new webpack.optimize.CommonsChunkPlugin(['library', 'vendor'], '[name].min.js'),
  ]
}

module.exports = config;