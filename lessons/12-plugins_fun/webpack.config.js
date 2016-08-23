'use strict';

const webpack = require('webpack');
const glob = require('glob');
const autoprefixer = require('autoprefixer');

let config = {
  entry: {
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
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader']
      },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 100 versions'] }) ],
  plugins: [
    // TODO: Uncomment the CommonsChuckPlugin line and see the bundles change in size!

    // Pro-tip: Order matters here.
    //new webpack.optimize.CommonsChunkPlugin(['library', 'vendor'], '[name].min.js'),
  ]
}

module.exports = config;