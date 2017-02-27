'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'page': './src/page.html',

    'scripts': glob.sync('./src/**/*.js'),
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
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Font files: eot, ttf, woff, woff2
      {
        test: /\.(eot|ttf|woff2?)(\?.*$|$)/,
        loader: 'url-loader'
        // The following works, too, assuming you have a web server set up.
        // loader: 'file?name=some_dir/[name].[ext]'
      },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'svg-url-loader?limit=40000&name=img/[name].[ext]'
      },
    ]
  }
}

module.exports = config;