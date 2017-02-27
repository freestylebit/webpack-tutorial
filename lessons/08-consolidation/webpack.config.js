'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'library': [
      './src/library1.js',
      './src/library2.js'
    ],

    'scripts': './src/scripts.js',
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  plugins: [
    // TODO: Uncomment the CommonsChuckPlugin line and see the bundles change in size!
    // Pro-tip: Order matters here.
    new webpack.optimize.CommonsChunkPlugin({ name: 'library' })
  ]
}

module.exports = config;